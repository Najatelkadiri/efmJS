function validateForm() {
    // Récupérer les valeurs des champs du formulaire
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Vérifier que tous les champs sont remplis
    if (name === "" || email === "" || message === "") {
        alert("Tous les champs doivent être remplis !");
    } else {
        // Afficher un message de confirmation
        document.getElementById('confirmationMessage').innerText = "Merci pour votre message, " + name + "!";
        // Réinitialiser le formulaire
        document.getElementById('contactForm').reset();
    }
}
 