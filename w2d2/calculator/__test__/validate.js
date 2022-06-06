
const {test,describe,expect} = require("@jest/globals");
const funl = require("../tax_calculator");

describe("Checking tax for different amounts",function(){
    test("less than 2,50,000",function(){
        expect(funl(2000)).toBe("no tax")
    });

    test("less than 2,50,000",function(){
        expect(funl(2497979)).toBe("no tax")
    });

    test("less than 5,00,000",function(){
        expect(funl(450000)).toBe(22500)
    });

    test("less than 5,00,000",function(){
        expect(funl(425653)).toBe(21282)
    });

    test("less than 10,00,000",function(){
        expect(funl(700000)).toBe(98000)
    });

    test("less than 10,00,000",function(){
        expect(funl(824698)).toBe(115457)
    });

    test("greater than 10,00,000",function(){
        expect(funl(1100000)).toBe(297000)
    });

    test("greater than 100,00,000",function(){
        expect(funl(10000000)).toBe(2700000)
    });
})
