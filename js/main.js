(() => {
    // menu
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navUl = document.querySelector('.top-nav ul');
    const navigation = () => {
        hamburgerMenu.classList.toggle('open-nav');
        hamburgerMenu.classList.contains('open-nav') ? navUl.classList.add('open') : navUl.classList.remove('open');
    };

    hamburgerMenu.addEventListener('click', navigation)

    // selected card class
    class pickedCard {
        constructor(name, src) {
            this.name = name;
            this.src = src;
        }
    };

    let selectedTrooper;
    let selectedPlanet;

    // pick card function
    const onCardSelection = (e) => {
        if (e.target.nodeName === 'A') {
            const section = e.target.parentElement.parentElement.parentElement;
            const cards = section.querySelectorAll('.card');
            const currentCard = e.target.parentElement;
            cards.forEach(elem => {
                elem.classList.remove('picked-card');
                elem.querySelector('a').innerHTML = 'pick';
            });
            currentCard.classList.add('picked-card');
            e.target.innerHTML = 'picked';

            // create card obj
            const src = currentCard.querySelector('img').src;
            const name = currentCard.querySelector('h2').innerHTML;

            return new pickedCard(name, src);
            console.log(cardObj);

            //selectedTrooper = new pickedCard(name, src);
        }
    };


    // pick trooper
    const troopers = document.querySelector('.troopers');
    troopers.addEventListener('click', e => {
        let pickTro = onCardSelection(e);
        selectedTrooper = pickTro;
    });


    // pick planet
    const planets = document.querySelector('.planets');
    planets.addEventListener('click', e => {
        let pickCrd = onCardSelection(e);
        selectedPlanet = pickCrd;
    });

    // validation
    const myform = document.forms.userData;
    // username variables
    const username = myform.querySelector('#username');
    let usernameValid = false;
    // email variables
    const email = myform.querySelector('#email');
    let emailValid = false;

    function checkUsername(e) {
        const validationMsg = this.nextElementSibling;
        if (this.value === '') {
            usernameValid = false;
            validationMsg.classList.add('invalid');
            validationMsg.innerHTML = 'nic nie wpisałeś';
        } else if (this.value.length < 5) {
            usernameValid = false;
            validationMsg.classList.add('invalid');
            validationMsg.innerHTML = 'musisz wpisac wiecej niż 5 znakow';
        } else {
            usernameValid = true;
            validationMsg.innerHTML = 'git';
            validationMsg.classList.add('valid');
            setTimeout(_ => {
                validationMsg.classList.remove('valid', 'invalid');
            }, 500);
        }
    }

    function checkEmail(e) {
        const emailRe = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const validationMsg = this.nextElementSibling;

        if (!emailRe.test(this.value)) {
            emailValid = false;
            validationMsg.classList.add('invalid');
            validationMsg.innerHTML = 'ten email jest inwalidą';
        } else {
            emailValid = true;
            validationMsg.innerHTML = 'gitewny mailunio'
            validationMsg.classList.add('valid');
            setTimeout(_ => {
                validationMsg.classList.remove('valid', 'invalid');
            }, 500);
        }
    }

    username.addEventListener('keyup', checkUsername);
    email.addEventListener('keyup', checkEmail);

    // modal variables
    const modal = document.querySelector('.modal');
    const closingBtn = document.querySelector('.closing');
    const titleMsg = modal.querySelector('.welcome-msg h2');
    const usernameLabel = modal.querySelector('.user-name .user-data');
    const emailLabel = modal.querySelector('.user-email .user-data');
    const trooperCard = modal.querySelector('.user-picks .trooper');
    const trooperPlanet = modal.querySelector('.user-picks .planet');

    myform.addEventListener('submit', function (e) {
        // if (!emailValid || !usernameValid || !selectedTrooper || !selectedPlanet) {
        //     e.preventDefault();
        //     console.log('invalida');
        if (false) {
            e.preventDefault();
        } else {
            e.preventDefault();
            console.log(selectedTrooper);
            console.log(selectedPlanet);

            // open close modal
            modal.classList.add('open');

            //set title
            titleMsg.innerHTML = 'Welcome ' + username.value;

            //set lables
            //  username  
            usernameLabel.innerHTML = username.value;
            //  email
            emailLabel.innerHTML = email.value;

            // set cards
            trooperCard.src = selectedTrooper.src;
            trooperPlanet.src = selectedPlanet.src;

            // close listener
            closingBtn.addEventListener('click', _ => {
                modal.classList.remove('open');
            });

        }

    });

    // rebel btn
    const rebelBtn = document.querySelector('.rebel');
    rebelBtn.addEventListener('click', function (e) {
        const modal = document.querySelector('.modal');
        // 'stay' alert!
        while (modal.firstChild) {
            modal.removeChild(modal.firstChild)
        };
        modal.style.animation = 'alert .5s infinite';
        modal.classList.add('flex-container', 'flex-wrapper');
        // prevent closing
        closingBtn.style.display = 'none';

        const paragraph = document.createElement('p');
        paragraph.classList.add('rebel-msg');
        paragraph.textContent = 'Stay Where You are!'
        modal.appendChild(paragraph);


    });

})();