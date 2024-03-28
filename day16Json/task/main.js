window.fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then((data)=>{
    console.log(data);
    for(let ele of data){
        // console.log(ele);
        // console.log(ele.id);
        // console.log(ele.price);
        // console.log(ele.title);
        // console.log(ele.description);
        // console.log(ele.catagory);
        // console.log(ele.image);
        // console.log(ele.rating);  
        let demo=document.getElementById("demo")
        console.log(demo);
        let tr=`
        <tr>
            <td>${ele.id}</td>
            <td>${ele.title}</td>
            <td>${ele.price}</td>
            <td>${ele.description}</td>
            <td>${ele.category}</td>
            <td><img src="${ele.image}"/></td>
            <td>${ele.rating["rate","count"]}</td>
        </tr>
        `
        demo.innerHTML +=tr
    }
})
