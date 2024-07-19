function processor(transmission) {
    if (!transmission.includes("::")) {
        throw new Error('Data is invalid ; should contain "::"');
    }
    let parts = transmission.split("::");
    let rawData = parts[1];
    //console.log(rawData);
    if (rawData){
        if (rawData.charAt(0) !== "<" && rawData.charAt(rawData.length -1) !== ">"){
            throw new Error('rawData is invalid ; Manque-le < et >');
        }else if (rawData.charAt(0) !== "<"){
            throw new Error('rawData is invalid ; Manque-le < au début');
        }else if (rawData.charAt(rawData.length -1) !== ">"){
            throw new Error('rawData is invalid ; Manque-le > à la fin');
        }        
    }

    rawDataValide = /^<\d+>$/.test(rawData);
    if(!rawDataValide){
        throw new Error('rawData is invalid ; rawData ne peut contenir que des chiffres entre < et >');
    }

    idNombre = parts[0];
    if(idNombre){
        idNombre = Number(idNombre);

        if(isNaN(idNombre)){
            throw new Error('id is invalid ; ne peut pas être converti en nombre');
        }
    }

    return {
        id: idNombre,
        rawData: rawData
    };
}

module.exports = processor;