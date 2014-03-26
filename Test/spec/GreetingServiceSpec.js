/*
 * Created by sanjeev on 25/03/2014.
 */
/* *************************************************************** */
/*            Jasmine Unit test code                             */
/* *************************************************************** */

describe('Greeting Service',

    function () {
        var service,
        // Create a spy with the method getEntity. The spy name is used for logging purposes
            restService = jasmine.createSpyObj('RestService', ['getEntity']);

        // Run before each test
        beforeEach(function () {
            service = new GreetingService(restService);
        });

        it('Checks that getHelloMessage returns \"Hello World!\"',

            function () {
                expect(service.getHelloMessage).toBeDefined()
                expect(service.getHelloMessage()).toBe('Hello World!');
        });

        it('Checks that getHelloMessage does not return \"Goodbye World!\"',

            function () {
                expect(service.getHelloMessage()).not.toBe('Goodbye World!');
        });

        it('waits for getGoodbyeMessage to be called',

            function () {
                // Create a bare spy to track its calls and their parameters
                var callback = jasmine.createSpy();

                // Call the method under test providing the spy callback
                service.getGoodbyeMessage(callback);

                // Check that the spy callback is not called synchronously
                runs(function () {
                    expect(callback).not.toHaveBeenCalled();
                });

                // Wait until callback is called, up to 250 millis timeout
                waitsFor(function () {
                    return callback.callCount > 0;
                }, 'Callback was never called!', 250);

                // Verify callback call parameters
                runs(function () {
                    expect(callback).toHaveBeenCalledWith('Goodbye World!');
                });
        });

        it('Checks that getGoodbye calls rest service',

            function () {
                // Create a generic spy object so that getGoodbyeMessage doesn’t create an error
                // Since the purpose of this test is not to verify the callback being called no further checks are done here
                var callback = jasmine.createSpy();
                // Call method under test
                service.getGoodbyeMessage(callback);
                // Check that mock service was called
                expect(restService.getEntity).toHaveBeenCalled();
        });

        it('checks that an exception is thrown when calling throwIfTrue with a truthy value',

            function () {
                // Note the syntax to check if an error is thrown
                // i.e. expect(function(){fn();}).toThrow(e);
                expect(function () {
                    service.throwIfTrue(true);
                }).toThrow('value cannot be truthy');
                expect(function () {
                    // Pass an arbitrary non-null object
                    service.throwIfTrue({
                        key: 'value'
                    });
                }).toThrow('value cannot be truthy');
        });

        it('checks that calling throwIfTrue with a falsy value returns the same value',

            function () {
                var x;
                expect(service.throwIfTrue(x)).toBe(x);
                expect(service.throwIfTrue(x)).not.toBeNull();
        });
});