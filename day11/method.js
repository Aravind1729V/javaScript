let a =document.getElementById("demo")
console.log(a);
a.style.border = "2px solid black"
a.style.backgroundColor = "red"
console.dir(a)
console.log(a.children)
a.children[0].textContent = "devil"
a.children[2].style.backgroundColor="blue"
a.children[1].style.color = "pink"
a.children[0].style.color = "green"
a.children[0].style.fontWeight = "bold"
a.children[0].style.backgroundColor = "yellow"
// console.log(a.childNodes);
// a.childNOdes[6].textContent = "java" error
// console.log(a.lastElementChild);
// console.log(a.lastElementChild.nextSibling);
// a.lastElementChild.nextSibling.textContent = "java"
let b = document.getElementsByClassName("demo1")
console.log(b);
console.log(b[0]);
b[0].style.backgroundColor="aqua"
b[1].textContent="React js"
let c = document.getElementsByTagName("ol")
console.log(c);
console.log(c[0].childNodes);
c[0].children[1].style.border ="2px solid black"

console.log(c[0].children[2].parentElement.parentElement.parentElement.parentNode);
console.log(c[0].children[2].parentElement.nextElementSiblling);

let d = document.getElementsByName("demo2")
console.log(d);
console.log(d[0]);
console.log(d[1]);
d[0].style.color="green"

let m = document.querySelector("demo2")
console.log(m);