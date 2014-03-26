/**
 * Created by sanjeev on 26/03/2014.
 */

describe("Some feature", function() {
   describe("#someFeature", function() {
      it("should return true when called", function() {
          expect(someFunction()).toBeTruthy();
          //expect(someFunction()).toBeFalsy();
      });


      it("returns an array of names", function() {
          expect(anotherFunction()).toContain('sanj');
          expect(anotherFunction()).not.toContain('James');
      });
   });
});


describe("User", function() {
   it("should ensure that the user is 12 or less", function() {
       //expect(User.getAge()).toBeGreaterThan(20);
       expect(User.getAge()).toBeLessThan(15);
   });
});