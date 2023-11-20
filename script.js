window.addEventListener('scroll', function () {
    var backToTopBtn = document.getElementById('backToTopBtn');
    if (window.scrollY > 500) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {
    var subtitles = document.querySelectorAll('.subtitles a');
    subtitles.forEach(function (subtitle) {
        subtitle.addEventListener('click', function (event) {
            event.preventDefault();
            var targetId = this.getAttribute('href');
            scrollToSection(targetId);
        });
    });
});

function scrollToSection(targetId) {
    var targetElement = document.querySelector(targetId);
    var targetOffsetTop = targetElement.offsetTop;
    window.scrollTo({ top: targetOffsetTop, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {
    const subtitleContainer = document.getElementById('subtitle-container');
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function () {
        const subtitles = document.getElementById('subtitle-container');
        const header = document.querySelector('.header');

        if (window.scrollY > header.offsetHeight) {
            subtitles.classList.add('subtitles-top');
        } else {
            subtitles.classList.remove('subtitles-top');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var mapLink = document.querySelector('.map-link');
    
    mapLink.addEventListener('click', function (event) {
        event.preventDefault();
        
        var googleMapURL = mapLink.getAttribute('data-google');
        var appleMapURL = mapLink.getAttribute('data-apple');
        var samsungMapURL = mapLink.getAttribute('data-samsung');
        
        if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            window.location.href = appleMapURL;
        } else if (navigator.userAgent.match(/Samsung/i)) {
            window.location.href = samsungMapURL;
        } else {
            window.open(googleMapURL, '_blank');
        }
    });
});

var openedApp = false;