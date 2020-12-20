
// Event: Remove Grocery
document.querySelector('#grocery-list').addEventListener('click', (e) => {

    // Remove grocery from store
    Store.removeGrocery(e.target.parentElement.previousElementSibling.textContent);
    // Remove grocery from UI
    UI.deleteGrocery(e.target);
    // Show success message
    UI.showAlert('Grocery Item Removed', 'success');
});