/*=========================================================
        JAGAT SINGH TYAGI UCHTAR MADHYAMIK VIDYALAYA
                    script.js
=========================================================*/


/*=========================================================
            WEBSITE LOADED MESSAGE
=========================================================*/

window.addEventListener("load", function () {

    console.log("Website Loaded Successfully");

});


/*=========================================================
        STICKY HEADER SHADOW
=========================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";

    }

    else {

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";

    }

});


/*=========================================================
        ACTIVE NAVIGATION
=========================================================*/

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    const page = link.getAttribute("href");

    if (page === currentPage) {

        link.classList.add("active");

    }

});


/*=========================================================
        SMOOTH SCROLLING
=========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*=========================================================
        FADE-IN ANIMATION
=========================================================*/

const sections = document.querySelectorAll(

".about-home, .principal, .highlight-card, .scheme-box, .notice-item"

);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

});

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(40px)";

    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});


/*=========================================================
        GALLERY IMAGE HOVER
=========================================================*/

const galleryImages = document.querySelectorAll(".gallery-container img");

galleryImages.forEach(image => {

    image.addEventListener("mouseenter", function () {

        this.style.transform = "scale(1.05)";

    });

    image.addEventListener("mouseleave", function () {

        this.style.transform = "scale(1)";

    });

});


/*=========================================================
        CURRENT YEAR IN FOOTER
=========================================================*/

const copyright = document.querySelector(".copyright p");

if (copyright) {

    copyright.innerHTML =

        `© ${new Date().getFullYear()} Jagat Singh Tyagi Uchtar Madhyamik Vidyalaya. All Rights Reserved.`;

}


/*=========================================================
        WELCOME MESSAGE
=========================================================*/

setTimeout(function () {

    console.log(

        "Welcome to Jagat Singh Tyagi Uchtar Madhyamik Vidyalaya"

    );

}, 1000);


/*=========================================================
                END OF FILE
=========================================================*/