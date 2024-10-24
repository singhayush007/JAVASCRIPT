const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log ("Don't have user Email");
}

// Falsy Value
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN


// Truthy Value
// "0" , 'false', " " , [] , {} , function(){}

//if (userEmail.length === 0) {
//    console.log("Array is empty");
    
//}

const eemptyobj = {}

if(Object.keys (empty.Object).length === 0) {
console.log("object is empty");
}

// Nullish Coalescing Opertor (??): Null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);


// Terniray Operator 

//condition ?? true : false
const iceTeaprice = 100
iceTeaprice <= 80 ? console.log("less than 80") : console.log("more than 80")
