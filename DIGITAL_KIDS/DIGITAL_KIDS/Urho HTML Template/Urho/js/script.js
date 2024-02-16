// Preloader
function appPreloader() {
    body = document.body;
    const page = document.querySelector('.page');
    const preloader = document.querySelector('.preloader');

    window.addEventListener('load', function () {
        preloader.classList.add('loaded');

        preloader.addEventListener('transitionend', function () {
            page.classList.add('page-loaded');
            preloader.style.display = 'none';

            // AOS
            // https://github.com/michalsnik/aos
            AOS.init({
                duration: 600,
                once: true,
            });
        });
    });
}

function appAOS() {
    // AOS
    // https://github.com/michalsnik/aos
    AOS.init({
        duration: 500,
        once: true,
    });
}

// Navigation
function appNavigation() {
    const body = document.body;
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo');
    const menuBtn = document.getElementById('menu-btn');
    const dropdownNav = document.querySelectorAll('.dropdown-nav');

    if (header.classList.contains('header-scrolled')) {
        logo.src = "images/logo-dark.svg";
    }

    menuBtn.addEventListener('click', () => {
        body.classList.toggle('nav-active');
    });

    dropdownNav.forEach(nav => {
        nav.addEventListener('click', () => {
            if (window.matchMedia('(max-width: 992px)').matches) {
                nav.nextElementSibling.classList.toggle('dropdown-nav-open');
            }
        });
        window.addEventListener('resize', () => {
            if (window.matchMedia('(min-width: 993px)').matches) {
                if (nav.nextElementSibling.classList.contains('dropdown-nav-open')) nav.nextElementSibling.classList.remove('dropdown-nav-open');
            };
        });
    });
    window.addEventListener('resize', () => {
        if (window.matchMedia('(min-width: 993px)').matches) {
            if (body.classList.contains('nav-active')) body.classList.remove('nav-active');
        };
    });
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 50 && (!header.classList.contains('header-white'))) {
            header.classList.add('header-scrolled');
        } else if (!header.classList.contains('header-white')) {
            header.classList.remove('header-scrolled');
        }
    });
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 50 && window.matchMedia('(max-width: 992px)').matches) {
            header.style.height = "75px";
        } else header.style.height = "128px";
    });
    window.addEventListener('resize', () => {
        if (window.matchMedia('(min-width: 993px)').matches) header.style.height = "128px";
        if (window.matchMedia('(max-width: 992px').matches && header.classList.contains('header-scrolled')) header.style.height = "75px";
    });
}

// Logo Dark
function appLogoDark() {
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo');

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 50 && (!header.classList.contains('header-white'))) {
            logo.src = "images/logo-dark.svg"
        } else if (!header.classList.contains('header-white')) {
            logo.src = "images/logo.svg"
        }
    });
}

// GLightbox
function appGlightbox() {
    // https://github.com/biati-digital/glightbox
    const lightbox = GLightbox({
        selector: '.glightbox',
        zoomable: false,
        touchNavigation: true,
        loop: false,
        autoplayVideos: true,
    });
    const lightbox2 = GLightbox({
        selector: '.glightbox2',
        zoomable: false,
        touchNavigation: true,
        loop: false,
        autoplayVideos: true,
    });
}
    
// Swiper
// https://github.com/nolimits4web/swiper
function appBrandsSwiper() {
    const brandsSwiper = new Swiper('.brands .swiper', {
        slidesPerView: 2,
        speed: 2000,
        loop: true,
        gap: '10px',
        autoplay: {
            delay: 500,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 5,
            },
        }
    });
}
    
function appTestimonialsSwiper() {
    const testimonialsSwiper = new Swiper('.testimonials .swiper', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        }
    });
}
    
function appProjectsSliderSwiper() {
    const projectsSliderSwiper = new Swiper('.projects-slider .swiper', {
        navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
        },
        slidesPerView: "auto",
        loop: false,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
        }
    });
}
    
// Video
function appVideo() {
    const videoPlayerOverlay = document.querySelectorAll('.video-player-overlay');
    const videoPlay = document.querySelectorAll('.video-icon');
    const iframe = document.querySelector('iframe');

    videoPlay.forEach(link => {
        link.addEventListener('click', () => {
            videoPlayerOverlay.forEach(overlayEl => {
                overlayEl.classList.add('video-visible');
            });
        });
    });

    videoPlayerOverlay.forEach(overlayEl => {
        overlayEl.addEventListener('click', () => {
            overlayEl.classList.remove('video-visible');
            let iframeSrc = iframe.src;
            iframe.src = iframeSrc;
        });
    });
}

// Video Local
function appVideoLocal() {
    const videoPlayerOverlay = document.querySelectorAll('.video-player-overlay');
    const videoPlay = document.querySelectorAll('.video-icon');
    const videoLocal = document.querySelector('.video-local')

    videoPlay.forEach(link => {
        link.addEventListener('click', () => {
            videoPlayerOverlay.forEach(overlayEl => {
                overlayEl.classList.add('video-visible');
            });
        });
    });

    videoPlayerOverlay.forEach(overlayEl => {
        overlayEl.addEventListener('click', () => {
            overlayEl.classList.remove('video-visible');
            videoLocal.pause();
            videoLocal.currentTime = 0;
        })
    })
}
    
// Services
function appServices() {
    const servicesNavLink = document.querySelectorAll('.services-nav-link');
    const servicesContent = document.querySelectorAll('.services-content');

    function selectItem(e) {
        removeBorder();
        removeShow();
        this.classList.add('services-nav-border');
        const servicesContentItem = document.querySelector(`#${this.id}-content`);
        servicesContentItem.classList.add('services-show');
    }

    function removeBorder() {
        servicesNavLink.forEach(item => {
            item.classList.remove('services-nav-border');
        });
    }

    function removeShow() {
        servicesContent.forEach(item => {
            item.classList.remove('services-show');
        });
    }

    servicesNavLink.forEach(item => {
        item.addEventListener('click', selectItem);
    });
}
    
// Form
function appForm() {
    const formElem = document.getElementById('form');
    const alertSuccess = document.querySelector('.alert-success');
    const alertDanger = document.querySelector('.alert-danger');

    formElem.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);

        fetch('mail.php', {
            method: 'POST',
            body: formData,
        }).then(function() {
            alertSuccess.style.display = 'block';
            setTimeout(() => (alertSuccess.style.display = 'none'), 4000);
            formElem.reset();
        }).catch(function() {
            alertDanger.style.display = 'block';
            setTimeout(() => (alertDanger.style.display = 'none'), 4000);
        });
    });
}
    
// Masonry Cursor
function appMasonryCursor() {
    const cursorMasonry = document.querySelector('.cursor-masonry');
    const masonryImg = document.querySelectorAll('.portfolio-masonry .portfolio-box');
    const masonryDescription = document.querySelectorAll('.portfolio-masonry .portfolio__description');

    masonryImg.forEach(masonryImgEl => {
        masonryImgEl.addEventListener('mousemove', moveCursor);
        masonryImgEl.addEventListener('mouseover', () => {
            cursorMasonry.style.display = "block";
        });
        masonryImgEl.addEventListener('mouseleave', () => {
            cursorMasonry.style.display = "none";
        });

        masonryImgEl.addEventListener('mouseover', () => {
            masonryImgEl.lastElementChild.style.opacity = "1";
        });
        masonryImgEl.addEventListener('mouseleave', () => {
            masonryImgEl.lastElementChild.style.opacity = "0";
        });
    });

    function moveCursor(e) {
        let x = e.clientX;
        let y = e.clientY;

        cursorMasonry.style.left = `${x}px`;
        cursorMasonry.style.top = `${y}px`;
        masonryDescription.forEach(el => {
            el.style.left = `${x}px`;
        });
        masonryDescription.forEach(el => {
            el.style.top = `${y - 20}px`;
        });
    }
}

// Counter
function appCounter() {
    const startCounter = document.querySelector('.counter');
    const counter = document.querySelectorAll('.counter');

    let CounterObserver = new IntersectionObserver(
        (entries, observer) => {
            let [entry] = entries;
            if (!entry.isIntersecting) return;

            counter.forEach(counterEl => {
                counterEl.innerText = '0';

                const updateCounter = () => {
                    const target = +counterEl.getAttribute('data-target');
                    const count = +counterEl.innerText;

                    const increment = target / 60;

                    if (count < target) {
                        counterEl.innerText = `${Math.ceil(count + increment)}`;
                        setTimeout(updateCounter, 30);
                    } else {
                        counterEl.innerText = target;
                    }
                };

                updateCounter();
            });

            // observer.unobserve(startCounter) - observation is only one time
            observer.unobserve(startCounter);

        },
        {
            root: null,
            threshold: window.innerWidth > 768 ? 0.3 : 0.2,
        }
    );
    CounterObserver.observe(startCounter);
}

// Progress Steps
function appProgressSteps() {
    const timelineProgress = document.getElementById('progress');
    const timelineBtnNext = document.getElementById('timeline-btn-next');
    const timelineBtnPrev = document.getElementById('timeline-btn-prev');
    const timelineCircles = document.querySelectorAll('.circle');
    const currentTimeline = document.querySelectorAll('current-timeline');

    let currentActive = 1;

    timelineBtnNext.addEventListener('click', () => {
        const currentTimelineShow = document.querySelector('.current-timeline-show')
        currentTimelineShow.classList.remove('current-timeline-show')

        
        if(currentTimelineShow.nextElementSibling) {
            currentTimelineShow.nextElementSibling.classList.add('current-timeline-show')
        } else {
            currentTimeline[0].classList.add('current-timeline-show')
        }

        currentActive++;

        if (currentActive > timelineCircles.length) {
            currentActive = timelineCircles.length;
        }

        update();
    });

    timelineBtnPrev.addEventListener('click', () => {
        const currentTimelineShow = document.querySelector('.current-timeline-show')
        currentTimelineShow.classList.remove('current-timeline-show')

        if(currentTimelineShow.previousElementSibling) {
            currentTimelineShow.previousElementSibling.classList.add('current-timeline-show')
        } else {
            currentTimeline[current.length-1].classList.add('current-timeline-show')
        }

        currentActive--;

        if (currentActive < 1) {
            currentActive = 1;
        }

        update();
        });


    function update() {
        timelineCircles.forEach((circle, idx) => {
            if (idx < currentActive) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
        });

        const actives = document.querySelectorAll('.active');

        timelineProgress.style.width = (actives.length - 2) / (timelineCircles.length - 1) * 100 + '%';

        if (currentActive === 1) {
            timelineBtnPrev.disabled = true;
        } else if (currentActive === timelineCircles.length) {
            timelineBtnNext.disabled = true;
        } else {
            timelineBtnPrev.disabled = false;
            timelineBtnNext.disabled = false;
        }
    }
}

// appPreloader()
// appAOS()
// appNavigation()
// appLogoDark()
// appGlightbox()
// appBrandsSwiper()
// appTestimonialsSwiper()
// appProjectsSliderSwiper()
// appVideo()
// appVideoLocal()
// appServices()
// appForm()
// appMasonryCursor()
// appCounter()
// appProgressSteps()