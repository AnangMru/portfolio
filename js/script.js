const typing = document.getElementById("typing");

const words = [
    "Web Developer",
    "Machine Learning Engineer",
    "Artificial Intelligence Enthusiast",
    "Computer Vision Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0,charIndex++);
    }else{

        typing.textContent = currentWord.substring(0,charIndex--);

    }

    if(charIndex === currentWord.length + 1){

        deleting = true;

        setTimeout(typeEffect,1500);

        return;

    }

    if(charIndex === 0){

        deleting = false;

        wordIndex++;

        if(wordIndex === words.length){

            wordIndex = 0;

        }

    }

    setTimeout(typeEffect,deleting ? 50 : 100);

}

typeEffect();

const bars = document.querySelectorAll(".progress-bar");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.width = entry.target.classList.contains("html") ? "95%" :
entry.target.classList.contains("js") ? "85%" :
entry.target.classList.contains("python") ? "90%" :
entry.target.classList.contains("laravel") ? "80%" :
entry.target.classList.contains("ml") ? "90%" :
"88%";

}

});

});

bars.forEach(bar=>{

bar.style.width="0";

observer.observe(bar);

});

emailjs.init({
    publicKey: "aBvu9PfCrR3dBSMAg"
});

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const submitButton = contactForm.querySelector("button");

    submitButton.disabled = true;

    submitButton.innerHTML = `
        <i class="fas fa-spinner fa-spin"></i>
        Sending...
    `;

    emailjs.sendForm(
        "service_3vzj4dh",
        "template_vczsxtb",
        this
    )
    .then(function () {

        formStatus.textContent =
            "Pesan berhasil dikirim. Terima kasih telah menghubungi saya!";

        contactForm.reset();

        submitButton.disabled = false;

        submitButton.innerHTML = `
            <i class="fas fa-paper-plane"></i>
            Send Message
        `;

    })
    .catch(function (error) {

        console.error("EmailJS Error:", error);

        formStatus.textContent =
            "Pesan gagal dikirim. Silakan coba lagi.";

        submitButton.disabled = false;

        submitButton.innerHTML = `
            <i class="fas fa-paper-plane"></i>
            Send Message
        `;
    });

});

/* =========================================================
   HAMBURGER MENU
   ========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll("#nav-menu a");


/* Pastikan elemen tersedia */
if (menuToggle && navMenu) {

    /* Buka / tutup menu */
    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");
        document.body.classList.toggle("menu-open");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {

            /* Ubah ☰ menjadi X */
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

            menuToggle.setAttribute("aria-label", "Tutup menu");

        } else {

            /* Ubah X menjadi ☰ */
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            menuToggle.setAttribute("aria-label", "Buka menu");
        }
    });


    /* =====================================================
       TUTUP MENU SETELAH MENU DIKLIK
       ===================================================== */

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");
            document.body.classList.remove("menu-open");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            menuToggle.setAttribute("aria-label", "Buka menu");
        });

    });


    /* =====================================================
       TUTUP MENU JIKA KLIK DI LUAR NAVBAR
       ===================================================== */

    document.addEventListener("click", function (event) {

        const navbar = document.querySelector(".navbar");

        if (
            navMenu.classList.contains("active") &&
            navbar &&
            !navbar.contains(event.target)
        ) {

            navMenu.classList.remove("active");
            document.body.classList.remove("menu-open");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            menuToggle.setAttribute("aria-label", "Buka menu");
        }

    });


    /* =====================================================
       JIKA LAYAR KEMBALI KE DESKTOP
       ===================================================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {

            navMenu.classList.remove("active");
            document.body.classList.remove("menu-open");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            menuToggle.setAttribute("aria-label", "Buka menu");
        }

    });

}