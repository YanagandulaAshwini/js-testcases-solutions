// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here
const results=()=>{
    const students=[
        {name:'ashwini',subjects:[{subject:'Grammer',marks:80},{subject:'Accounts',marks:79}]},
        {name:'akhil',subjects:[{subject:'Grammer',marks:45},{subject:'Accounts',marks:98}]},
        {name:'ramya',subjects:[{subject:'Grammer',marks:100},{subject:'Accounts',marks:79}]},
        {name:'raju',subjects:[{subject:'Grammer',marks:60},{subject:'Accounts',marks:69}]}]
    const result=()=>
    students.reduce((obj,element)=>{
        let percentage=element.subjects.reduce(()=>{
            return(element.subjects[0].marks+element.subjects[1].marks)/element.subjects.length;
        }, {})
        console.log({'name':element.name,'percentage':percentage});
    }, {})
    const finResult=result(students);
    return finResult;
}
results();
