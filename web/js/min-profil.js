// min-profil.js — JavaScript kun til min-profil.html (US6b)

// 1) Skift adgangskode: de to nye koder skal være ens

// find de to felter og det tomme <p id="password-error"> under dem
const newPasswordField = document.getElementById("new-password");
const repeatPasswordField = document.getElementById("repeat-password");
const passwordError = document.getElementById("password-error");

// der er tre formularer på siden, så vi finder den rigtige ved at gå ud fra feltet:
// closest("form") = den nærmeste <form> udenom feltet
const passwordForm = newPasswordField.closest("form");

// "submit" = når man trykker på knappen (eller Enter). event = selve hændelsen, som vi kan stoppe
passwordForm.addEventListener("submit", function (event) {
    if (newPasswordField.value !== repeatPasswordField.value) {      // !== = "er ikke lig med"
        passwordError.textContent = "De to adgangskoder er ikke ens.";
        event.preventDefault();                                       // stop formularen i at blive sendt
    }
});

// 2) Slet konto: spørg først, så man ikke sletter ved en fejl (Nielsen #5)

const deleteLink = document.getElementById("delete-account");
const deleteDialog = document.getElementById("confirm-delete");      // vores egen <dialog> nederst i html'en

// "click" = når man klikker på linket
deleteLink.addEventListener("click", function (event) {
    event.preventDefault();                                           // linket skal ikke gå nogen steder af sig selv
    deleteDialog.showModal();                                         // åbn dialogen (modal = resten af siden låses imens)
});

// "close" = når dialogen lukkes - uanset hvilken knap man trykkede
deleteDialog.addEventListener("close", function () {
    // returnValue = value fra den knap der lukkede dialogen: "cancel" eller "confirm"
    if (deleteDialog.returnValue === "confirm") {
        // TODO: her skal backend slette kontoen (US6b). Indtil da sender vi bare til login
        window.location.href = "login.html";                          // window.location.href = "gå til denne side"
    }
});
