// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toLacaleString())
console.log(typeof myDate);

// let myCreatedDate = new Date (2024, 0, 2024)
let myCreateddate = new Date (2024 , 0 , 2024)
console.log(myCreateddate.toDateString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/ 1000));

let newDate = newDate()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLacaleString(`Ddefault`, {
    weekday: "Long"
})