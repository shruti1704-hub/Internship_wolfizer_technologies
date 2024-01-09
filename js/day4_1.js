// object creation
// objects are datatype which are store key value pairs and separeted by comma
var student={
    name:"shruti",
    college:"KKW",
    marks:80

}


console.log(student.name);

var cars=
{
    name:"honda",
    manufacture:
    {
        name:"mmme",
        location:"japan",
    },
    topspeed:"500 km/h",
    applybreak:function()
    {
        setTimeout(function()       //special function wchich takes two arguments
        {
            console.log("Stop the car")
        },6000)                             //stops the car after 6000 seconds
    }

}

console.log(cars.manufacture.name);
// console.log(cars.applybreak());  

// Arrays
var arr1=["Shruti","Gauri","Shreya","Sanika","Srushti","Yogini","Devashri"]
console.log(arr1);
console.log(arr1[5]);
console.log(arr1.length);
// to insert at last position
arr1[7]="Sanskruti";
console.log(arr1);

arr1[6]="sau";
console.log(arr1);

// another method to add elemets in array
arr1.push("Aditi");
console.log(arr1);

// to delete the element
var Popelmt=arr1.pop("Aditi");
console.log(Popelmt);
console.log(arr1);

// splice-->New inbuiltfunction which is help to add or delete the items from array
arr1.splice(0,0,"Radhi");
console.log(arr1);

// 1st item tells where to start
// 2nd item tells how many items to be deleted
// 3rd and 4th tells what to be added or deleted

arr1.splice(7,1);       //delete the element at position 7
console.log(arr1);

// concatenation of array
console.log("****concatenation**********")
var arr2=["Rim","Pratha","Abhira","Armaan","Ruhi"]
var allarr=arr1.concat(arr2);
console.log(allarr);

// sorting the array
console.log(allarr.sort());         //sort in increasing order
// sort with descending order
console.log(allarr.reverse());

// Loops
looparr=[5,8,9,4,5,6];
var i;
for(i=0;i<looparr.length;i++)
{
    console.log("values at " +i+ " are  " + looparr[i])
}


// continue break 
console.log("**********")
var j;
for (j=0;j<looparr.length;j++)
{
    if(j%2==0)
    {
        continue;
    }
    console.log("values at " +j+ " are  " + looparr[j])
}

// functions
function sum()
{
    var num1=20;
    var num2=500;
    var add=num1+num2;
    return add;
}
console.log(sum());

function multiplication(num1,num2)
{
    var multi=num1*num2;
    return multi;
}

console.log(multiplication(5,8))