if (document.body.dataset.controller === "drums" &&
    document.body.dataset.action === "index") {

  console.log("Drum Kit actif sur cette page ✅");

  const startBtn = document.getElementById("start-drum");

  // Déclenchement automatique du bouton invisible
  function unlockAudio() {
    startBtn.click();
    window.removeEventListener("keydown", unlockAudio);
    window.removeEventListener("click", unlockAudio);
  }

  window.addEventListener("keydown", unlockAudio);
  window.addEventListener("click", unlockAudio);

  // Jouer les sons au clavier
  window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio || !key) return;

    audio.currentTime = 0;
    audio.play().catch(err => console.log("Impossible de jouer le son :", err));
    key.classList.add('playing');

    audio.addEventListener('ended', function() {
      key.classList.remove('playing');
    });
  });
}

