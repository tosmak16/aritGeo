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
    describe("check if the array entered is an arithmetic progression ", () => {
        it("should return Arithmetic", () => {
            assert.equal(app.aritGeo([1, 2]), "Arithmetic");
        })
    })

    describe("check if the array entered is a geometric progression", () => {
        it("should return Geometric", () => {
            assert.equal(app.aritGeo([2, 4, 8]), "Geometric");
        })
    })
    describe("if the array entered is neither geometric nor arithmetic progression", () => {
        it("should return -1", () => {
            assert.equal(app.aritGeo([1, 3, 7, 10]), -1);
        })
    })




})