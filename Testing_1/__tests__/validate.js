
const validate = require("../src/index");


describe("it should ", function(){

    test("all character satisfied",function(){
        expect(validate("aaaaaa1A")).toBe(true)
    })

    test("less than 8 char should fail",function(){
        expect(validate("1").status).toBe(false);
        expect(validate("1").message).toBe("min 8 chars is needed");
    })
    test("no lowercase should fail",function(){
        expect(validate("AAAAAAA1").status).toBe(false);
        expect(validate("AAAAAAA1").message).toBe("atleast one lowercase needed");
    })
    test("no uppercase should fail",function(){
        expect(validate("aaaaaaa1").status).toBe(false);
        expect(validate("aaaaaaa1").message).toBe("atleast one uppercase needed");
    })
    test("no number should fail",function(){
        expect(validate("aaaaAAAA").status).toBe(false);
        expect(validate("aaaaAAAA").message).toBe("atleast one digit needed");
    })

})