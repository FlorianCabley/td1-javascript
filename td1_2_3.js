function ConvertionDeType(){
    let a = true;
    console.log(a.toString());


    let b = parseInt("17", 8);
    console.log(b);

    let c = Number.parseInt("12", 5);
    console.log(c);

    let d = parseFloat(4)* 2.0 * Math.PI;
    console.log(d);

    let e = Number.parseFloat(8) * 2.0 * Math.PI;
    console.log(e);

    let f = Number(23);
    
    console.log(Math.floor(23.565));

    console.log(Math.ceil(3.764));

    console.log(Math.round(3.78));
}
ConvertionDeType();