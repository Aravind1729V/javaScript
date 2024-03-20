// let promise = new promise((resolve , reject)=>{

// })
// console.log(promise);





// let api=true
// let promise = new Promise((resolve,reject)=>{

//     setInterval(()=>{
//         if(api){
//             return resolve()
//         }else{
//             return reject()
//         }
//     } ,3000)

// })
// .then(()=>{
//     console.log("api fetched");
// })
// .catch(()=>{
//     console.log("api not fetched");
// })

// function demo()
// {
//     console.log("hello");
// }
// demo()



function main(m,n)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isNaN(m)||isNaN(n)){
                return reject()
            }
            for(let i=m;i<=n;i++){
                console.log(i);
            }
            return resolve()
        },5000)
    })
    .then(()=>{
        console.log("promise is  sucessfull");
    })
    .then(()=>{
        console.log(100+40+3);
    })
    .catch(()=>{
    console.log("error occured");
    })
}
main(1,100)

function devil() {
    console.log("printing numbers");
}
devil()
