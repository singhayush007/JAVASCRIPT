const  user ={
    username : "Ayush",
    price: 999,


welcomeMessage : function(){
    console.log(`${this.username}, welcome to website `);
    console.log(this);
   }
}
//user.welcomeMessage()
//user.username = "Sam"
//user.welcomeMessage()

console.log(this);

function chai (){
    let usernam = "Ayush"
    console.log(this.username);
}

chai ()

const chai = () =>{
    let username = "Ayush"
    console.log(this);
}


// chai ()

//const addTwo = (num1 , num2) => num1 + num2
//const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1 , num2)=> ({username: "Ayush"})


console.log(addTwo(3 , 4))

const myArray = [1, 2, 3, 4, 5]

// myArray.forEach()

