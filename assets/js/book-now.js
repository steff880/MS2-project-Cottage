// Used code from this tutorial https://www.youtube.com/watch?v=HzJngc-Se9Q and modified it to fit project needs

// Email validation


function validation() {
    let form = document.getElementById("form-bookNow");
    let email = document.getElementById("email").value;
    let textMessage = document.getElementById("text-message");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        textMessage.innerHTML = "Email Address is Valid";
        textMessage.style.color = "#00ff00";
        textMessage.style.display = "block";
        textMessage.style.padding = "0px 10px 5px 5px";
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        textMessage.innerHTML = "Please Enter Valid Email Address ";
        textMessage.style.color = "#ff0000";
        textMessage.style.display = "block";
        textMessage.style.padding = "0px 10px 5px 5px";
    }

    if (email === "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        textMessage.innerHTML = "";
        textMessage.style.color = "#00ff00";
        textMessage.style.display = "none";
        textMessage.style.padding = "0";
    }
}

// Email Validation End

// Submit 

document.getElementById("form-bookNow").addEventListener("submit", function (e) {
    e.preventDefault();

    let form = document.getElementById("form-bookNow");
    let alertMessage = document.getElementById("alert-message");
    let btnReset = document.getElementById("btnReset");

    if (form.checkValidity()) {
        alertMessage.classList.add("alert", "alert-success");
        alertMessage.innerHTML = "Your Booking is Successful";
        alertMessage.style.display = "block";
        btnReset.classList.remove("btn-reset-hide");

    } else {
        alertMessage.innerHTML = "";
    }


    setTimeout(function () {
        alertMessage.classList.remove("alert", "alert-success");
        alertMessage.innerHTML = "";
    }, 3000);

    form.reset();
});

