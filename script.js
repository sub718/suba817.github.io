console.log("variables")

var a;
var a= 10;
console.log(a);

var a= 33;
var b= 89;
console.log(a+b);
a=40;
console.log(a+b);


function let(){
    let a=23;
    console.log(a);
    a=32;
    console.log(a);
}
let();


const c=10;
console.log(c);

console.log("DATA TYPES")
function datatypes(){
    let a="samsung";
    console.log(typeof(a));

    let b=20;
    console.log(typeof(b));

    let x= true;
    console.log(typeof(x));

    let y= null;
    console.log(y);
    
let z;
console.log(typeof(z));

}

datatypes();

 
console.log(" synchronous")
function synchronous(){
    console.log("samsung")
    console.log("redmi")
    console.log("oppo")
    console.log("vivo")
    
}
synchronous();


console.log(" Asynchronous ")
function asyn(){
function Asynchronous(){
    console.log("monday")
    console.log("tuesday")
    console.log("wednesday")
    function thursday() {
        console.log("thursday asyn");
      }
      
      setTimeout(thursday, 1000);
      console.log("friday")
    
      
    
    function saturday() {
        console.log("saturday asyn");
      }
      
      setTimeout(saturday, 1000);
      
   
    
}



  Asynchronous();
}
asyn();