// Store Class: Handles Storage
class Store {
    static getGroceries() {
       let groceries;
        if (localStorage.getItem('groceries') === null) {
            groceries = [];
        } else {
            groceries = JSON.parse(localStorage.getItem('groceries'));
        }

        return groceries;
    }

    static addGrocery(grocery) {
        const groceries = Store.getGroceries();
        groceries.push(grocery);
        localStorage.setItem('groceries', JSON.stringify(groceries));
    }

    static removeGrocery(item) {
        const groceries = Store.getGroceries();

        groceries.forEach((grocery, index) => {
            if (grocery.item === item) {
                groceries.splice(index, 1);
            }
        });

        localStorage.setItem('groceries', JSON.stringify(groceries));
    }
}