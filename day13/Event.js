// function demo(){
//     console.log("hello world");
// }
// // second way
// let btn = document.getElementById("btn")
// console.log(btn);

// btn.onclick=function(){
//     console.log("hello");
// }

// let a = window.prompt("enter any color-name")
// // console.log(a);

// let btn1 = document.getElementById("btn1")
// // console.log("btn1");

// btn1.innerHTML = `${a}`
// btn1.onmouseover = function(){
//     document.body.style.backgroundColor = `${a}`
//     document.body.style.transition = "ease all 5s"
//     btn1.style.backgroundColor = `${a}`
//     btn1.style.transition = "ease all 5s"

// }


let btn2 = document.querySelector("#btn2")
console.log(btn2);

btn2.onclick = function(){

    let res = Math.round(Math.random() * 100000).toString(16)
    console.log(res);
    document.body.style.backgroundColor = `#${res}`
}
btn2.onmouseover = function(){

    let res = Math.round(Math.random() * 100000).toString(16)
    console.log(res);
    document.body.style.backgroundColor = `#${res}`
}


// console.log(Math);

let demo = document.querySelector("#demo")
console.log(demo);
// demo.onkeyup = function(){
//     let res = Math.round(Math.random() * 10000).toString(16)
//     console.log(res);
//     document.body.style.backgroundColor = `#${res}`
// }
// demo.onkeydown = function(){
//     let res = Math.round(Math.random() * 10000).toString(16)
//     console.log(res);
//     document.body.style.backgroundColor = `#${res}`
// }
demo.onkeypress = function(){
    let res = Math.round(Math.random() * 10000).toString(16)
    console.log(res);
    document.body.style.backgroundColor = `#${res}`
}

let video = document.querySelector("#video")
video.onclick=function(){
    let display = video.classList.toggle(true)
    if(display){
        video.play()
    }else{
        video.pause()
    }
}

let btn4 = document.querySelector("#btn4")
console.log(btn4);
btn4.onclick=function(){
    let display = video.classList.toggle(true)
    if(display){
        video.play()
    }else{
        video.pause()
    }
}