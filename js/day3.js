var num1=100;
var num2=205;
var sum=num1+num2;
console.log(sum);
console.log("my name is shrutii");
console.log(typeof(sum));

// tostring()-->convert the iteger inform of string
var num7=8;
console.log(num7.toString());

// parseInt-->convert the string into integer
var str="55"
var str2="11.2";
var char="Shruti"
// output-->NaN=not a number
console.log(parseInt(char));
// not printing 11.5 because it returns only integer
console.log(parseInt(str2));
console.log(parseInt(str));
// toFixed-->rounds a number
var number=85.555555;
console.log(number.toFixed(2));
// multiple single/double quotes
var strmy="This is sting \"mystring\"";
console.log(strmy);

// substring
console.log(strmy.slice(0,4));
console.log(strmy.slice(-9,-1));

// concatenation
var firststring="Shruti"
var laststring="Wagh";
console.log(firststring.concat(laststring));
console.log(firststring + ' ' + laststring);

// trim
var examplestringtrim="     my name    ";
console.log(examplestringtrim.trim());

// charAt-->gives the char at that position
console.log(strmy.charAt(5));

// split-->split the string at position of passed value
var stringsplit="This string is going to split"
console.log(stringsplit.split(" "));

// null and undefined values
var notdefine;
console.log(notdefine);       //undefine

var define=null;
console.log(define);        //null