document.addEventListener("DOMContentLoaded", function () {
    const greetingTitle = document.getElementById("greeting-title");
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
        greetingTitle.textContent = "Guten Morgen";
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingTitle.textContent = "Guten Tag";
    } else {
        greetingTitle.textContent = "Guten Abend";
    }

    const loginForm = document.getElementById("loginForm");
    const postbankIdInput = document.getElementById("postbankId");
    const errorMessage = document.getElementById("error-message");
    const btnNext = document.getElementById("btn-next");

    const stepIdContainer = document.getElementById("step-id");
    const stepPasswordContainer = document.getElementById("step-password");

    let currentStep = 1;

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        if (currentStep === 1) {
            const idValue = postbankIdInput.value.trim();

            if (idValue === "") {
                errorMessage.textContent = "⚠️ Bitte geben Sie eine gültige ID ein.";
                postbankIdInput.style.borderColor = "#d32f2f";
            } else {
                errorMessage.textContent = "";
                postbankIdInput.style.borderColor = "#c0c0c0";
                
                stepIdContainer.classList.add("hidden");
                stepPasswordContainer.classList.remove("hidden");
                
                btnNext.textContent = "Einloggen";
                currentStep = 2;
                document.getElementById("password").focus();
            }
        } else if (currentStep === 2) {
            const passwordInput = document.getElementById("password");
            
            if (passwordInput.value.trim() === "") {
                alert("Bitte geben Sie Ihr Passwort ein.");
            } else {
                showToast("Erfolgreich eingeloggt!");
                setTimeout(() => {
                    loginForm.reset();
                    stepPasswordContainer.classList.add("hidden");
                    stepIdContainer.classList.remove("hidden");
                    btnNext.textContent = "Weiter";
                    currentStep = 1;
                }, 3000);
            }
        }
    });

    function showToast(message) {
        const toast = document.getElementById("toast");
        const toastText = document.getElementById("toast-text");
        toastText.textContent = message;
        toast.classList.remove("toast-hidden");
        setTimeout(() => {
            toast.classList.add("toast-hidden");
        }, 3000);
    }
});