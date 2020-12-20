document.querySelector('#grocery-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();

    // Get form values there two ways to get the data from the form object
    const item = document.querySelector('#item').value;
 

    // Validate
    if (item === '') {
        UI.showAlert('Please fill in the field', 'danger');
    } else {
        const grocery = new Grocery(item);
        Store.addGrocery(grocery);
        UI.addGroceryToList(grocery);
        UI.showAlert('Grocery Added', 'success');

        // Clear fields
        UI.clearFields();
    }
});
