// TO-DO List

var btnAdd = document.getElementById("btn")
var list = document.getElementById("items")
var inputItem = document.getElementById("inputitem")
var btnUpdate = document.getElementById("btnUpdate")
var btnRemove = document.getElementById("btnRemove")

var currentitemvalue = ''
inputItem.addEventListener('input', function (e) {
    currentitemvalue = e.target.value});

inputItem.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        additems();
    }
})


function createnewnode() {
    var newLisitItem = document.createElement('li')
    // var textnode=document.createTextNode('Item '+(list.childElementCount + 1))
    var textnode = document.createTextNode(currentitemvalue);
    newLisitItem.appendChild(textnode)
    newLisitItem.id = 'item ' + (list.childElementCount + 1);
    console.log(newLisitItem);

    return newLisitItem;
}
function additems() {
    if (currentitemvalue !== null && currentitemvalue !== undefined && currentitemvalue !== '') {
        var newLisitItem = createnewnode();
        list.appendChild(newLisitItem);
        inputItem.value = '';
        currentitemvalue = '';

    }
    else {
        alert("Please enter the valid list item");
    }
}
btnAdd.addEventListener('click', function () {
    additems();
});

btnUpdate.addEventListener('click', function () {
    if (currentitemvalue !== null && currentitemvalue !== undefined && currentitemvalue !== '') 
    {
        var firstElement = list.firstElementChild;
        console.log(firstElement);
        var newLisitItem = createnewnode();
        list.replaceChild(newLisitItem, firstElement);
    }
    else
    {
        alert("please enter some value to update")
    }
});

btnRemove.addEventListener('click',function()
{
if(list.childElementCount>0)
{   
    var firstElement = list.firstElementChild;
    list.removeChild(firstElement);
}
else
{   
    alert("All items are removed")
}
});