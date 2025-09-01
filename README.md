# 🥁 Drum Kit – Interactive Web Experience

This is an exercise from **The Hacking Project (THP)**.

Welcome to the **Drum Kit** built with **Rails 8**, **HTML**, **CSS**, and **Vanilla JS**!  
🎶 Press the keys or click **Start Drum Kit 🥁** to play your beats.

---

## ✨ Features

- 🎹 **Keyboard Control** – Keys **A, S, D, F, G, H, J, K, L** play sounds  
- 🌈 **Visual Feedback** – Keys highlight when pressed  
- 🔊 **Unlock Sounds** – Click the Start button to allow audio playback (required for modern browsers)  
- 🛠 **Rails Asset Pipeline** – Works seamlessly with Rails 8  

---

## 🚀 Live Demo

1. Start Rails server:

```bash
bin/rails server

    Open in your browser: http://localhost:3000/drums/index

    Click 🎵 Start Drum Kit 🥁

    Press A S D F G H J K L to play the drums

🎨 How It Looks

[A] [S] [D] [F] [G] [H] [J] [K] [L]
🎵 Clap  🎵 HiHat  🎵 Kick  🎵 OpenHat
💥 Boom  🚀 Ride  🔔 Snare  🥁 Tom  ✨ Tink

    Keys flash visually when pressed for instant feedback!

📂 File Structure

app/
├─ views/drums/index.html.erb      # Drum Kit page
├─ assets/
│  ├─ stylesheets/drum.css         # Drum-specific styles
│  └─ javascript/drum.js           # Drum logic
public/
└─ sounds/
   ├─ clap.wav
   ├─ hihat.wav
   ├─ kick.wav
   ├─ openhat.wav
   ├─ boom.wav
   ├─ ride.wav
   ├─ snare.wav
   ├─ tom.wav
   └─ tink.wav

🎹 Keyboard Mappings
Key	Sound	🎵 
A	Clap	👏
S	HiHat	🥁
D	Kick	🎶
F	OpenHat	🎵
G	Boom	💥
H	Ride	🚀
J	Snare	🔔
K	Tom	🥁
L	Tink	✨

    🔑 Click Start Drum Kit first, otherwise sounds won't play.

🛠 Technologies

    Ruby on Rails 8

    HTML5 Audio API 🎧

    JavaScript (Vanilla) 🖥

    CSS3 🎨

💡 Notes

    All sound files live in public/sounds/ for direct browser access

    Make sure your browser allows audio autoplay

    Fun tip: You can press multiple keys together to create combos! 🎶

👩‍💻 
Author : Martine PINNA
Discord: Martine PINNA
GitHub: Martine9670