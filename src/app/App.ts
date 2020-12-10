import Configuration from "./Configuration";

export default class App {
    async run(configFilePath: string) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const config = new Configuration(configFilePath);
    }
}
