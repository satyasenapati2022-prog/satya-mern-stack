//array->

// let arr=[23,45,78,68,84,68,49,83,48,52,46]
// console.log(arr)
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[4])
// console.log(arr[7])

//loop over an array ->

// let heros = ["ironman","thor","black panthor","spyder man","captain america"]
// for(let i=0; i<heros.length;i++){
//     console.log(heros[i])
// }

// for(let i of heros){
//     console.log(i)
// }

//array method ->
// letfoodItems=["burger","noodels","pizza","biriyani"]
// console.log(foodItems)
// foodItems.push("dahibara")
// console.log(foodItems)
// foodItems.pop()
// console.log(foodItems)
// foodItems.unshift("poha")
// console.log(foodItems)
// foodItems.shift()
// console.log(foodItems)


// to string() ->

// let marks=[56,58,49,46,95]
// console.log(marks)
// let mark=marks.toString()
// console.log(mark)


//concat ->


// let food = ["burger","noodels","pizza","biriyani,"]
// let drink=["mozito", "old monk","peterscot","royan challenge"]
// let vegetable=["chicken biriyani","chicken lolipop"]
// let res=food.concat(drink)
// console.log(res)
// let res1=[food+drink+vegetable]
// console.log(res1)

// slice ->

// let arr=[23,45,78,90,54,43,32,21]
// console.log(arr.slice(2,5))
// console.log(arr.slice(4,8))
// console.log(arr.slice(0,6))
// console.log(arr.slice(2))
// console.log(arr.slice(-3))
// console.log(arr.slice(4,-2))

// splice -.

// let month=["jan","mar","apr","june"]
// console.log(month)
// month.splice(1,0,"feb")
// console.log(month)
// month.splice(4,0,"may")
// console.log(month)
// month.splice(1,2)
// console.log(month)
// let marks = [78,90,54,32,98,25,70]
// let sum = 0
// for(let i=0;i<marks.length; i++ ){
// sum=sum+marks[i]
// }
// let avg = sum/marks.length
// console.log(avg)


// let items=[789,543,590,432,489]

// let i =0
// for(let val of items){
// console.log(`value of index${i} = ${val}`)
// let offer=val/10;
// items[i]=items[i]-offer;
// console.log(`value after offer=${items[i]}`);
// i++
// }

function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

// Example
let result = countVowels("Hello World");
console.log(result); // Output: 3