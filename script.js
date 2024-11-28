function revealSurprise() {
    const name = document.getElementById("nameInput").value.trim();
    if (name) {
        document.getElementById("welcome-screen").classList.add("hidden");
        document.getElementById("surprise-screen").classList.remove("hidden");
        document.getElementById("personalized-message").textContent = `Joyeux Anniversaire, ${name} ! 🎉`;
    } else {
        alert("Veuillez entrer un prénom pour continuer !");
    }
}
