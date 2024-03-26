// //this keyword

// console.log(window);
// console.log(this);

// var a=10;
// let b = 20;
// function demo() 
// {
//     var a ="hello-world"
//     let b="java"
//     console.log(a);
//     console.log(b);
//     console.log(this.a);//10
//     console.log(this.b);//undefined

   
// }
// demo()

// //nested function

// function parent() {
//     let a=10;
//     function child() {
//         console.log(a);
//     }
//     return child
    
// }
// parent()()

// function parent(){
//     let a=10;
//     function child() {
//         console.log("i am from child");
//         function child1() {
//             console.log("i am from child1");
//         }
//         return child1
//     }
//     return child
// }
// parent()()()

function parent()
{
    function child1()
    {
        console.log("i am from child1");
        function child1_1()
         {
            console.log(" i am from child1.1");
        }
        return child1_1
    }
    function child2()
    {
        console.log("i am from child2");
    }
    return [child1 ,child2]
}
let res = parent()
res[0]()()
res[1]()