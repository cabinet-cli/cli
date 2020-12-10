import Configuration from "./Configuration";

export default class App {
    async run(configFilePath: string) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const config = new Configuration(configFilePath);

        console.log(`   ______      __    _            __ 
  / ____/___ _/ /_  (_)___  ___  / /_
 / /   / __ \`/ __ \\/ / __ \\/ _ \\/ __/
/ /___/ /_/ / /_/ / / / / /  __/ /_  
\\____/\\__,_/_.___/_/_/ /_/\\___/\\__/  
                                     `);
    }
}
