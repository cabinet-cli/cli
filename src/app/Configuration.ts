import * as yaml from "yaml";
import * as mineTypes from "mime-types";
import * as fs from "fs-extra";
import * as yup from "yup";

interface ConfigurationRule {
    provider: string;
}

interface ConfigurationData {
    rules: ConfigurationRule[];
}

const CONFIGURATION_VALIDATION_SCHEMA = yup.object<ConfigurationData>().shape<ConfigurationData>({
    rules: yup
        .array<ConfigurationRule>()
        .of<ConfigurationRule>(
            yup
                .object<ConfigurationRule>()
                .shape<ConfigurationRule>({
                    provider: yup
                        .string()
                        .required("Required field 'provider' did not provide on rule definition.")
                        .nullable(false),
                })
                .required("Item of 'rules' configuration field cannot be null.")
                .nullable(false),
        )
        .required("Required field 'rules' did not provide on configuration data."),
});

export default class Configuration {
    public constructor(filePath: string);
    public constructor(data: ConfigurationData);
    public constructor(input: string | ConfigurationData) {
        let config: ConfigurationData;
        if (typeof input === "string") {
            if (!fs.existsSync(input)) {
                let help = "";
                if (input === "./config.json") {
                    help = " (which was default value)";
                }

                throw new Error(`Given configuration file path '${input}'${help} doesn't exist.`);
            }

            const mime = mineTypes.lookup(input);
            if (!mime) {
                throw new Error(`Couldn't look up file type for giving file path: ${input}`);
            }

            switch (mime) {
                case "application/json":
                    config = JSON.parse(fs.readFileSync(input).toString());
                    break;

                case "text/yaml":
                    config = yaml.parse(fs.readFileSync(input).toString());
                    break;

                default:
                    throw new Error(`Given configuration file type '${mime}' is not supported for now.`);
            }
        } else {
            config = input;
        }

        CONFIGURATION_VALIDATION_SCHEMA.validateSync(config);
    }
}
