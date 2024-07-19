const processor = require('./processor.js');

describe("transmission processor", function () {

    test("takes a string and returns an object", function () {
        let result = processor("9701::<489584872710>");
        expect(typeof result).toEqual("object");
    });

    test("throws error if '::' not found", function () {
        const expectedError = new Error('Data is invalid ; should contain "::"');
        expect(() => { processor("9701<489584872710>"); }).toThrow(expectedError);
    });

    test("returns id in object", function () {
        let result = processor("9701::<489584872710>");
        expect(result.id).not.toEqual(undefined);
    });

    test("converts id to a number", function () {
        let result = processor("9701::<489584872710>");
        expect(result.id).toEqual(9701);
    });

    test("returns rawData in object", function () {
        let result = processor("9701::<487297403495720912>");
        expect(result.rawData).not.toEqual(undefined);
    });

    test("Manque-le < au début", function (){
        const expectedError = new Error('rawData is invalid ; Manque-le < au début');
        expect(() => { processor("9701::487297403495720912>"); }).toThrow(expectedError);
    });

    test("Manque-le > à la fin", function (){
        const expectedError = new Error('rawData is invalid ; Manque-le > à la fin');
        expect(() => { processor("9701::<487297403495720912"); }).toThrow(expectedError);
    });

    test("Manque-le < et >", function (){
        const expectedError = new Error('rawData is invalid ; Manque-le < et >');
        expect(() => { processor("9701::487297403495720912"); }).toThrow(expectedError);
    });

    test("La partie id de transmission ne peut pas être converti en Number", function (){
        const expectedError = new Error('id is invalid ; ne peut pas être converti en nombre');
        expect(() => { processor("abc::<487297403495720912>"); }).toThrow(expectedError);
    });

    test("la valeur de rawData ne peut contenir que des chiffres entre < et >", function (){
        const expectedError = new Error('rawData is invalid ; rawData ne peut contenir que des chiffres entre < et >');
        expect(() => { processor("9701::<4872974#Abc5720912>"); }).toThrow(expectedError);
    });
});