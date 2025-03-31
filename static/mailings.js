function validateMailingForm(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const zipInput = document.getElementById("zip");
    const errorContainer = document.getElementById("errorMessages");

    errorContainer.innerHTML = "";
    let errors = [];

    if (!nameInput.checkValidity()) {
        errors.push("Please enter your full name");
    }

    if (!emailInput.checkValidity()) {
        errors.push("Please enter a valid email address");
    }

    if (!zipInput.checkValidity()) {
        errors.push("Please enter a valid 5-digit ZIP code");
    }

    if (errors.length > 0) {
        errorContainer.innerHTML = errors.join("<br>");
        errorContainer.style.color = "#dc3545";
        errorContainer.style.margin = "1rem 0";
    } else {
        alert("Thank you for subscribing!");
        document.getElementById("mailingForm").reset();
    }
}