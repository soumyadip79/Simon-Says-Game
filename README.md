# 🎮 SIMON SAYS — Ultimate Memory Master

<div align="center">

  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=32&pause=1000&color=00F2FE&center=true&vcenter=true&width=600&height=700&lines=%F0%9F%8E%AE+SIMON+SAYS+GAME;%E2%9C%A8+Test+Your+Memory+%26+Reflexes!;%F0%9F%94%A5+Built+with+HTML%2C+CSS+%26+JS;%F0%9F%8F%86+Can+You+Beat+The+Highscore%3F" alt="Typing SVG" />

  <p align="center">
    <b>A retro-modern arcade memory game crafted with sleek glowing UI, smooth animations, and crisp audio cues!</b>
  </p>

  <!-- Badges -->
  <p align="center">
    <a href="https://github.com/your-username/Simon-Says-Game/stargazers">
      <img src="https://img.shields.io/github/stars/your-username/Simon-Says-Game?style=for-the-badge&logo=github&color=4facfe" alt="Stars">
    </a>
    <a href="https://github.com/your-username/Simon-Says-Game/network/members">
      <img src="https://img.shields.io/github/forks/your-username/Simon-Says-Game?style=for-the-badge&logo=github&color=00f2fe" alt="Forks">
    </a>
    <a href="https://github.com/your-username/Simon-Says-Game/issues">
      <img src="https://img.shields.io/github/issues/your-username/Simon-Says-Game?style=for-the-badge&logo=github&color=ff0844" alt="Issues">
    </a>
    <a href="https://github.com/your-username/Simon-Says-Game/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/your-username/Simon-Says-Game?style=for-the-badge&logo=open-source-initiative&color=ffb199" alt="License">
    </a>
  </p>

  <p align="center">
    <a href="#-demo--preview"><b>View Demo</b></a> •
    <a href="#-key-features"><b>Features</b></a> •
    <a href="#-how-to-play"><b>How To Play</b></a> •
    <a href="#-getting-started"><b>Installation</b></a> •
    <a href="#-tech-stack"><b>Tech Stack</b></a>
  </p>

  <br/>

  <!-- Banner / Visual Showcase -->
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-8408-b56b5232b407.gif" width="100%" alt="Arcade Divider Header"/>

</div>

<hr />

## 🌟 Demo & Preview

<div align="center">

```
   ┌────────────────────────────────────────────────────────┐
   │                                                        │
   │      🔴 RED                  🟢 GREEN                  │
   │   ┌──────────┐            ┌──────────┐                 │
   │   │  FLASH!  │            │  READY   │                 │
   │   └──────────┘            └──────────┘                 │
   │                                                        │
   │      🟡 YELLOW               🔵 BLUE                   │
   │   ┌──────────┐            ┌──────────┐                 │
   │   │  WAIT... │            │  PRESS   │                 │
   │   └──────────┘            └──────────┘                 │
   │                                                        │
   │              CURRENT SCORE: 08 | HIGH SCORE: 15        │
   └────────────────────────────────────────────────────────┘
```

> ⚡ **Live Gameplay Experience:** Dynamic lighting, custom sound frequency synthesis, and neon glassmorphism layout!

</div>

<br/>

## ✨ Key Features

<table>
  <tr>
    <td width="50%">
      <h3 align="center">🎨 Neon Glassmorphism UI</h3>
      <p>Sleek modern cyber aesthetics with glowing borders, radial gradients, floating backdrop particles, and responsive hover effects.</p>
    </td>
    <td width="50%">
      <h3 align="center">🔊 Dynamic Audio Feedback</h3>
      <p>Unique Web Audio API frequencies / sound cues for each color pad, providing instant tactile audio-visual synchronization.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3 align="center">⚡ Escalating Difficulty</h3>
      <p>Pattern sequences grow exponentially longer and faster as you level up, testing short-term memory and lightning-fast reflexes.</p>
    </td>
    <td width="50%">
      <h3 align="center">💾 Local High Score Tracking</h3>
      <p>Automatically saves your highest level achieved in browser storage so you can continuously challenge yourself and friends.</p>
    </td>
  </tr>
</table>

<br/>

## 🎯 How To Play

```mermaid
graph TD
    A[🚀 Press Any Key / Tap Start] --> B[👁️ Watch the Flashing Color Sequence]
    B --> C[🧠 Memorize the Order & Tones]
    C --> D[👇 Repeat the Sequence by Clicking Pads]
    D --> E{Did you match correctly?}
    E -- Yes --> F[🎉 Level Up! Sequence Length +1]
    F --> B
    E -- No --> G[💥 Game Over Screen & Flashing Red Alert]
    G --> H[🔄 Press Any Key to Restart]
```

1. **Start the Game:** Press any key on your keyboard or tap the screen to initiate Level 1.
2. **Observe:** Simon will light up a button and play a distinct sound.
3. **Repeat:** Click/tap the exact same button to pass.
4. **Master:** Each round adds one new color pad to the growing sequence!

<br/>

## 🛠️ Tech Stack

<div align="center">

| Technology | Purpose | Badges |
| :--- | :--- | :--- |
| **HTML5** | Game Structure & Canvas | ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) |
| **CSS3** | Animations, Glows & Glassmorphism | ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) |
| **JavaScript** | Game Logic & Sequence State Machine | ![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black) |
| **Web Audio API** | Synthesized Sound Cues | ![Web Audio](https://img.shields.io/badge/Web_Audio_API-00F2FE?style=for-the-badge&logo=headphones&logoColor=black) |

</div>

<br/>

## 🚀 Getting Started

Follow these steps to get a local copy up and running on your machine:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/Simon-Says-Game.git
```

### 2️⃣ Navigate to Project Directory
```bash
cd Simon-Says-Game
```

### 3️⃣ Launch the Game
Open `index.html` directly in your web browser, or launch using Live Server in VS Code:
```bash
# Using VS Code Live Server extension or simple python HTTP server
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

<br/>

## 📁 Project Structure

```
Simon-Says-Game/
│
├── 📂 assets/
│   ├── 📂 sounds/         # Audio files for color pads (red, green, yellow, blue, wrong)
│   └── 📂 images/         # Game screenshots, favicons, and banners
│
├── 📜 index.html          # Game structure & main DOM elements
├── 🎨 style.css           # Custom styles, keyframe animations & glass effect
├── ⚡ app.js              # State handler, sequence generator & event listeners
└── 📖 README.md           # Project documentation
```

<br/>

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<br/>

## 📜 License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for more information.

<br/>

<div align="center">

  <sub>Crafted with ❤️ and ⚡ by <a href="https://github.com/your-username">Your Name</a></sub>

  <br/><br/>

  <a href="#-simon-says--ultimate-memory-master">
    <img src="https://img.shields.io/badge/Back%20To%20Top-↑-00f2fe?style=for-the-badge" alt="Back to top">
  </a>

</div>
