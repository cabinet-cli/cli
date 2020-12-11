import App from "./App";

describe("App", () => {
    it("imports configuration file correctly", () => {
        new App().run("./config.json");
    });
});
