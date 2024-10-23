// singleton
// object.create

// object literals



const JsUser = {
    name : "Ayush",
    "full name": "Ayush singh",
    [mySym]: "mykey1",
    age : 23,
    location: "Lucknow",
    email: "ayush@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["Email"])
console.log(JsUser["fullname"])
console.log(JsUser[mySym])

JsUser.email = "ayush@chatgpt.com"
Object.freeze(JsUser)
JsUser.email ="ayush@chatgpt.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Helo Js User");
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
