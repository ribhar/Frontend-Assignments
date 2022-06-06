
const validate = require("../src/index");


describe("it should ", function(){

    test("all character satisfied",function(){
        exoect(validate("aaaaaa1A")).toBe(true)
    })

    test("less than 8 char should fail",function(){
        expect(validate("1").status).toBe(false);
        expect(validate("1").message).toBe("min 8 chars is needed");
    })
    test("no lowercase should fail",function(){
        expect(validate("A").status).toBe(false);
        expect(validate("A").message).toBe("atleast one lowercase needed");
    })
    test("no uppercase should fail",function(){
        expect(validate("a").status).toBe(false);
        expect(validate("a").message).toBe("atleast one uppercase needed");
    })
    test("no number should fail",function(){
        expect(validate("aA").status).toBe(false);
        expect(validate("aA").message).toBe("atleast one digit needed");
    })

})