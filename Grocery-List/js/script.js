const groceryInput = document.querySelector('.grocery__input');
const groceryButton = document.querySelector('.grocery__button');
const groceryList = document.querySelector('.grocery__list');

document.addEventListener('DOMContentLoaded', getGroceries);
groceryButton.addEventListener('click',addGrocery);
groceryList.addEventListener('click',deleteGrocery);

function addGrocery(e){
   
    e.preventDefault();

    const grocery = document.createElement('div');
    grocery.classList.add("grocery");

    const newGrocery = document.createElement('li');
    newGrocery.innerText = groceryInput.value;

    if(groceryInput.value.trim()!=0){
        newGrocery.classList.add('grocery');
        grocery.appendChild(newGrocery);
    
        addLocalStorageGrocery(groceryInput.value);
    
        const checkedButton = document.createElement('button');
        checkedButton.innerHTML = '<i class = "fas fa-edit"></i>';
        checkedButton.classList.add("checked__btn");
        grocery.appendChild(checkedButton);
    
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
        deleteButton.classList.add("delete__btn");
        grocery.appendChild(deleteButton);
    
        groceryList.appendChild(grocery);
    
        groceryInput.value="";
    }
    else {
        alert("Please add a Grocery!");
    }
   
        // for (var i in localStorage) {
        //     if (localStorage.getItem[i] === groceryInput.value)
        //      alert("This grocery item already exists in your list");
        // }
          
    

}

function editGrocery(e){
    const item = e.target;
    let saveButton = document.getElementsByClassName("save__button");
    let saveIdx
    if(item.classList[0]==="checked__btn"){
        const grocery = item.parentElement;
        editLocalStorageGrocery(grocery);
        // grocery.classList.toggle("checked");
        saveButton.style.display="block";
    }

}

function deleteGrocery(e){
    const item = e.target;

    if(item.classList[0] === "delete__btn"){
        const grocery = item.parentElement;
        deleteLocalStorageGrocery(grocery);
        grocery.remove();
    }

    if(item.classList[0]==="checked__btn"){
        const grocery = item.parentElement;
        grocery.classList.toggle("checked");
    }
}

function addLocalStorageGrocery(grocery){
    let groceries;
    if(localStorage.getItem('groceries')===null){
        groceries =[];
    }
    // else if(localStorage.getItem('groceries') === groceryInput.value){
    //     alert("This grocery item already exists in your list");
    // }
    else {
        groceries = JSON.parse(localStorage.getItem('groceries'));
    }
    groceries.push(grocery);
    localStorage.setItem('groceries',JSON.stringify(groceries));
}

function getGroceries(){
    // console.log('hello');
    let groceries;
    if(localStorage.getItem('groceries')===null){
        groceries =[];
    }
    else {
        groceries = JSON.parse(localStorage.getItem('groceries'));
    }
    groceries.forEach(function(groceryItem){
        const grocery = document.createElement('div');
        grocery.classList.add("grocery");
    
        const newGrocery = document.createElement('li');
        newGrocery.innerText = groceryItem;
        newGrocery.classList.add('grocery');
        grocery.appendChild(newGrocery);
        
        const checkedButton = document.createElement('button');
        checkedButton.innerHTML = '<i class = "fas fa-edit"></i>';
        checkedButton.classList.add("checked__btn");
        grocery.appendChild(checkedButton);
    
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
        deleteButton.classList.add("delete__btn");
        grocery.appendChild(deleteButton);
    
        groceryList.appendChild(grocery);
    })
}

function deleteLocalStorageGrocery(grocery){
    let groceries;
    if(localStorage.getItem('groceries')===null){
        groceries =[];
    }
    else {
        groceries = JSON.parse(localStorage.getItem('groceries'));
    }
    const groceryIdx = grocery.children[0].innerText;
    groceries.splice(groceries.indexOf(groceryIdx),1);
    localStorage.setItem("groceries", JSON.stringify(groceries));
}

function editLocalStorageGrocery(grocery){
    let groceries;
    if(localStorage.getItem('groceries')===null){
        groceries =[];
    }
    else {
        groceries = JSON.parse(localStorage.getItem('groceries'));
    }
    const groceryIdx = grocery.children[0].innerText;
    groceries[groceryIdx] = groceryInput.value;
    localStorage.setItem("groceries", JSON.stringify(groceries));

}
