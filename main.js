// let btn=document.querySelector(".button");
// btn.onclick=function() {
//     document.querySelector("p").innerText++;
// }

// let btn=document.getElementById("button");
// let p=document.querySelector("p");
// btn.onclick=function() {
//     let count=document.querySelector("input").value;
//     p.innerText=Number(count)+Number(p.innerText)
// }

// let arr=[10,20,30];
// function customForEach(arr,callback){
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i],i,array);  
//   }
// }

let arr=[10,20,30];

Array.prototype.customMap=function(callback){
  for (let i = 0; i < this.length; i++) {
      callback(this[i]*2,i,this);
    }
    return (this);
}
arr.customMap();