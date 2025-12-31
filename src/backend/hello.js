/**
 * @Meta
 * @Intent Returns a JSON greeting to prove the API is working.
 * @Inputs None
 * @Outputs {Object} JSON object with greeting message
 * @Dependencies None
 */
function helloWorld() {
    return {
        message: "Hello, World! ApexFlow API is working."
    };
}

module.exports = { helloWorld };
