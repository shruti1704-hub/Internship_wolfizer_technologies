//variable Hoisting-->>we can use variable before declaring it 

// str="Hii shruti is here"
// console.log(str);
// var str;

// //function hoisting
// var total=10;
// function sum(num1,num2)
// {
//     console.log(total);         //--->prints undefined 
//     total=num1+num2;
//     var total=12;
//     console.log(total);
// }
// sum(20,30);



// to print inside html code with selecting class name
// var printclass=document.querySelector(".div1");
// console.log(printclass.innerHTML);


// console.log(document.getElementsByTagName("p"));

// to print inside html code by selecting id
var startingval = document.getElementById("id1");
var bgimage = document.getElementById("image1");
console.log(bgimage);
var initialval = startingval.innerHTML;

setInterval(function () {
    if (initialval <= 0) {
        0;
    }
    else {
        initialval -= 1;
        startingval.innerHTML = initialval;
        var bgpath = initialval % 2 == 0 ? "/background/image_even.jpg" :
            "/background/image_odd.jpg";
        bgimage.src = bgpath;
        startingval.style.fontSize = initialval * 30 + "px";
        bgimage.style.width=initialval*10+"%";
        


    }
}, 1000);



