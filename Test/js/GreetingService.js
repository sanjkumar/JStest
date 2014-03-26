/*
 **************************************************************** */
/*   Source code */
/* *************************************************************** */

// This is the class under test
function GreetingService(restService) {
    // GreetingService has a dependency on a RestService class which has a getEntity method
    this.restService = restService;
}

// Simulate a synchronous client service
GreetingService.prototype.getHelloMessage = function () {
    return 'Hello World!';
};

// Simulate an async service calling the server.
// Callback parameter should accept the String message to display
GreetingService.prototype.getGoodbyeMessage = function (callback) {
    // Simulate async call to server
    this.restService.getEntity();
    // Callback is called after 1 second to simulate response latency
    setTimeout(function () {
        callback('Goodbye World!');
    }, 100);
};

// Simulate a branch and an exception
// This function expects any object.
// If the object evaluates to a falsy condition (e.g. it is false, null, undefined)
// then it is returned to the caller, otherwise it throws an exception
GreetingService.prototype.throwIfTrue = function (boolValue) {
    if (boolValue) {
        throw {
            name: 'MyCustomError',
            message: 'value cannot be truthy'
        };
    }
    return boolValue;
};

(function () {
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var trivialReporter = new jasmine.TrivialReporter();

    jasmineEnv.addReporter(trivialReporter);

    jasmineEnv.specFilter = function (spec) {
        return trivialReporter.specFilter(spec);
    };

    var currentWindowOnload = window.onload;

    window.onload = function () {
        if (currentWindowOnload) {
            currentWindowOnload();
        }
        execJasmine();
    };

    function execJasmine() {
        jasmineEnv.execute();
        trivialReporter.outerDiv.className += ' show-passed';
    }

})();