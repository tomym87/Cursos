var a = 10.123456;
console.log(a.toFixed(5));

var b = a.toString();
console.log(b);

console.log(a.toPrecision(4));

function func(){
    c = a+"f";
    console.log(c);
    if (c = "undefined"){
        console.log("hay weeeey")
    }
    else{
        console.log(c);
        console.log("Error")
    }
}
func();