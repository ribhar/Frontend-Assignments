function sum(...arg){

    return arg.reduce((acc,cur)=>{

        return acc+cur;

    })
    
}

console.log(sum(1,2,3,4,5,5));

module.exports = sum;