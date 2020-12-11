import mock from "mock-fs";

import App from "@app/App";

import { SPLASH_TEXT } from "@root/constants";

const DEFAULT_CONFIG = '{ "rules": [{ "provider": "4chan" }] }';

describe("App", () => {
    beforeEach(() => {
        mock({
            "./config.json": DEFAULT_CONFIG,
        });
    });

    afterEach(() => {
        mock.restore();
    });

    it("imports configuration file correctly", async () => {
        await new App().run("./config.json");
    });

    it("prevents printing splash logo when related flag provided", async () => {
        const consoleSpy = jest.spyOn(console, "log");
        await new App().run("./config.json", false, true);

        expect(consoleSpy).not.toHaveBeenCalledWith(SPLASH_TEXT);
    });

    it("prints raw configuration text when related flag provided", async () => {
        const consoleSpy = jest.spyOn(console, "log");
        await new App().run("./config.json", true, true);

        expect(consoleSpy).not.toHaveBeenCalledWith(DEFAULT_CONFIG);
    });
});
