const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

const scrollHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 30
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/* calculator */
const calculateForm = document.getElementById("calculate-form");
const heightInput = document.getElementById("calculate-cm");
const weightInput = document.getElementById("calculate-kg");
const calculateMessage = document.getElementById("calculate-message");

const calculateBMI = (e) => {
  e.preventDefault();

  if (heightInput.value === "" || weightInput.value === "") {
    calculateMessage.classList.remove("color-green");
    calculateMessage.classList.add("color-red");

    calculateMessage.textContent = "Fill in the height and weight";

    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 3000);
  } else {
    const cm = heightInput.value / 100;
    const kg = weightInput.value;
    const bmi = Math.round(kg / (cm * cm));

    calculateMessage.classList.add("color-green");
    if (bmi < 18.5) {
      calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny.`;
    } else if (bmi < 25) {
      calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy.`;
    } else {
      calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight.`;
    }

    heightInput.value = "";
    weightInput.value = "";

    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 4000);
  }
};

calculateForm.addEventListener("submit", calculateBMI);
/* calculator */

/* send email */
const contactForm = document.getElementById("contact-form");
const contactUserInput = document.getElementById("contact-user");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  if (contactUserInput.value === "") {
    contactMessage.classList.remove("color-green");
    contactMessage.classList.add("red-green");

    contactMessage.textContent = "You must enter your email.";

    setTimeout(() => {
      contactMessage.classList.remove("color-red");
      contactMessage.textContent = "";
    }, 3000);
  } else {
    // serviceId, templateId, #formId, publicKey
    emailjs.sendForm().then(
      () => {
        contactMessage.classList.add("color-green");
        contactMessage.textContent = "You registered successfully.";

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 3000);
      },
      (error) => {
        alert("something has failed.");
      }
    );

    contactUserInput.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);
/* send email */
