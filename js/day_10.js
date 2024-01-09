var btnAdd = document.getElementById("btn");
var update = document.getElementById("update");
var list = document.getElementById("items");
var inputvalue = document.getElementById("inputitem");
var currentListItem = null;

inputvalue.addEventListener('input', function (e) {
    currentinputval = e.target.value;
})

function createnode() {
    var newlistElement = document.createElement('li');
    newlistElement.style.display = 'flex';
    newlistElement.style.justifyContent = 'space-between'; // Adjusted property

    var newtext = document.createTextNode(currentinputval);
    newlistElement.appendChild(newtext);

    var btnContainer = document.createElement('div');
    newlistElement.appendChild(btnContainer);

    var btnedit = document.createElement("button");
    btnedit.innerText = "Edit";
    btnedit.style.color = "white";
    btnedit.style.backgroundColor = "green";
    btnContainer.appendChild(btnedit);
    btnedit.style.marginRight='4px';

    var btndelete = document.createElement("button");
    btndelete.innerText = "Delete";
    btndelete.style.color = "white";
    btndelete.style.backgroundColor = "red";
    btnContainer.appendChild(btndelete);

    list.appendChild(newlistElement);

    return newlistElement;
}

function additems() {
    if (currentinputval !== null && currentinputval !== undefined && currentinputval !== '') {
        if (currentListItem) {
            // console.log(currentListItem);
            // If an item is being edited, update its text
            currentListItem.firstChild.textContent = currentinputval;
            currentListItem = null; // Reset the editing state
        } else {
            // console.log(currentListItem);
            // If no item is being edited, create a new one
            createnode();
        }

        // reset the variable
        inputvalue.value = '';
        currentinputval = '';
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

// Event delegation for "Edit" and "Delete" buttons
list.addEventListener('click', function (e) {
    var target = e.target;
    console.log(target);
    if (target.tagName === 'BUTTON') {
        var listItem = target.closest('li');
        if (target.innerText === 'Edit') {
            currentListItem = listItem;
            var textToEdit = listItem.firstChild.textContent.trim();
            inputvalue.value = textToEdit;
            btnAdd.innerText="UPDATE";
            btnAdd.addEventListener('click',function()
            {
                btnAdd.innerText="Add an Item";
            })
        } else if (target.innerText === 'Delete') {
            list.removeChild(listItem);
        }L
    }
});
