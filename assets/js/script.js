const inputItem = document.getElementById('input');
const buttonAdd = document.getElementById('buttoninput');
const list = document.getElementById('todolist');

list.addEventListener("click",addRemove);

function clickButtonAdd(){
    addItem();
    countTotal();
}

function addItem(){
    if (inputItem.value===""){
        return null;
    }
    const item ={
        id: Math.floor(Math.random()*1000),
        text: inputItem.value
    }
    todoElement(item);
    saveItem(item);
    inputItem.value="";
}

function todoElement(item){
    const renderItem = `
    <div class="itemContent">
        <span class="itemId">${item.id}</span>
        <p class="itemText">${item.text}</p>
        <input type="checkbox" class="checkButton">
        <button class="buttonRemove"><i class="fa-solid fa-trash"></i></button>
    </div>`;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = renderItem;
    list.appendChild(tempDiv.firstElementChild);

}

function saveItem(item){
    const items =[];
    items.push(item);
}
function addRemove(e) {
    const item = e.target;

    // Check functionality
    if (item.classList[0] === 'checkButton') {
        const todolist = item.parentElement;
        todolist.classList.toggle('checkList');
        countComplete();

    }

    // Delete functionality
    if (item.classList[0] === 'buttonRemove') {
        const todolist = item.parentElement;
        todolist.remove();
        countTotal();
        countComplete();
    }
}


function countTotal() {
    var total = document.querySelectorAll('.itemContent').length;
    document.getElementById('totalItems').innerHTML = total;
}

function countComplete() {
    var total = document.querySelectorAll('.itemContent').length;

    var checked = document.querySelectorAll('.checkButton:checked').length;

    var unchecked = total - checked;
    document.getElementById('totalComplete').innerHTML = checked || 0;
    document.getElementById('totalIncomplete').innerHTML = unchecked || 0;

    console.log('checked: ', checked);
    console.log('unchecked: ', unchecked);
}


