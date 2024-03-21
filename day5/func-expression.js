// demo() --hoisting is not possible
// let demo = function(){
//     console.log("hello");
// }
// console.log(demo);
// demo()

// let demo2 = function demo1()
// {
//     console.log("hello-world");
// }

// demo1()
// demo2()
// create a function expression to perform arithematic operation of two numbers
// and the input should be given by end users

let m = Number(prompt("enter m value"))
let n = Number(prompt("enter n value"))

let add = function add1(){
    let o = m + n;
    let p = m - n;
    let q = m * n;
    let r = m / n;
    console.log(o);
    console.log(p);
    console.log(q);
    console.log(r);
}
add(
    
)
// console.log(add());
