// // by using literal way

// let obj ={
//     name : "aravind",
//     id  : 1,
//     boolean : true,
//     null : null,
//     undefined : undefined,
//     bigint : 10n,
//     arr : [10,20,30],
//     obj1 : {
//         designation : 'developer'
//     },
//     demo : function(){
//         console.log("hello");
//     }
// }
// console.log(obj);
// console.log(obj.demo());
// console.log(obj.obj1);

// console.log(obj.arr);
// console.log(obj.demo);
// obj.demo()

// // by using constructor function

// function obj2(name,id){
//     this.name = name;
//     this.id = id;
// }
// let p1 = new obj2("aravind",100)
// console.log(p1);


//object methods

 let obj = {
    name : "anil",
    id : 1
 }
 console.log(obj);


 //update the exisisting values

 obj.id = 100;
 console.log(obj);

 //add new key and value pair

 obj.designation = "developer"
 console.log(obj);

 //delete key and value pair

 delete obj.designation
 console.log(obj);

 //to concat two object (assign())

 let obj1 = {
    location : "hyderabad"
 }
 console.log(obj1);

 Object.assign(obj,obj1)
 console.log(obj);

 // converts obj into array methods

 let obj2 = Object.entries(obj)
 console.log(obj2);

 //seal() 

//  Object.seal(obj)
// console.log(Object.isSealed(obj));
// obj.last_name = "kumar"
// obj.id=100000
// obj.name='aravind chari'
// console.log(obj);

//freeze()
Object.freeze(obj)
console.log(Object.isFrozen(obj));

obj.last_name = "teja"//not updated 
obj.name = "devil" //not updated
console.log(obj);

console.log(Object.keys(obj));
console.log(Object.values(obj));

