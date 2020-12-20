// UI Class: Handle UI Tasks
class UI {
    static showGrocery() {
        const groceries = Store.getGroceries();

        groceries.forEach((grocery) => UI.addGroceryToList(grocery));
    }

    static addGroceryToList(grocery) {
        const list = document.querySelector('#grocery-list');
        const row = document.createElement('tr');

        row.innerHTML = `
      <td>${grocery.item}</td>
    
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

        list.appendChild(row);
    }

    static deleteGrocery(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#grocery-form');
        container.insertBefore(div, form);

        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static clearFields() {
        document.querySelector('#item').value = '';
    }
}