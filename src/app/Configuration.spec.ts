import mock from "mock-fs";

import Configuration from "@app/Configuration";

const DEFAULT_CONFIG = { rules: [{ provider: "4chan" }] };
const DEFAULT_CONFIG_YAML = `
rules:
- provider: 4chan
`;

describe("Configuration", () => {
    beforeEach(() => {
        mock({
            "./config.test.json": JSON.stringify(DEFAULT_CONFIG),
            "./config.thisistestextension": "",
            "./config.yml": DEFAULT_CONFIG_YAML,
            "./config.yaml": DEFAULT_CONFIG_YAML,
            "./image.png": "",
        });
    });

    afterEach(() => {
        mock.restore();
    });

    it("initializes itself with configuration in plain object type", () => {
        expect(new Configuration(DEFAULT_CONFIG).rawConfig).toEqual(DEFAULT_CONFIG);
    });

    it("validates given configuration data", () => {
        expect(() => {
            new Configuration({} as any);
        }).toThrow();
    });

    it("parses configuration file in YAML scheme", () => {
        expect(() => {
            new Configuration("./config.yml");
            new Configuration("./config.yaml");
        }).not.toThrow();
    });

    it("parses configuration from JSON file", async () => {
        const config = new Configuration("./config.test.json");
        expect(config.rawConfig).toEqual(DEFAULT_CONFIG);
    });

    it("throws an error when given file path is not existing", async () => {
        expect(() => {
            new Configuration("./NNNNNNN.json");
        }).toThrowError("Given configuration file path './NNNNNNN.json' doesn't exist.");
    });

    it("throws an error when given file type is not supported", async () => {
        expect(() => {
            new Configuration("./image.png");
        }).toThrowError("Given configuration file type 'image/png' is not supported for now.");
    });

    it("throws an error with help message when given file path is a default value and missing", async () => {
        expect(() => {
            new Configuration("./config.json");
        }).toThrowError("Given configuration file path './config.json' (which was default value) doesn't exist.");
    });

    it("throws an error when given file path has unknown file type", async () => {
        expect(() => {
            new Configuration("./config.thisistestextension");
        }).toThrowError("Couldn't look up file type for giving file path: ./config.thisistestextension");
    });
});
