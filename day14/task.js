
let btn = document.getElementById("btn")
console.log(btn);
btn.onclick = function(){
    let picture = document.getElementById("picture")
    console.log(picture);
    let a = picture.classList.toggle(true)
    if(a){
        picture.style.display="block"
    }else{
        picture.style.display="none"
    }

}