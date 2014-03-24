//jasmin test code

describe("addValue(a, b) function", function () {
   it("should equal 3", function () {
       expect( addValue(1, 2)).toBe(3);
   });

   it("should equal 3.75", function(){
       expect( addValue(1.75, 2) ).toBe( 3.75 );
   });

   it("should NOT equal '3' as a String", function () {
        expect( addValue(1, 2)).not.toBe( "3" );
   });
});