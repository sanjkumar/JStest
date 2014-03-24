describe( "distance converter", function() {

    it("converts inches to centimeter", function () {
        expect(Convert(12, "in").to("cm")).toEqual(30.48);
    });

    it("converts centimeters to yards", function () {
        expect(Convert(2000, "cm").to("yards")).toEqual(21.87);
    });
});

describe("volume converter", function () {

    it("converts liter to gallon", function() {
        expect(Convert(3, "liters").to("gallon")).toEqual(0.79);
    });

    it("converts gallons to cups", function () {
        expect(Convert(2, "gallons").to("cups")).toEqual(32);
    });

    it("throws an error when passed an unknown from-unit", function () {
        var testFn = function () {
            Convert(1, "dollar").to("yens");
        }
        expect(testFn).toThrow(new Error("unrecognized from-unit"));
    });

    it("throws an error when passed an unknown to-unit", function () {
        var testFn = function () {
            Convert(1, "cm").to("furlongs");
        }
        expect(testFn).toThrow(new Error("unrecognized to-unit"));
    });
});

