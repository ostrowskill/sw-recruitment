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
            elem =>  elem.style.background = resetBg   
        );
    };

    // pick trooper
    const troopers = document.querySelector('.troopers');

    troopers.addEventListener('click', e => {
        if (e.target.nodeName === 'A') {
            pickCard(troopers, '.card', '#080d1b');
            e.target.parentElement.style.background = '#0d1327';
        };
    });

    // pick planet
    const planets = document.querySelector('.planets');
    planets.addEventListener('click', e => {
        if (e.target.nodeName === 'A') {
            pickCard(planets, '.card', '#ded4c2');
            e.target.parentElement.style.background = '#e7e1d4'
        }
    });

    // other
})();