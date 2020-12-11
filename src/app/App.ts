import Configuration from "@app/Configuration";

import { SPLASH_TEXT } from "@root/constants";

export default class App {
    async run(configFilePath: string, printConfig?: boolean, noSplash?: boolean) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const config = new Configuration(configFilePath);

        if (!noSplash) {
            console.log(SPLASH_TEXT);
        }

        if (printConfig) {
            console.info(config.rawConfig);
        }
    }
}
