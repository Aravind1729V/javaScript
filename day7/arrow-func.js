// implict - return arrow fun

let demo =_ => console.log("hello");
console.log(demo);
demo();

// explict - return arrow fun

let demo1 = _=> {
    return 'hellow'
}
console.log(demo1);
console.log(demo1());

//create a hof and cbf using arrow fun

let main =(a) => {
    let b = a ()
    return b
}

// console.log(main);

let c = main(function() {
    return 'i am cbf'
})
console.log(c);