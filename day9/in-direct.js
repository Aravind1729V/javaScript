// to print content on web-page
// document.write
// document.writeln

// document.write("hello-world")
// document.writeln("hello-world")
// document.writeln("hello-world")
// document.writeln("hello-world")
// document.writeln("hello-world")
// document.write("<h1>hello-world</h1>")

// // direct access

// console.log(document.URL);
// console.log(document.baseURI);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.title);

// document.title = "flipkart"

// console.log(document.body);

// console.log(document.links);
// console.log(document.links[0]);

// let link = document.links
// console.log(link);
// console.log(link.length);
// link[0].id = "demo1"
// link[0].href = "http://www.amazon.com"

// for (let i = 0; i < link.length; i++) {
//     console.log(link[i]);
//     // link[i].style.border = "2px solid"
//     link[i].className = "demo"
// }

// link[0].setAttribute

/*used to create an attribute pass both key avd value pair
string format*/
link[0].setAttribute("target" , "blank")

// getAttribute()
/*used to get a value form the key only key string format */
console.log(lik[0].getAttribute("target"));

// removeAttribute
/*used to delete attribute in a ele pass only kdy string format */
link[0].removeAttribute("target")