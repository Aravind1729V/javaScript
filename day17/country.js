// async function data()
// {
//     await
// }
// demo()


// let data = async function(){
//     await
// }

// let data = async ()=>{
//     await
// }

let data = async () =>{
    let res = await window.fetch("country.json")
    console.log(res);
    let data = await res.json()
    console.log(data);
    for(let ele of data){
        console.log(ele);
        let demo = document.getElementById("demo")
        console.log(demo);
        let option = `
        <option value=${ele.country}> ${ele.country}<option>
        `
        demo.innerHTML += option
    }
   
    
}
data()

let data1 = async()=>{
    let res1 = await window.fetch("country.json")
    console.log(res1);
    let data1=await res1.json()
    console.log(data1);
    for(let ele of data1){
                console.log(ele);
                let demo1 = document.getElementById("demo1")
                console.log(demo1);
                let option = `
                <option value=${ele.country}> ${ele.country}<option>
                `
                demo1.innerHTML += option
            }
}
data1()