document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    let emailSent = document.getElementById("email-sent");
    emailSent.innerText = email;
});