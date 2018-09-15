(() => {
    // menu
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navUl = document.querySelector('.top-nav ul');
    const navigation = () => {
        hamburgerMenu.classList.toggle('open-nav');
        hamburgerMenu.classList.contains('open-nav') ? navUl.classList.add('open') : navUl.classList.remove('open');
    };

    hamburgerMenu.addEventListener('click', navigation)

    // pick card function
    const pickCard = (section, card, resetBg) => {
        section.querySelectorAll(card).forEach(
            elem => {
                elem.style.background = resetBg;
                elem.querySelector('.btn').textContent = 'pick';

            }

        );
    };

    class selectedCard {
        constructor(name, src) {
            this.name = name;
            this.src = src;
        }
    };

    // is picked?
    let pickedTrooper;
    let pickedPlanet;

    // pick trooper
    const troopers = document.querySelector('.troopers');

    troopers.addEventListener('click', e => {
        if (e.target.nodeName === 'A') {
            pickCard(troopers, '.card', '#080d1b');
            e.target.textContent = 'picked';
            const card = e.target.parentElement;
            card.style.background = '#0d1327';
            
            //get info
            const src= card.querySelector('img').src;
            const name = card.querySelector('h2').innerHTML;

            //pick action
            pickedTrooper = new selectedCard(name, src);

        };
    });

    // pick planet
    const planets = document.querySelector('.planets');
    planets.addEventListener('click', e => {
        if (e.target.nodeName === 'A') {
            pickCard(planets, '.card', '#ded4c2');
            e.target.textContent = 'picked';
            const card = e.target.parentElement;
            card.style.background = '#e7e1d4'
            //get info
            const src= card.querySelector('img').src;
            const name = card.querySelector('h2').innerHTML;
            //pick action
            pickedPlanet = new selectedCard(name, src);
        }
    });


    // contact form
    const form = document.forms.contactform;

    form.addEventListener('submit', e => {
        e.preventDefault();
        const userName = form.querySelector('#username').value;
        const userEmail = form.querySelector('#email').value;

        if (pickedTrooper && pickedPlanet && userName && userEmail) {
            console.log(pickedTrooper);
            console.log(pickedPlanet);
            console.log(userName);
            console.log(userEmail);
            const newCard = document.createElement('ul');
            const piture = document.createElement('li.new-card');

        } else {
            console.log('something is not picked');
        }

    });

    // other
})();