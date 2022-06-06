const {describe,expect,test} = require("@jest/globals");
const funl = require("../funl_arguments");

describe("Checking funl functions with different arguments",function(){
    test("All zero",function(){
        expect(funl(0,0,0,0)).toBe(0);
    })
    test("All negative",function(){
        expect(funl(-1,-2,-3,-9,-3,-4)).toBe(-22);
    })
    test("All positive",function(){
        expect(funl(20,100,500,1000,500)).toBe(2120);
    })
    test("Mixture", function(){
        expect(funl(-1,1,3,-3)).toBe(0);
    })
})