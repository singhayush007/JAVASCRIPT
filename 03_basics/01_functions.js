function SayMyName

{
    console.log("A")
    console.log("Y")
    console.log("U")
    console.log("S")
    console.log("H")
}

SayMyName()

//function addTwoNumbers(number1, number2){
//    console.log(number1 + number2);
// }


function addTwoNumbers (number1 , number2){
// let result = number1 + number2 
// return result 
return number1 + number2
}


const result = addTwoNumbers (3 , 5)
//console.log("Result: " , result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage('Ayush'))

function calculateCartPrice(val1 , val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200 , 400 , 500, 2000))

const user ={
    username : "Ayush",
    price: "199"

}

function handleObject(anyObject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200 , 400 , 100 , 600]

function returnSecondvalue(getArray){
    return getArray[1]
}

//console.log(returnSeconndValue(myNewArray));
//console.log(returnSecondValue([200 , 400, 500, 1000]));