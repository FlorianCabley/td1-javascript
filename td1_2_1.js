function ChangementDeType(){
    let x;
console.log(typeof(x));
x = 'blabla';
console.log(typeof(x));
x = "blabla";
console.log(typeof(x));
x = `blabla ${x}`;
console.log(typeof(x));
x = 9;
console.log(typeof(x));
x = 2.5;
console.log(typeof(x));
x = true;
console.log(typeof(x));
x = undefined;
console.log(typeof(x));
x = null;
console.log(typeof(x));
x = [1,2,3];
console.log(typeof(x));
x = new Array();
console.log(typeof(x));
x = {"promo":"lpwmce","nb":25};
console.log(typeof(x));
x = new Date();
console.log(typeof(x));
x = function(){alert('toto')};
console.log(typeof(x));
x = 42n;
console.log(typeof(x));
}
ChangementDeType();


