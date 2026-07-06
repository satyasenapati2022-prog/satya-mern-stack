// example of a map function ->

// let nums = [4,5,6,8,9,3,2]
// let newArr = nums .map((val) => {
//     return val*val
// })
// console.log(nums)
// console.log(newArr)

// example of  a fitter method ->
// q.print only even no.in the given array.

let arr = [2,3,4,5,6,7,8,9]
let evenArr = arr.filter((val) => {
    return val % 2 == 0;
})
console.log(arr)
console.log(evenArr)

// we are given array of marks of student . filter out of the  marks of student that scored more than 90.

let marks = [89,86,34,91,32,64,92,45] 
let  newmarks = marks.filter((nit) = > {
    return nit >= 90;
})
console.log( new marks)


