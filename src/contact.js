function createAbout() {
    const about = document.createElement('div')
    about.classList = 'about'

    const scheduleHeading = document.createElement('h2')
    scheduleHeading.textContent = 'Restaurant Hours'
    about.appendChild(scheduleHeading)
    const schedule = document.createElement('p')
    schedule.textContent = 'MON-TH: 5PM-9PM | FRI-SUN: 5PM-11PM'
    about.appendChild(schedule)

    const contactHeading = document.createElement('h2')
    contactHeading.textContent = 'Contact Us'
    about.appendChild(contactHeading)
    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = 'Phone: (671) 123-456'
    about.appendChild(phoneNumber)
    const email = document.createElement('p')
    email.textContent = 'Email: chataeausaveurs@gmail.com'
    about.appendChild(email)
    const address = document.createElement('p')
    address.textContent = "Address: 123 N Fancy Shmancy St., Dededo, Guam"
    about.appendChild(address)
    const location = document.createElement('img')
    location.classList = 'location'
    location.src = './location.png'
    about.appendChild(location)

    return about
}

export default function loadAbout() {
    const main = document.querySelector('.main');
    main.innerHTML = '';
    main.appendChild(createAbout());
}