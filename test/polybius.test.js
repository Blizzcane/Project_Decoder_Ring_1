// Write your tests here!
const { expect } = require("chai");
const polybius = require("../src/polybius");

describe("polybius", () => {
    it("should return an encoded message", () => {

        const expected = "524234324324";
        const actual = polybius("Kishor");
        expect(actual).to.equal(expected);
        expect(actual).to.be.string;
    });
    it("should return a decoded message with (i/j)", () => {
        const expected = "k(i/j)shor";
        const actual = polybius("524234324324",false);
        expect(actual).to.equal(expected);   
     });
     it("should return false if number of charaters is odd excluding spaces", () => {
        const actual = polybius("52423432 43242",false);
        expect(actual).to.false;
    });
})