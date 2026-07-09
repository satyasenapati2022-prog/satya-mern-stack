
 // ---------------------------------------
 // asynchronous program :-

// console.log("one")
// console.log("two")
// setTimeout(() => {
//     console.log("Hello")
// }, 5000 ) // 5000 ms = 5s
// console.log("three")
// console.log("four")

// // callback function example :-

// function sum(a,b){  // normal function
//     console.log(a + b)
// }
// // a & b are the parameter
// // here sum is a normal function

// function calc(a, b, sumCallback) {  // main / callback function
//     sumCallback(a, b)
// }
// // sumCallback -> a function passed as an argument. inside calc it
// // call the calback function.

// calc(1, 3, sum) // function passed as an argument - {sum}
//-------------------------------------------------------
// function great(name){
//     console.log("hello"+name)
// }

// // greate() is a normal function
// // takes name & print the gritings
// function user(name,callback){// main/callback function
//     callback(name)
// }
// user("rakesh",great)//callback -> greate()

//---------------------------------------------
function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId)
        if(getNextData){
            getNextData()
        }
    },4000); //400 ms =4s
}

// callback hello problem ->

console.log("getting data-1.......")
getData(1,() =>{
    console.log("getting data-2.......")
getData(2,() =>{
    console.log("getting data-3.......")
getData(3,() =>{
    console.log("getting data-4.......")
getData(4,() =>{
    console.log("getting data-5.......")
getData(5)
})
})
})
})

// promise examples ------------------------

// let promise = new promise((resolve ,reject)=> {
//     setTimeout() => {
//         console.log("i am a promise")
//         resolve("sucess")
//         // reject ("some network issue ocuured")
//     },8000)
// })



const getpromise = () => {
    return new Promise((resolve ,reject)=>
}







   