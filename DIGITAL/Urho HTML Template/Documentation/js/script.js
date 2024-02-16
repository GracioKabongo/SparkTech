appAside = () => {
    const menuBtn = document.getElementById('menu-btn');
    const body = document.body;
    const navLink = document.querySelectorAll('.nav-link');
    
    menuBtn.addEventListener('click', () => body.classList.toggle('menuActive'))
    navLink.forEach(function (link) {
        link.addEventListener('click', function (e) {
            body.classList.remove('menuActive');
        });
    });
};

// MoveTo
// https://github.com/hsnaydd/moveTo
const appMoveTo = () => {

    const easeFunctions = {
        easeInOutCubic: function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }
    };

    const triggers = document.querySelectorAll('.smoothscroll')

    const moveTo = new MoveTo({
        tolerance: 120,
        duration: 500,
        easing: 'easeInOutCubic',
        container: window
    }, easeFunctions)

    triggers.forEach(function (trigger) {
        moveTo.registerTrigger(trigger)
    });
};

const appScrollSpy = () => {

    const scrollSpySections = document.querySelectorAll('.scroll-spy');

    window.addEventListener('scroll', scrollSpy);

    function scrollSpy() {

        let scrollY = window.pageYOffset;

        scrollSpySections.forEach(function (active) {
            const sectionHeight = active.offsetHeight;
            const sectionTop = active.offsetTop - 250;
            const sectionId = active.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav a[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('.nav a[href*=' + sectionId + ']').classList.remove('active');
            }
        });
    };
};

appAside();
appMoveTo();
appScrollSpy();