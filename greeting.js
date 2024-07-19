function greet(name) {
    if (name === undefined || name === null || name === '') {
        return "Hello there";
    }

    if (name === name.toUpperCase()) {
        return "HELLO " + name;
    }

    return "Hello, " + name;
}

module.exports = greet;