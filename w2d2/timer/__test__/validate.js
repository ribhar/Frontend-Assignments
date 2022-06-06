
const {describe,expect,test} = require("@jest/globals");

const funl = require("../index.js");

describe("Checking convertor",function(){

    test("to 5 seconds",function(){

        expect(funl(5200)).toBe('5 seconds')

    })

    test("to 1 minute",function(){

        expect(funl(60000)).toBe('1 minute')

    })

    test("to 3 minutes",function(){

        expect(funl(180000)).toBe('3 minutes')

    })

    test("convert to 3 minutes 20 seconds",function(){

        expect(funl(200000)).toBe('3 minutes 20 seconds')

    })
})