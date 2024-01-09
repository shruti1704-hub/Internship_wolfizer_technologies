// OOP 
var person={
    firstname:"shruti",
    lastname:"Wagh",
    year:"3rd",
    getname:function()
    {
        console.log(this.firstname)
    },
    person2:{
        firstname:"Gauri",
        lastname:"Rikame",
        year:"3rd",
        getname:function()
    {
        console.log(this.firstname)
    }
    }

}
// person.person2.firstname
person.getname();
person.person2.getname();

var student={
    name:"mina",
    branch:"computer",
    div:"B",
    YOB:2003
}

// constructor always start with capital letter
function Student(Sname,Sbranch,Sdiv,SYOB){
    this.name=Sname,
    this.branch=Sbranch,
    this.div=Sdiv,
    this.YOB=SYOB
    this.calculateAge=function()
    {
        console.log(2023-this.YOB)
    }
}

var obj=new Student("Shruti","CSD","A",2003)
console.log(obj);
obj.calculateAge();


// JSON

function getJsonTodo()
{
    var http=new XMLHttpRequest();
    http.open('GET','https://jsonplaceholder.typicode.com/todos',true);
    http.send();

}

getJsonTodo();