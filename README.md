# 🎮 Simon Says Game

<div align="center">

  <img src="https://readme-typing-svg.demolab.com?font=Times+New+Roman&weight=700&size=30&pause=1000&color=000000&center=true&vcenter=true&width=500&height=50&lines=Simon+Says+Game;Press+any+key+to+start+the+Game" alt="Typing SVG" />

  <p align="center">
    <b>A clean, classic memory web game built using HTML, CSS, and JavaScript.</b>
  </p>

  <!-- Badges -->
  <p align="center">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  </p>

  <p align="center">
    <a href="#-about-the-project"><b>About</b></a> •
    <a href="#-features"><b>Features</b></a> •
    <a href="#-how-to-play"><b>How To Play</b></a> •
    <a href="#-getting-started"><b>Getting Started</b></a> •
    <a href="#-project-structure"><b>Project Structure</b></a>
  </p>

</div>

---

## 📌 About The Project

This is a simple, minimalist web implementation of the classic **Simon Says** game. The interface features a 2x2 grid of four colored buttons (Pink/Red, Teal, Orange, and Periwinkle/Blue) with rounded corners and thick black borders. 

The goal of the game is to test and train your memory by following a randomized sequence of flashing colors that grows longer with each successful round.

---

## ✨ Features

- **Clean Minimalist Design:** Soft color palette with prominent rounded-corner pads.
- **Keyboard Trigger:** Press any key on your keyboard to instantly kick off Level 1.
- **Dynamic Sequence Generation:** JavaScript logic generates a new color pattern every game session.
- **Flash Feedback:** Buttons flash visually when selected by the game sequence or clicked by the player.
- **Level Progression:** Heading dynamically updates to display your current level score.

---

## 🎯 How To Play

1. **Start:** Open the web page and press **any key** on your keyboard.
2. **Watch:** Pay attention to which color button flashes first.
3. **Click:** Click the matching color button.
4. **Repeat:** As you advance, the game adds one additional color to the end of the sequence each level!
5. **Game Over:** Click the wrong button in the sequence, and the game resets, prompting you to press a key to start over.

---

## 🛠️ Tech Stack

- **HTML5:** Semantic structure for page headers and the 2x2 button grid container.
- **CSS3:** Flexbox/Grid layout, centered typography, color variables, borders, and button flash animations.
- **JavaScript (ES6):** Game state array tracking, user sequence validation, and keypress event handlers.

---

## 🚀 Getting Started

To run this project locally on your machine:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/Simon-Says-Game.git
   ```

2. **Navigate into the directory:**
   ```bash
   cd Simon-Says-Game
   ```

3. **Run the Game:**
   Simply double-click `index.html` to open it in your browser (or use the VS Code Live Server extension).

---

## 📁 Project Structure

```
Simon-Says-Game/
│
├── index.html       # Game structure (Header title & 4 color boxes)
├── style.css        # Box colors, rounded corners, layout & flash animations
└── app.js           # Game sequence logic, keypress listeners & level tracking
```

---

<div align="center">

  <sub>Built with HTML, CSS, and JavaScript</sub>

</div>
