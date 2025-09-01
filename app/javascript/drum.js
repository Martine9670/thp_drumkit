if (document.body.dataset.controller === "drums" &&
    document.body.dataset.action === "index") {

  console.log("Drum Kit actif sur cette page ✅");

  // Bouton pour "déverrouiller" la lecture des sons
  const startBtn = document.getElementById("start-drum");
  startBtn.addEventListener("click", function() {
    console.log("Drum Kit prêt !");
    startBtn.style.display = "none"; // cache le bouton après le clic
  });

  // Détection des touches clavier
  window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio || !key) return; // si pas de son ou de touche correspondante, arrête

    audio.currentTime = 0;   // Rejoue le son immédiatement
    audio.play().catch(err => console.log("Impossible de jouer le son :", err)); // capture erreur
    key.classList.add('playing'); // Ajoute l'effet visuel

    // Retire l'effet visuel quand le son est fini
    audio.addEventListener('ended', function() {
      key.classList.remove('playing');
    });
  });

} else {
  console.log("Drum Kit inactif sur cette page ❌");
}
