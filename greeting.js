function greet(name) {
    if (name === undefined || name === null || name === '') {
        return "Hello there";
    }

    if (Array.isArray(name)) {
        if (name.length === 2) {
            return "Hello, " + name[0] + " and " + name[1];
        }
        else if (name.length >= 3) {
            const dernierNom = name.pop();
            return "Hello, " + name.join(', ') + ", and " + dernierNom;
        }
    }

    if (name === name.toUpperCase()) {
        return "HELLO " + name;
    }

    return "Hello, " + name;
}

module.exports = greet;