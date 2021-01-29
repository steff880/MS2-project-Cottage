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
    return false;
}
