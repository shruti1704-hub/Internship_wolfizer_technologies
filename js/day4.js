var currentday="Thursday"

// switch case

switch (currentday)
{
    case "Mon":
        console.log("Time:10am")
        break;
    case "Thuesday":
        console.log("Time:10 am")
        break;
    case "wed":
        console.log("Time:10 am")
        break;
    case "Thursday":
        console.log("Time:10 am")
        break;
    case "Friday":
        console.log("Time:10 am")
        break;
    case "Saturday":
        console.log("halfday")
        break;
    case "sunday":
        console.log("HOLIDAY")
        break;

}

// Aithmatic operator
// post incremet  
var num1=10;
console.log(num1++)     //increment value and store 
console.log(num1);      //print the incremented values

// pre incremet
var num2=10;
console.log(++num2);    //increment and display

// post decrement
var num3=15;
console.log(num3--)
console.log(num3);

// pre decrement
var num4=72;
console.log(--num4);

// Assignment operator
// +=
var ass1=15;
ass1+=10;
console.log(ass1);      //ass1=ass1+10--->25

var ass2=20;
ass2-=10;
console.log(ass2);      //ass2=ass2-10--->10

var ass3=30;
ass3*=5;
console.log(ass3);      //ass3=ass3*10--->150

var ass4=40;
ass4/=5;
console.log(ass4);      //ass4=ass4/5---->8

// comparison operator

if(5=='5')          //compare only values not data type hence true
{
    console.log(true)
}
else
{
    console.log(false)
}

if(5==='5')         //compare values as well as data types
{
    console.log(true)
}
else
{
    console.log(false)
}

if(5!='5')          //compare dtatype also
{
    console.log(true)
}
else
{
    console.log(false)
}

if(5!=='5')         //not comparing data type
{
    console.log(true)
}
else
{
    console.log(false)
}

// ternary operator (expression)?a:b
50<12?console.log(true):console.log(false)

// typecasting
var mvar=5+'apple';
console.log(mvar);
console.log(typeof(mvar));

var Mnum=+'2';
console.log(Mnum);
console.log(typeof(Mnum));

// explicit type conversion convert to Number
console.log(Number('2'),typeof(Number('2')));
console.log(Number(true),typeof(Number(true)));     //1 number

// explocit type conversion convert to String
console.log(String(2),typeof(String(2)));

// explicit type conversion convert to boolean
console.log(Boolean(1),typeof(Boolean(1)));     //true number