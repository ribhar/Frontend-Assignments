var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var myName = "Ritik Bhardwaj";
var myAge = 21;
var height = 180;
var isMarried = true;
if (isMarried) {
    console.log(myage);
}
else {
    console.log(myname);
}
var arr = [1, 2];
var arr2 = __spreadArray(__spreadArray([], arr, true), [3], false);
// console.log(myname,myage) 
function add(a, b) {
    return a + b;
}
add(1, 2);
add("s", "s");
var masai = {
    username: "masaischool",
    human: {
        leg: true,
        fur: false
    },
    // age: 2,
    isMarried: false
};
var mypet = {
    food: "nothing"
};
