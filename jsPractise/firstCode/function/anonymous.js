const greet = function () {
  console.log("hellojiii");
};
greet();
//  Passed as argument (callback)
setTimeout(function()
{
    console.log("welcome to vs code");  
},2000)

let name = "priyanshu";
const hi = () =>
{
    console.log(name); 
}
hi();
setTimeout(()=> console.log(name),3000);

(function(){
    console.log("I run instantly");
})();