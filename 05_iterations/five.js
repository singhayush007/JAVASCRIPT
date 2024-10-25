const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

coding.forEach( function (val) {
    //console.log(val);
})

coding.forEach((item) => {
    //console.log(item);
})

function printMe(item){
    //consolelog(item);
}

//coding.forEach(printMe)

coding.forEach((item , index , arr ) => {
    console.log(item);
})

const myCoding = [
    {
    languageName : "javascript",
    languageFileName: "Java"
},
{
    languageName : "Java",
    languageFileName : "Javascript"
}
]

myCoding.forEach( (item) =>{
    console.log(item.languageName);

})