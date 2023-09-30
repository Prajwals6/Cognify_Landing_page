

document.addEventListener("DOMContentLoaded", function () {
    const applicationForm = document.getElementById("application-form");
    const confirmationMessage = document.getElementById("confirmation-message");

    applicationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        
        setTimeout(function () {
            confirmationMessage.innerHTML = "Application submitted successfully!";
            applicationForm.reset();
        }, 2000);
    });
});
