

const validate = (pass)=>{
    const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
    const uppercase = lowercase.map((e)=> e.toUpperCase());
    const digits = "1234567890".split("");
    let flag = true;

    if(pass.length<8){

        return {
            status: false,
            message: "min 8 chars is needed"
        }
        // flag = false;
    }

    if(!pass.split("").find(c=> lowercase.includes(c))){
        // flag = false;
        return {
            status: false,
            message: "atleast one lowercase needed"
        }
    }

    if(!pass.split("").find(c=> uppercase.includes(c))){
        // flag = false;
        return {
            status: false,
            message: "atleast one uppercase needed"
        }
    }
    if(!pass.split("").find(c=> digits.includes(c))){
        // flag = false;
        return {
            status: false,
            message: "atleast one digit needed"
        }
    }
    return flag;
}

module.exports = validate