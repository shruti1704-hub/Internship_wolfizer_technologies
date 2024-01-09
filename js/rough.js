// TO-DO List

var btnAdd = document.getElementById("btn");
var update=document.getElementById("update");
var list = document.getElementById("items");
var inputvalue = document.getElementById("inputitem");
var btnedit;
var btndelete;
var newtext;
var btnUpdate;
var currentinputval = '';
var LiId;
var newlistElement;

// var buttons=document.querySelector("items").after("list");

inputvalue.addEventListener('input', function (e) {
    // console.log(e.target.value);
    currentinputval = e.target.value;

})

function createnode() {
    newlistElement = document.createElement('li');
    newtext = document.createTextNode(currentinputval);
    newlistElement.appendChild(newtext);
    LiId = 'item ' + (list.childElementCount + 1);
    newlistElement.id = LiId;
    
    return newlistElement;
}
function additems() {
    if (currentinputval !== null && currentinputval !== undefined && currentinputval !== '') {
        var newlistElement = createnode();

        // edit button is created
        btnedit = document.createElement("button");
        btnedit.innerText = "Edit";
        btnedit.style.color = "white";
        btnedit.style.backgroundColor = "green";
        btnedit.style.marginLeft = "85%";

        // delete button
        btndelete = document.createElement("button");
        btndelete.innerText = "Delete";
        btndelete.style.color = "white";
        btndelete.style.backgroundColor = "red";


        newlistElement.appendChild(btnedit);
        newlistElement.appendChild(btndelete);
        list.appendChild(newlistElement);

        // reset the variable
        inputvalue.value = '';
        currentinputval.value = '';

        var listItem
        // edit button
        btnedit.addEventListener('click', function (e) {
            listItem = e.target.closest('li');
            // var storeid=listItem.id;
            var updateid=document.getElementById(listItem.id);
            // updateid.innerText = storeid; // Corrected this line
            console.log(updateid);
            console.log(listItem);
            console.log(newlistElement);
            var updateElement = listItem.firstChild.textContent.trim();
            inputvalue.value = updateElement;
            console.log(updateElement);
            // list.removeChild(listItem);

            update.addEventListener('click',function()
            {
                // list.removeChild(listItem);
                // var newlistElement=createnode();
                var newlistElement=createnode();
                // additems();
                console.log(newlistElement);
                list.replaceChild(newlistElement,listItem);
            })
            
            
        });


        btndelete.addEventListener('click',function(e)
        {
            var liitem=e.target.closest('li');
            list.removeChild(liitem);
        })



    }
    else {
        alert("Enter some value to add in list");
    }

}


btnAdd.addEventListener('click', function () {
    additems();

})

inputvalue.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        additems();
    }
})

// btnAdd.id = "update";
            // var btnUpdate = document.getElementById("update");
            // btnUpdate.innerText = "UPDATE";
            // btnUpdate.addEventListener('click', function () {
            //     console.log(listItem);
            //     console.log(newlistElement);
            // });
            // alert("button is clicked");


