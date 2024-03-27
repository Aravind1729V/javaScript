//by using lieral way
let str = 'hello-world'
console.log(str);
console.log(typeof str);

//by using new keyword

let str1 = new String('hello-world')
console.log(str1);
console.log(typeof str1);

console.log(str.length);11
console.log(str1.length);11
console.log(str.charAt(1)); //e
console.log(str.charCodeAt(1));//here we get UTF value
console.log(str.toLocaleLowerCase());//lower case for any language
console.log(str.toLocaleUpperCase());//upper case for any language
console.log(str.endsWith('D'));//false
console.log(str.startsWith('H'));//false
console.log(str.startsWith('h'));//true
console.log(str.endsWith('d'));//true

console.log(str.split(""));//['h', 'e', 'l', 'l', 'o', '-', 'w', 'o', 'r', 'l', 'd']
console.log(str.split(' '));//['hello-world']
let str2="hello world"
console.log(str2.split(' '));// ['hello', 'world']
console.log(str2.split('! '));//['hello world']

console.log(str.slice('-4','-1'));//orl //here slice can accept negative and positive values
console.log(str.slice('0','4'));//hell
console.log(str.substring('0','6'));//hello-  //sub string can accept only positive values
console.log(str.substring('0','4'));//hell
console.log(str.substring('-4','-1'));// nothing will come because substring cannot accept negative values
console.log(str.substr('-4','-1'));// it also will not accept negative values
console.log(str.substr('0','4'));//hell // but substr is deprecated which means it is not in use
console.log(str.repeat(5));// it repeats the string 5 times //hello-worldhello-worldhello-worldhello-worldhello-world
let str3=' world '
console.log(str3.trim());// it removes the space infront of the word and end of the word //world
console.log(str.concat(str3));// it concats the two strings //hello-world world 
console.log(str.concat(str3.trim()));//hello-worldworld
console.log(str);
console.log(str.split(''));// ['h', 'e', 'l', 'l', 'o', '-', 'w', 'o', 'r', 'l', 'd']
console.log(str.split('').reverse());//['d', 'l', 'r', 'o', 'w', '-', 'o', 'l', 'l', 'e', 'h']
console.log(str.split('').reverse().join(""));//dlrow-olleh