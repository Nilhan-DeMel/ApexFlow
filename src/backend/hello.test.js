/**
 * @Meta
 * @Intent Unit tests for hello.js module
 * @Inputs None
 * @Outputs Test results
 * @Dependencies jest, hello.js
 */
const { helloWorld } = require('./hello');

describe('helloWorld', () => {
    it('should return a JSON object with status message', () => {
        const result = helloWorld();
        expect(result).toHaveProperty('message');
        expect(result.message).toContain('ApexFlow');
    });
});
