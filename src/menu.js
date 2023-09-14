const options = {
    "Surf and Turf Specialr": "Steak, Chicken, and Lobster",
    "Spinach Gratin": 'Penné Pasta with Rich, Creamy White Sauce',
    "Steak Dinner": "Steak Dinner with Finaddene Sauce",
    "Lobster Dinner": "Lobster Served with Garlic Butter Sauce",
    "Wagyu Beef with Gold Flakes": "A5 Marbled Beef Topped with Gold Flakes"
}

function createMenu(arg) {
    const menu = document.createElement('div');
    menu.classList = 'menu';
    for (const key in arg) {
        const item = document.createElement('h2');
        item.classList = 'foodName'
        const description = document.createElement('p')
        item.textContent = key
        description.textContent = arg[key]
        menu.appendChild(item)
        menu.appendChild(description)
    }

    return menu
}

export default function loadMenu() {
    const main = document.querySelector('.main');
    main.innerHTML = ''
    main.appendChild(createMenu(options));
}