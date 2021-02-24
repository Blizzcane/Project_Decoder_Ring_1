// Write your tests here!
const { expect } = require("chai");
const substitution = require("../src/substitution");

describe("substitution", () => {
    it("should return an encoded message", () => {
        const expected = "sudrlh";
        const actual = substitution("Kishor", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
    it("should make sure alphabet cipher has unique characters", () => {
        const actual = substitution("Kishor", "xoyqocgrukswaflnthdjpzibev");
        expect(actual).to.be.false;
    });
    it("should return a decoded message correctly", () => {
        const expected = "kishor";
        const actual = substitution("sudrlh", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
    });
})