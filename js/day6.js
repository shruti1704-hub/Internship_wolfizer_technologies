var btn=document.getElementById("btn-click");
var maindiv=document.querySelector("body");
console.log(maindiv);

function onBtnclick()
{
    // alert("Button is clicked");
    // btn.style.backgroundColor="pink";
    maindiv.style.backgroundColor="pink";

}

// Event listner
btn.addEventListener('click',onBtnclick);

// other method
// btn.onclick=onBtnclick;

var mainhead=document.getElementById("heading");
mainhead.classList.add("big");
// setTimeout(
//     function()
//     {
//         mainhead.classList.remove("big");
//     },1500);


// onclick fontsize is changed
btn.addEventListener('click',function()
    {
        mainhead.classList.remove("big"); 
    }
);

var username=document.getElementById("username");
username.addEventListener('input',function(event)
{
    console.log(event.target.value);
})

username.addEventListener('focus',function()
{
    console.log("Elemet is in focus")
})

username.addEventListener('blur',function()
{
    console.log("Element lost focus")
})

formelement.addEventListener('submit',function()
{
    alert("Form is submitted");
})

document.body.addEventListener('keydown',function(e)
{
    var keyCode=e.keyCode;
    if(keyCode===83)
    {
        console.log("Keydown for--->"+keyCode);
    }
})

document.body.addEventListener('keyup',function(e)
{
    var keyCode=e.keyCode;
    if(keyCode===83)
    {
        console.log("Keyup for--->"+keyCode);
    }
})

document.body.addEventListener('keypress', function(e) {
    var charCode = e.charCode || e.which; // Use charCode or which for keypress
    if (charCode === 83) {
        console.log("Keypress for--->" + charCode);
    }
});

btn.addEventListener('click',onBtnclick);


