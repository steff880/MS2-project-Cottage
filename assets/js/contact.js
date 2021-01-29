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

