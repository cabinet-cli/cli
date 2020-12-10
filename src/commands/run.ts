import { Command, flags } from "@oclif/command";

import App from "../app/App";

export default class Run extends Command {
    static description = "run the archiving process just for once";

    static examples = [`$ cabinet run`];

    static flags = {
        help: flags.help({ char: "h" }),
        config: flags.string({ char: "c", description: "specify configuration file path", default: "./config.json" }),
    };

    async run() {
        const { flags } = this.parse(Run);

        await new App().run(flags.config);
    }

    async catch(error: Error) {
        const oclifHandler = require("@oclif/errors/handle");

        // do any extra work with error
        return oclifHandler(error);
    }
}
