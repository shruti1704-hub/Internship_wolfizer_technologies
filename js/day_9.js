var clr=$('body').css('background-color')
console.log(clr);


var btn=$('#btn').css('font-size');
console.log(btn);

$('#btn').css('font-size','35px');

var btn2=$('#btn').css('font-size');
console.log(btn2);

// ES6 --ECAmScript
var name="Shruti";
console.log(`name is ${name}`);

var firstName="Shruti";
var lastName="Wagh";

//function
function getName(firstName,lastName)
{
    return `${firstName} ${lastName}`;
}

var myname=`my full name is ${getName(firstName,lastName)}`
console.log(myname);

//function
const fullname=(firstName,lastName)=>
{
    return `Hello miss ${firstName} ${lastName}`
}

console.log(fullname('Mitali','Sharma'));


// (...arg)==>number of arguments can be pass
const sumation=(...arguments)=>
{
    let sum=0;
    for(var i=0;i<arguments.length;i++)
    {
        sum=sum+arguments[i];
    }
    console.log(sum);
}

sumation(1,2,3,4,5);

// spread operator
var obj1=[1,2,5];
var obj2=[8,6,9];

var obj3=[...obj1,...obj2];
console.log(obj3);

// Destructuring
var name="Abhira Armaan Sharma";
var nameArr=name.split(' ');

// let [firstname,lastname]=nameArr;
let [firstname, ,lastname]=nameArr;
console.log(firstname);
console.log(lastname)
