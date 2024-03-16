let div = document.querySelector("div")
console.log(div);
div.style.border="2px solid red"
div.setAttribute("height","50px")
div.setAttribute("width","100%")
div.style.display="flex"
div.style.justifyContent="center"

let table = document.createElement("table")
// console.log(table);
div.appendChild(table)
table.style.border="2px solid blue"
table.style.width="400px"
table.style.height="200px"
table.style.textAlign="center"

let tr = document.createElement("tr")
table.appendChild(tr)

let td1 = document.createElement("td")
tr.appendChild(td1)
td1.textContent="a"
td1.style.border="2px solid black"

let td2 = document.createElement("td")
tr.appendChild(td2)
td2.textContent="b"
td2.style.border="2px solid black"

let td3 = document.createElement("td")
tr.appendChild(td3)
td3.textContent="c"
td3.style.border="2px solid black"

let tr1 = document.createElement("tr")
table.appendChild(tr1)

let td4 = document.createElement("td")
tr1.appendChild(td4)
td4.textContent="d"
td4.style.border="2px solid black"

let td5 = document.createElement("td")
tr1.appendChild(td5)
td5.textContent="e"
td5.style.border="2px solid black"

let td6 = document.createElement("td")
tr1.appendChild(td6)
td6.textContent="f"
td6.style.border="2px solid black"

let tr2 = document.createElement("tr")
table.appendChild(tr2)

let td7 = document.createElement("td")
tr2.appendChild(td7)
td7.textContent="g"
td7.style.border="2px solid black"

let td8 = document.createElement("td")
tr2.appendChild(td8)
td8.textContent="h"
td8.style.border="2px solid black"

let td9 = document.createElement("td")
tr2.appendChild(td9)
td9.textContent="i"
td9.style.border="2px solid black"




