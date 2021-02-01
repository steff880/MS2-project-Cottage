// text animation
// Credit: Dev Ed https://www.youtube.com/watch?v=GUEB9FogoP8

const heading = document.querySelector(".contact-heading");
// get the heading and split into individual letters
const headingText = heading.textContent;
const splitHeading = headingText.split("");
heading.textContent = "";

// Wrap each letter in <span> element
for (let i = 0; i < splitHeading.length; i++) {
    heading.innerHTML += "<span>" + splitHeading[i] + "</span>";
}
// set interval for 50ms
let char = 0;
let timer = setInterval(onTick, 50);

// // add class fade to each span
function onTick() {
    const span = heading.querySelectorAll("span")[char];
    span.classList.add("fade-text");
    char++;
    if (char === splitHeading.length) {
        complete();
        return;
    }
}
// clear the timer
function complete() {
    clearInterval(timer);
    timer = null;
}
// text animation end

// Code below used from Code Institute tutorial on emailjs --> sligly modified to fit project needs

// EmailJS
function sendMail(contactForm) {
    emailjs.send("Stefan", "Stefan-MS2", {
        "from_fname": contactForm.fname.value,
        "from_lname": contactForm.lname.value,
        "from_email": contactForm.emailaddress.value,
        "request_message": contactForm.message.value
    })
        .then(
            function () {
                let submitBtn = document.getElementById("submitBtn");
                submitBtn.innerHTML = "Email Sent!";
            },
            function () {
                let alertMessage = document.getElementById("alert-message");
                alertMessage.style.display = "block";
                alertMessage.classList.add("alert", "alert-danger");
                alertMessage.innerHTML = "Error! Please try again.";
            });
    document.getElementById("contactForm").reset();
    return false;
}
// EmailJS end


// Form fade in

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.fromTo("form", { opacity: 0 }, { opacity: 1, duration: 3 });

// Form fade End