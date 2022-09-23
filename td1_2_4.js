function TestEgalite(){
    let b= false;
    let n = 0;
    let s = '0';
    let tab = [];
    let o = {};

    if (b == n){
        console.log("égalité entre b et n")
    }
    if (b === n){
        console.log("égalité stricte entre b et n")
    }

    if (b == s){
        console.log("égalité entre b et s")
    }
    if (b === s){
        console.log("égalité stricte entre b et s")
    }
    if (b == tab){
        console.log("égalité entre b et tab")
    }
    if (b === tab){
        console.log("égalité stricte entre b et tab")
    }
    if (b == o){
        console.log("égalité entre b et o")
    }
    if (b === o){
        console.log("égalité stricte entre b et o")
    }
    if (n == s){
        console.log("égalité entre n et s")
    }
    if (n === s){
        console.log("égalité stricte entre n et s")
    }
    if (n == tab){
        console.log("égalité entre n et tab")
    }
    if (n === tab){
        console.log("égalité stricte entre n et tab")
    }
    if (n == o){
        console.log("égalité entre n et o")
    }
    if (n === o){
        console.log("égalité stricte entre n et o")
    }
    if (tab == o){
        console.log("égalité entre tab et o")
    }
    if (tab === o){
        console.log("égalité stricte entre tab et o")
    }
}
TestEgalite();