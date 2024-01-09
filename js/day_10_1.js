var btnAdd = document.getElementById("btn");
var update = document.getElementById("update");
var list = document.getElementById("items");
var inputvalue = document.getElementById("inputitem");
var btnedit;
var btndelete;
var newtext;
var btnUpdate;
var currentinputval = '';
var LiId;

// Create edit and delete buttons outside the additems function
btnedit = document.createElement("button");
btnedit.innerText = "Edit";
btnedit.style.color = "white";
btnedit.style.backgroundColor = "green";
btnedit.style.marginLeft = "85%";

btndelete = document.createElement("button");
btndelete.innerText = "Delete";
btndelete.style.color = "white";
btndelete.style.backgroundColor = "red";

inputvalue.addEventListener('input', function (e) {
    currentinputval = e.target.value;
});

function createnode() {
    var newlistElement = document.createElement('li');
    newtext = document.createTextNode(currentinputval);
    newlistElement.appendChild(newtext);
    LiId = 'item ' + (list.childElementCount + 1)
    newlistElement.id = LiId;

    // Append the edit and delete buttons to the new list element
    newlistElement.appendChild(btnedit.cloneNode(true));
    newlistElement.appendChild(btndelete.cloneNode(true));

    return newlistElement;
}

function additems() {
    if (currentinputval !== null && currentinputval !== undefined && currentinputval !== '') {
        var newlistElement = createnode();
        list.appendChild(newlistElement);

        // reset the variable
        inputvalue.value = '';
        currentinputval.value = '';
    } else {
        alert("Enter some value to add in the list");
    }
}

btnAdd.addEventListener('click', function () {
    additems();
});

inputvalue.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        additems();
    }
});

btnedit.addEventListener('click', function (e) {
    var listItem = e.target.closest('li');
    var updateElement = listItem.firstChild.textContent.trim();
    inputvalue.value = updateElement;

    update.addEventListener('click', function () {
        var newlistElement = createnode();
        list.replaceChild(newlistElement, listItem);
    });
});

btndelete.addEventListener('click', function (e) {
    var liitem = e.target.closest('li');
    list.removeChild(liitem);
});
