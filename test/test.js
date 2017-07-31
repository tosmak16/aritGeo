const assert = require("chai").assert;
const app = require("../src/app.js");

describe("Determine the sequence of an array of numbers: ", () => {
    // To test for empty array
    describe("Check for an empty array", () => {

            it("should return 0 if an empty array is passed", () => {
                assert.equal(app.aritGeo([]), 0);
            });

        })
        // To test for if AP is valid
    describe(" if the array entered is an arithmetic progression ", () => {
        it("should return Arithmetic", () => {
            assert.equal(app.aritGeo([1, 2]), "Arithmetic");
        })
    })




})