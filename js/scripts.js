/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
document.addEventListener('DOMContentLoaded', function() {
    var skills = document.querySelectorAll('.skills-list li');
    var delay = 100;

    skills.forEach(function(skill) {
        setTimeout(function() {
            skill.classList.add('visible');
        }, delay);
        delay += 300; // Increase the delay for each skill
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var readMoreBtn = document.querySelector('.read-more');
    var fullDescription = document.querySelector('.full-description');

    readMoreBtn.addEventListener('click', function(event) {
        event.preventDefault();
        fullDescription.classList.remove('hidden');
        readMoreBtn.style.display = 'none';
    });
});
