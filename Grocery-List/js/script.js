const groceryInput = document.querySelector('.grocery__input');
const groceryButton = document.querySelector('.grocery__button');
const groceryList = document.querySelector('.grocery__list');

groceryButton.addEventListener('click',addGrocery);

function addGrocery(e){
    e.preventDefault();

    const grocery = document.createElement('div');
    grocery.classList.add("grocery");

    const newGrocery = document.createElement('li');
    newGrocery.innerText = 'cool';
    newGrocery.classList.add('grocery');
    grocery.appendChild(newGrocery);

    const checkedButton = document.createElement('button');
    checkedButton.innerHTML = '<i class = "fas fa-check"></i>';
    checkedButton.classList.add("checked__btn");
    grocery.appendChild(checkedButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
    deleteButton.classList.add("checked__btn");
    grocery.appendChild(deleteButton);

    groceryList.appendChild(grocery);
}