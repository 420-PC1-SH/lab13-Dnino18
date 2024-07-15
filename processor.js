function processor(transmission) {
    if (!transmission.includes("::")) {
        throw new Error('Data is invalid ; should contain "::"');
    }
    let parts = transmission.split("::");
    let rawData = parts[1];
    //console.log(rawData);
    if (rawData.charAt(0) !== "<"){
        throw new Error('rawData is invalid ; Manque-le < au début');
    }
    if (rawData.charAt(rawData.length -1) !== ">"){
        throw new Error('rawData is invalid ; Manque-le > à la fin');
    }
    return {
        id: Number(parts[0]),
        rawData: rawData
    };
}

module.exports = processor;