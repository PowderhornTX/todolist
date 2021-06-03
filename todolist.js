let q = document.querySelector.bind(document);
let qa = document.querySelectorAll.bind(document);

let listItems = Array(qa('li'));

let myButton = q('button');
let myInput = q('input');
let myList = q('ul');

myButton.addEventListener('click', buttonClick);
myInput.addEventListener('keypress', function(event) {
    if (event.keyCode == 13) buttonClick(event);
    } );
myList.addEventListener('click', itemClick);

function buttonClick(event) {
    if (myInput.value) {
        let newItem = document.createElement('li');
        newItem.innerHTML = myInput.value;
        myList.appendChild(newItem);
        myInput.value = '';
    }
}

function itemClick(event) {
    event.target.style.color = "red";
    event.target.style.textDecoration = "line-through";
    setTimeout(function(){ event.target.remove(); }, 1000);
}