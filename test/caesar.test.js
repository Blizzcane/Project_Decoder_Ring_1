const { expect } = require("chai");
const caesar = require("../src/caesar");

describe("caesar", () => {
    it("should return a decoded message with capital letters ignored", () => {

        const expected = "help me";
        const actual = caesar("Khos ph", 3, false);
        expect(actual).to.equal(expected);
    });
    it("should return false", () => {
        const actual = caesar("sfa sfa", 0, false);
        expect(actual).to.be.false;
    });
    it("should return false if shift value is more than 25", () => {
        const actual = caesar("Hello", 33, true);
        expect(actual).to.be.false;
    });
    it("should maintain spaces and symbols throughout", () => {
        const expected = "mjd, bmfy'x zu?";
        const actual = caesar("Hey, what's up?", 5, true);
        expect(actual).to.be.equal(expected);
    });
    it("should return letters that are shifted 'off' the alphabet", () => {
        const expected = "cde";
        const actual = caesar("xyz", 5, true);
        expect(actual).to.be.equal(expected);
    });
    
})