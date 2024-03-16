let form = document.forms;
console.log(form[0]);
// console.log(form[1]);
// console.log(form[2]);

form[0].style.backgroundImage =
  "url(https://media.istockphoto.com/id/1304796251/photo/dog-and-cat-together.jpg?s=1024x1024&w=is&k=20&c=_IJDy8v04RE0WBroEPDhKAdnSC7AClASuIUkVjSuTYI=)";
  form[0].style.height = "800px"
form[0].style.width ="800px"

console.dir(form[0]);

form[0].onsubmit = (e) =>{
    e.preventDefault()
    let name = form[0].children[1]
    console.log(name);
    let password = form[0].children[5]
    console.log(password);
    // console.log(form[0].children[0]);
    // console.log(form[0].children[2]);
    console.log(name.value , password.value);
    if(name.value === "aravind" && password.value === "aravind123")
    {
        window.open("http://www.youtube.com")
    }
    else{
        window.alert("error message")
    }
}
// create a two html file one is login.html it should contain a feilds like text, password and submit button
// 2. home.html file 
