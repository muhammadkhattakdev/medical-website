document.addEventListener('DOMContentLoaded', function () {


    // Side-widget-menu
    document.querySelectorAll('.side-menu-wrap .side-menu-ul .sidenav__item .menu-plus-icon').forEach(function (element) {
        element.addEventListener('click', function () {
            var parentItem = this.closest('.sidenav__item');
            parentItem.classList.toggle('active');
            parentItem.querySelector('.side-sub-menu').classList.toggle('visible');
            
            parentItem.parentNode.childNodes.forEach(function (sibling) {
                if (sibling !== parentItem && sibling.classList) {
                    sibling.classList.remove('active');
                    var subMenu = sibling.querySelector('.side-sub-menu');
                    if (subMenu) {
                        subMenu.classList.remove('visible');
                    }
                }
            });

            return false;
        });
    });

    // Scroll event listener


    // Mobile Menu Open Control


    // Mobile Menu Close Control
    

    // Homepage slide1 using Owl Carousel
    var homePageSliderOne = document.querySelector('.homepage-slide1');
    // Magnific Popup
    // Ripple bg
    // Ajax contact form
    var submitBtn = document.querySelector('#send-message-btn');
    var form = document.querySelector('.contact-form');
    var message = document.querySelector('.alert-message');

    function doneFunction(response) {
        submitBtn.innerHTML = 'Send Message';
        message.classList.add('alert-success');
        message.classList.remove('alert-danger');
        message.textContent = response;
        message.style.display = 'block';
        setTimeout(function () {
            message.style.display = 'none';
        }, 3000);
        form.querySelectorAll('input:not([type="submit"]), textarea').forEach(function (input) {
            input.value = '';
        });
    }

    function failFunction(data) {
        submitBtn.innerHTML = 'Send Message';
        message.classList.add('alert-danger');
        message.classList.remove('alert-success');
        message.textContent = data.responseText;
        message.style.display = 'block';
        setTimeout(function () {
            message.style.display = 'none';
        }, 3000);
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var formData = new FormData(form);
        submitBtn.innerHTML = 'Sending...';
        setTimeout(function () {
            fetch(form.getAttribute('action'), {
                method: 'POST',
                body: formData
            })
                .then(response => response.text())
                .then(doneFunction)
                .catch(failFunction);
        }, 2000);
    });

    // Show/Hide password of input field
    document.querySelectorAll('.toggle-password').forEach(function (element) {
        element.addEventListener('click', function () {
            this.classList.toggle('active');
            var passInput = document.querySelector('.password-field');
            if (passInput.getAttribute('type') === 'password') {
                passInput.setAttribute('type', 'text');
            } else {
                passInput.setAttribute('type', 'password');
            }
        });
    });

    // Copy Rights
    var year = document.querySelector('.year');
    if (year) {
        var currentYear = new Date().getFullYear();
        year.textContent = currentYear;
    }
});
