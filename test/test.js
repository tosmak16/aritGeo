const assert = require("chai").assert;
const app = require("../src/app.js");

describe("Determine the sequence of an array of numbers: ", () => {

    describe("Check for an empty array", () => {

        it("should return 0 if an empty array is passed", () => {
            assert.equal(app.aritGeo([]), 0);
        });

    })



})