import { Command, flags } from "@oclif/command";

import App from "../app/App";

export default abstract class BaseCommand extends Command {
    static flags = {
        help: flags.help({ char: "h" }),
        config: flags.string({ char: "c", description: "specify configuration file path", default: "./config.json" }),
        "print-config": flags.boolean({ description: "print current provided configuration data" }),
        "no-splash": flags.boolean({ description: "prevent display splash logo" }),
    };

    private app: App | undefined = undefined;

    protected getApp() {
        if (!this.app) {
            throw new Error("Tried to access application but its not initialized.");
        }

        return this.app;
    }

    protected async init() {
        this.app = new App();
        return super.init();
    }
    protected async catch(err: Error) {
        const oclifHandler = require("@oclif/errors/handle");

        // do any extra work with error
        return oclifHandler(err);
    }
    protected async finally(_: Error) {
        // called after run and catch regardless of whether or not the command errored
        return super.finally(_);
    }
}
