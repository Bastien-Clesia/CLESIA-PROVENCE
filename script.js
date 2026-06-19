/* ==================================
   MENU HAMBURGER
================================== */

const burger = document.getElementById("burger");
const nav = document.querySelector(".nav");

if (burger && nav) {

    burger.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}

/* ==================================
   FERMETURE MENU MOBILE
================================== */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});

/* ==================================
   HEADER SCROLL
================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(255,255,255,0.98)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";

    } else {

        header.style.background = "rgba(255,255,255,.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }

});

/* ==================================
   ANIMATION APPARITION
================================== */

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

},

{
    threshold: 0.15
}

);

const animatedElements = document.querySelectorAll(
`
.service-card,
.offre-card,
.artisan-card,
.testimonial-card,
.contact-card,
.faq-item,
.guide-card,
.stat-card
`
);

animatedElements.forEach(element => {

    element.classList.add("fade-element");

    observer.observe(element);

});

/* ==================================
   SCROLL DOUX ANCRES
================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});

/* ==================================
   BOUTON WHATSAPP
================================== */

const whatsapp = document.querySelector(".whatsapp");

if (whatsapp) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            whatsapp.style.opacity = "1";

            whatsapp.style.transform = "translateY(0)";

        } else {

            whatsapp.style.opacity = "0.9";

        }

    });

}

/* ==================================
   COMPTEUR STATS
================================== */

const statNumbers = document.querySelectorAll(".stat-card h3");

const counterObserver = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const stat = entry.target;

            const text = stat.innerText;

            if (
                text.includes("%") ||
                text.includes("j/7") ||
                text.includes("Local") ||
                text.includes("Premium")
            ) {
                return;
            }

        }

    });

},

{
    threshold: 0.5
}

);

statNumbers.forEach(stat => {

    counterObserver.observe(stat);

});

/* ==================================
   ANIMATION HERO
================================== */

window.addEventListener("load", () => {

    const heroContent = document.querySelector(".hero-content");

    if (heroContent) {

        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(40px)";

        setTimeout(() => {

            heroContent.style.transition =
                "all 1s ease";

            heroContent.style.opacity = "1";
            heroContent.style.transform =
                "translateY(0)";

        }, 200);

    }

});


/* ==================================
   ANIMATION CSS
================================== */

const style = document.createElement("style");

style.innerHTML = `

.fade-element{

opacity:0;

transform:translateY(30px);

transition:
opacity .8s ease,
transform .8s ease;

}

.fade-element.visible{

opacity:1;

transform:translateY(0);

}

`;

document.head.appendChild(style);

/* ==================================
   FORMULAIRE
================================== */

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", () => {

        const button =
            form.querySelector("button");

        if (button) {

            button.innerHTML =
                "Envoi en cours...";

        }

    });

}

/* ==================================
   ANNÉE AUTOMATIQUE FOOTER
================================== */

const footerText = document.querySelector(
".footer-bottom p"
);

if (footerText) {

    footerText.innerHTML =
    `© ${new Date().getFullYear()} Clésia Provence — Tous droits réservés`;

}

/* ==================================
   FIN SCRIPT
================================== */
