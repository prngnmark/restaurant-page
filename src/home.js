function createHome() {
    const home = document.createElement('div');
    home.classList = 'home';
    const about1 = document.createElement('p');
    about1.textContent = `Welcome to "Le Château de Saveurs," where culinary artistry meets opulent elegance in every dish. Nestled in the heart of a picturesque town, this exquisite gourmet restaurant is a haven for those seeking an unforgettable dining experience.`
    const about2 = document.createElement('p')
    about2.textContent = `As you step through the ornate wrought-iron gates, you'll find yourself transported to a world where gastronomy is elevated to the status of an art form. "Le Château de Saveurs" is renowned for its meticulous attention to detail, from the plush, velvet-lined dining chairs to the crystal chandeliers that cast a warm, enchanting glow upon each table.`
    const about3 = document.createElement('p')
    about3.textContent = 'Our world-class chefs, trained in the most prestigious culinary schools across the globe, craft each dish with precision and creativity. The menu, a symphony of flavors and textures, celebrates seasonal ingredients and innovative techniques, resulting in a culinary journey that promises to tantalize the most discerning palates.'
    const about4 = document.createElement('p');
    about4.textContent = 'Allow our expert sommeliers to guide you through an extensive wine list that perfectly complements the culinary masterpiece before you. Every sip will enhance your appreciation of the artistry on your plate.'
    const about5 = document.createElement('p')
    about5.textContent = `Whether you're celebrating a special occasion or simply seeking a moment of gastronomic bliss, "Le Château de Saveurs" promises an unforgettable experience that transcends the ordinary. Join us and indulge in a world where gourmet dining is a true work of art.`
    home.appendChild(about1);
    home.appendChild(about2);
    home.appendChild(about3);
    home.appendChild(about4);
    home.appendChild(about5);

    return home;
}

export default function loadHome() {
    const main = document.querySelector('.main');
    main.innerHTML = '';
    main.appendChild(createHome());
}


