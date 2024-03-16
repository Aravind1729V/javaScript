// modify.js
// let a =document.body
// console.log(a);
// a.innerHTML+= "<h2>java-Script</h2>"
// a.innerHTML+=" "
// let div=document.querySelector("div")
// console.log(div);
// div.style.border = "2px solid"

// div.innerHTML +=`<ol>
// <li>java</li>
// <li>web-tech</li>
// </ol>`

let h2 = document.createElement("h2")
console.log(h2);
h2.textContent= "hello-world"
document.body.appendChild(h2)
// ---------------------------------

let div = document.querySelector("div")
console.log(div);

let ol = document.createElement("ol")
// console.log(ol);

div.appendChild(ol)

let li1 = document.createElement("li")
// console.log(li1);
li1.textContent = "java"

ol.appendChild(li1)

let li2 = document.createElement("li")
// console.log(li2);
li2.textContent = "sql"

ol.appendChild(li2)