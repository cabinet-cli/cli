import { SPLASH_TEXT } from "../constants";

import Run from "./run";

describe("`run` command", () => {
    let result: Array<string>;

    beforeEach(() => {
        result = [];
        jest.spyOn(process.stdout, "write").mockImplementation(val => {
            result.push(val as string);
            return true;
        });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("should runs properly", async () => {
        await Run.run([]);

        const indexOf = result.join("").indexOf(SPLASH_TEXT);
        expect(indexOf).not.toEqual(-1);
    });
});
