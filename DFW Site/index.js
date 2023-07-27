window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.fontSize = "30px";
    } else {
        document.getElementById("header").style.fontSize = "50px";
    }
}


const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7
}

function observerCallBack(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.replace('fadeOut', 'fadeIn');
        } else {
            entry.target.classList.replace('fadeIn', 'fadeOut');
        }
    });
}

const observer = new IntersectionObserver(observerCallBack, observerOptions);

const fadeElms = document.querySelectorAll(".cards");
fadeElms.forEach(el => observer.observe(el));