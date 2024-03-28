//by using literal way 
// let arr = [10,'hello',true,undefined,null,1n]
// console.log(arr);

//by using new keyword

// let arr1 = new Array(20,20,30)
// console.log(arr1);

//methods

let arr=[100,200,300,400,500]
console.log(arr.length);//5
console.log(arr.indexOf(100));//0
console.log(arr.indexOf(10000));//-1

//unshift
let arr1=arr.unshift(1,3)
console.log(arr1);// here we get length of new array that is 7
console.log(arr);//[1, 3, 100, 200, 300, 400, 500] adding ele at first end of array

//shift()
console.log(arr.shift());
console.log(arr);//(6) [3, 100, 200, 300, 400, 500] see diff between past and now

//push()
console.log(arr.push(50,60));
console.log(arr);//(8) [3, 100, 200, 300, 400, 500, 50, 60] adding ele at array end 

//pop()
console.log(arr.pop());
console.log(arr);//(7) [3, 100, 200, 300, 400, 500, 50] removes one element from end 

//slice()
console.log(arr.slice(0,3));
console.log(arr);

//splice()
let arr2 = arr.splice(0,3,"hello")
console.log(arr2);//(3) [3, 100, 200]
console.log(arr);// ['hello', 300, 400, 500, 50]

//reverse()
console.log(arr.reverse());//(5) [50, 500, 400, 300, 'hello']

//join()
console.log(arr.join("+"));//50+500+400+300+hello

//concat()
let arr3 =[10,20]
let arr4 = [30,40]
console.log(arr3.concat(arr4));// [10, 20, 30, 40]

//sort()

let arr5 = [30,10,35,40,50]
console.log(arr5.sort());//(5) [10, 30, 35, 40, 50] all are two digits numbers for that sake 
//it is sorted successfully

let arr6 =[30,2,1,455,6,788]
console.log(arr6.sort());//  [1, 2, 30, 455, 6, 788] starting two ele only sorted

console.log(arr6.sort((a,b)=>{
    return a-b;
}));//(6) [1, 2, 6, 30, 455, 788] all get sorted in ascending order because of a-b

let arr7 =[30,2,1,455,6,788]

//includes()
console.log(arr.includes(100));//false
console.log(arr6.toString());//1,2,6,30,455,788

//from()
let str='hello'
console.log(str);
console.log(Array.from(str));//(5) ['h', 'e', 'l', 'l', 'o']

//isArray()
console.log(Array.isArray(arr6));//true

let arr8 = [10,20,30,40,50]
console.log(arr8);//(5) [10, 20, 30, 40, 50]

arr8.forEach((value,index)=>{
    console.log(`${value}-->${index}`);
})
//10-->0
//20-->1
//30-->2
//40-->3
//50-->4


//filter()
let a= arr8.filter((ele)=>{
    return ele>10
})
console.log(a);//(4) [20, 30, 40, 50]

//map()
let b = arr8.map((ele)=>{
    return ele+10
})
console.log(b);// [20, 30, 40, 50, 60]

//reduce()

let c = arr8.reduce((acc,li)=>{
    return acc + li
},10)
console.log(c);//160