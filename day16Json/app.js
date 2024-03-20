// let obj = {
//     name:"aravind",
//     id:1
// }
// console.log(obj);

// let obj1=JSON.stringify(obj)
// console.log(obj1);

// let obj2=JSON.parse(obj1)
// console.log(obj2);

window.fetch("new.json")
.then(res=>res.json())
.then((data)=>{
    console.log(data);
    for(let ele of data){
        // console.log(ele);
        // console.log(ele.name);
        // console.log(ele.id);
        let demo = document.getElementById("demo")
        console.log(demo);
        let tr = `
        <tr>
        <td>${ele.name}</td>
        <td>${ele.id}</td>
        <td><img src= ${ele.image}/></td>
        </tr>
        `
        demo.innerHTML +=tr
    }
})