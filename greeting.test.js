const greet = require('./greeting.js');

test("Retour salutation avec le nom", function () {
    expect(greet('Luke')).toBe('Hello, Luke');
});


test("Lorsque undefined, null ou une chaîne de caractère vide est passé à la fonction renvoyer « Hello there »", function () {
    expect(greet(undefined)).toBe('Hello there');
    expect(greet(null)).toBe('Hello there');
    expect(greet('')).toBe('Hello there');
});

test("Si le paramètre passer à la fonction est tout en majuscule, la réponse doit être toute en majuscules", function () {
    expect(greet('HAN')).toBe('HELLO HAN');
});