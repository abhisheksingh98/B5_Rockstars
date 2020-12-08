const groceryInput = document.querySelector('.grocery__input');
const groceryButton = document.querySelector('.grocery__button');
const groceryList = document.querySelector('.grocery__list');

groceryButton.addEventListener('click',addGrocery);
groceryList.addEventListener('click',deleteGrocery);

function addGrocery(e){
   
    e.preventDefault();

    const grocery = document.createElement('div');
    grocery.classList.add("grocery");

    const newGrocery = document.createElement('li');
    newGrocery.innerText = groceryInput.value;
    newGrocery.classList.add('grocery');
    grocery.appendChild(newGrocery);

    localStorageGrocery(groceryInput.value);

    const checkedButton = document.createElement('button');
    checkedButton.innerHTML = '<i class = "fas fa-check"></i>';
    checkedButton.classList.add("checked__btn");
    grocery.appendChild(checkedButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
    deleteButton.classList.add("delete__btn");
    grocery.appendChild(deleteButton);

    groceryList.appendChild(grocery);

    groceryInput.value="";
}

function deleteGrocery(e){
    const item = e.target;

    if(item.classList[0] === "delete__btn"){
        const grocery = item.parentElement;
        grocery.remove();
    }

    if(item.classList[0]==="checked__btn"){
        const grocery = item.parentElement;
        grocery.classList.toggle("checked");
    }
}

function localStorageGrocery(grocery){
    let groceries;
    if(localStorage.getItem('groceries')===null){
        groceries =[];
    }
    else {
        groceries = JSON.parse(localStorage.getItem('groceries'));
    }
    groceries.push(grocery);
    localStorage.setItem('groceries',JSON.stringify(groceries));
}