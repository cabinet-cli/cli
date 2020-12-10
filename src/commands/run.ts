import BaseCommand from "./BaseCommand";

export default class Run extends BaseCommand {
    static description = "run the archiving process just for once";
    static examples = [`$ cabinet run`];

    static flags = {
        ...BaseCommand.flags,
    };

    async run() {
        const { flags } = this.parse(Run);
        await this.getApp().run(flags.config, flags["print-config"], flags["no-splash"]);
    }

    async catch(error: Error) {
        const oclifHandler = require("@oclif/errors/handle");

        // do any extra work with error
        return oclifHandler(error);
    }
}
