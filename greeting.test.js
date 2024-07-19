const greet = require('./greeting.js');

test("Retour salutation avec le nom", function () {
    expect(greet('Luke')).toBe('Hello, Luke');
});