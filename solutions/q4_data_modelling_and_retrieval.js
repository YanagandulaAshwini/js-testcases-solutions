// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here
const fruits=[{name:'apple',color:'red',pricePerKg:100},
             {name:'banana',color:'yellow',pricePerKg:200},
             {name:'guava',color:'green',pricePerKg:400},
             {name:'orange',color:'orange',pricePerKg:150} ];
const convertToobj=(fruits1,key)=>             
fruits1.reduce((obj,element)=>{
    obj[element[key]]=element;
    return obj;
},{});
const fruitobj=convertToobj(fruits,'name');
console.log(fruitobj);
console.log(fruitobj.apple);
console.log(fruitobj.banana);
console.log(fruitobj.guava);
console.log(fruitobj.orange);