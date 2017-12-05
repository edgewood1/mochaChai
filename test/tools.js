var expect = require("chai").expect;
var tools = require("../index.html");
describe("change()", function() {
    it("It'll change things", function() {
        var results = tools.printName();
        expect(results).to.equal("WOW");
    });
})  