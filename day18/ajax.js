let ajax = new XMLHttpRequest()
console.log(ajax);

ajax.open("GET","https://fakestoreapi.com/products")

ajax.onload = ()=>{
    console.log(ajax);
    console.log(ajax.status);
    console.log(ajax.response);
    let data = JSON.parse(ajax.response)
    console.log(data);
    data.map((res)=>{
        console.log(res);
        let tab=document.getElementById("tab")
        console.log(tab);
        let tr=`
        <tr>
        <td>${res.id}</td>
        <td>${res.title}</td>
        <td>${res.price}</td>
        <td>${res.description}</td>
        <td><img src="${res.image}"/></td>
        <td>${res.category}</td>
        <td>${res.rating["rate"]}</td>
        </tr>
        `
        console.log(tr);
        tab.innerHTML +=tr
    //    document.body.innerHTML +=`<h1>${res.id}</h1>`
    //    document.body.innerHTML +=`<h1>${res.title}</h1>`
    })
}
ajax.send()