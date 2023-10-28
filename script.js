document.addEventListener("DOMContentLoaded", function () {
    // Animate the loading page and transition to the main page
    setTimeout(function () {
        document.querySelector(".loading-page").style.display = "none";
        document.querySelector(".main-page").style.display = "block";
    }, 3000); // 4 seconds

    // Handle "Other" input field visibility based on "How did you hear from us?"
    const hearFromUsSelect = document.getElementById("hear-from-us");
    const otherSourceInput = document.getElementById("other-source");
    
    hearFromUsSelect.addEventListener("change", function () {
        if (hearFromUsSelect.value === "other") {
            otherSourceInput.style.display = "block";
            otherSourceInput.setAttribute("required", "required");
        } else {
            otherSourceInput.style.display = "none";
            otherSourceInput.removeAttribute("required");
        }
    });

    // Handle "Home visit" input field visibility based on "Are you in need of a home visit?"
    const homeVisitSelect = document.getElementById("home-visit");
    const visitTimeInput = document.getElementById("visit-time");

    homeVisitSelect.addEventListener("change", function () {
        if (homeVisitSelect.value === "yes") {
            visitTimeInput.style.display = "block";
            visitTimeInput.setAttribute("required", "required");
        } else {
            visitTimeInput.style.display = "none";
            visitTimeInput.removeAttribute("required");
        }
    });
    



/*
    // Form submission handling (this is a basic example, you'll need to adapt this for your needs)
    const form = document.getElementById("submit-to-google-sheet");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting normally

        // Collect form data and send it to Google Sheets (you need to set up the Google Sheets API)
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Example of how to send the data to a Google Sheet using Fetch API
        fetch("https://script.google.com/macros/s/AKfycbyuBgV0fP8zH1OLD7bQ0L6Qn0oFUXleGUFT06ndkscMW6gHa9jQKunTfYkW78_V5ueR/exec", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (response.ok) {
                // Successful submission, redirect to a success page
                window.location.href = "success.html";
            } else {
                // Handle the error, maybe show an error message to the user
                console.error("Error submitting the form.");
            }
        })
        .catch(error => {
            console.error("An error occurred:", error);
        });
    });






*/




const scriptURL = "https://script.google.com/macros/s/AKfycbyuBgV0fP8zH1OLD7bQ0L6Qn0oFUXleGUFT06ndkscMW6gHa9jQKunTfYkW78_V5ueR/exec";
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', async e => {
  e.preventDefault();

  try {
    const formData = new FormData(form);
    const response = await fetch(scriptURL, { method: 'POST', body: formData });

    if (response.ok) {
      setTimeout(function () {
      }, 5000);
      form.reset();
    } else {
      window.location.href = "Failed to send message. Please try again.";
    }
  } catch (error) {
    window.location.href = "Error submitting the form.";
  }
});



    
});
