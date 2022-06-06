const sum = require("./index")

const { test,expect,describe } = require("@jest/globals")


// test("Should work on all positive numbers", function(){
//     //Accertions.
//     //left side you
//     expect(sum(2,2)).toBe(4);
// })


describe("Test sum function with characters", function(){
    
    
test("it should not work with characters", function(){
    //Accertions.
    //left side you
    expect(sum("2","2")).toBeUndefined();
    expect(sum(2,2)).toBe(4);


})
})