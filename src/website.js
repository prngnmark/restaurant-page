import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./contact";

function createHeader() {
    const header = document.createElement('div');
    header.classList = 'header';
    const logo = document.createElement('h1');
    logo.classList = 'logo';
    logo.textContent = "Le Château de Saveurs";
    header.appendChild(logo);

    return header;
}

function createNav() {
    const nav = document.createElement('div');
    nav.classList = 'nav'
    const homeButton = document.createElement('button');
    homeButton.innerHTML = 'Home';
    homeButton.classList = 'tab';
    homeButton.addEventListener('click', () => {
        loadHome()
    })
    const menuButton = document.createElement('button');
    menuButton.addEventListener('click', () => {
        loadMenu()
    })
    menuButton.innerHTML = 'Menu';
    menuButton.classList = 'tab';
    const contactButton = document.createElement('button');
    contactButton.innerHTML = 'About';
    contactButton.classList = 'tab';
    contactButton.addEventListener('click', () => {
        loadAbout()
    })
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function createMain() {
    const main = document.createElement('div');
    main.classList = 'main';

    return main;
}

function createFooter() {
    const footer = document.createElement('div');
    footer.classList = 'footer';
    footer.textContent = 'Background picture courtesy of Adrien Olichon on Unsplash';

    return footer;
}

export default function initializeWebsite() {
    const content = document.querySelector('#content');
    content.appendChild(createHeader());
    content.appendChild(createNav());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    loadHome();
}

