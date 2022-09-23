function jazzbundle(){

    for (var i = 1; i<=20; i++){
        if(i % 3 == 0 && i %5 ==0){
            console.log("Jazz Bundle");
        }else if(i % 3 == 0){
            console.log("Jazz");
        }else if(i % 5 == 0){
            console.log("Bundle");
        }else{
            console.log(i);
        }
    }
}
jazzbundle();