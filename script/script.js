/* menu */

const openMenu = document.querySelector(".btn-menu");
const sideMenu = document.querySelector(".side-menu");
const contentMenu = document.querySelector(".content-menu");
const btnClose = document.querySelector(".close-menu");
const menuLink = document.querySelectorAll(".menu-link");

openMenu.addEventListener("click", () => {
  contentMenu.classList.add("active");
});

btnClose.addEventListener("click", () => {
  contentMenu.classList.remove("active");
});

menuLink.forEach(function (menuLink) {
  menuLink.addEventListener("click", () => {
    contentMenu.classList.remove("active");
  });
});

/* testimonials */

const slides = document.getElementsByClassName("test-slides");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

if (!slides.length == 0) {
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }
}

prev.addEventListener("click", () => {
  plusSlides(-1);
});

next.addEventListener("click", () => {
  plusSlides(1);
});

/* form */

const form = document.querySelector(".contact-form");
const username = document.querySelector(".name");
const mail = document.querySelector(".email");
const nameErr = document.querySelector(".err-name");
const mailErr = document.querySelector(".err-mail");
const closeName = document.querySelector(".close-name");
const closeMail = document.querySelector(".close-mail");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const nameValue = username.value;
  const mailValue = mail.value;

  if (nameValue === "") {
    nameErr.classList.add("active");
  }

  if (mailValue === "") {
    mailErr.classList.add("active");
  } else if (!isEmail(mailValue)) {
    mailErr.classList.add("active");
  }

  function isEmail(mail) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mail);
  }
}

closeName.addEventListener("click", () => {
  nameErr.classList.remove("active");
});

closeMail.addEventListener("click", () => {
  mailErr.classList.remove("active");
});
