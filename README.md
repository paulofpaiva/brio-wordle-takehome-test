# Wordle Take-Home Test

Welcome to the Wordle coding challenge! This is a take-home project where you'll build a full-stack Wordle game from scratch. A static reference view is provided to show you what the game should look like, but you'll need to implement all the game logic, components, and API functionality.

## 📋 Table of Contents

- [Game Rules](#game-rules)
- [Technical Requirements](#technical-requirements)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Viewing the Static Reference](#viewing-the-static-reference)
- [Running the Application](#running-the-application)
- [Your Task](#your-task)
- [Submission](#submission)

## 🎮 Game Rules

Wordle is a word-guessing game where players have **6 attempts** to guess a secret **5-letter word**.

### How to Play:

1. **Type a 5-letter word** and press Enter to submit your guess
2. After each guess, the tiles change color to show how close your guess was:
   - 🟩 **GREEN**: The letter is correct and in the right position
   - 🟨 **YELLOW**: The letter is in the word but in the wrong position
   - ⬜ **GRAY**: The letter is not in the word at all
3. You have **6 tries** to guess the word
4. Each guess must be a valid 5-letter word

### Example:

If the secret word is **REACT**:
- Guess **CRANE**: C🟨 R🟩 A🟩 N⬜ E🟨
  - C is in the word but wrong position
  - R and A are in the correct positions
  - N is not in the word
  - E is in the word but wrong position

### 
Try the real game to understand more of the mechanics [https://www.nytimes.com/games/wordle/index.html]

## 🛠️ Technical Requirements

### Technology Stack:

- **Frontend**: React (with Hooks)
- **Backend**: Node.js with Express
- **Styling**: CSS (mimics the real Wordle design)

## 📁 Project Structure

```
wordle-takehome-test/
├── client/                  # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── WordleStaticView.js  # Static reference view (example)
│   │   ├── App.js               # Main app component (minimal)
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── server/                  # Express backend
│   ├── routes/
│   │   └── wordRoutes.js        # Placeholder API routes
│   └── index.js                 # Server entry point
├── package.json
├── .gitignore
└── README.md
```

## 🚀 Installation

### Prerequisites:

- Node.js (v14 or higher)
- npm or yarn

### Steps:

1. **Clone or download this repository**

2. **Install backend dependencies**:
   ```bash
   npm install
   ```

3. **Install frontend dependencies**:
   ```bash
   cd client
   npm install
   cd ..
   ```

   Or use the convenience script:
   ```bash
   npm run install-all
   ```

4. **Configure environment variables (optional)**:
   
   Create `.env` file in the root directory (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```
   
   Create `.env` file in the client directory:
   ```bash
   cd client
   cp .env.example .env
   cd ..
   ```
   
   Edit the `.env` files to customize ports if needed:
   
   **Root `.env`** (Backend):
   ```
   PORT=5000
   ```
   
   **Client `.env`** (Frontend):
   ```
   PORT=3000
   REACT_APP_API_URL=http://localhost:5000
   ```
   
   > **Note**: If you change the backend port, make sure to update `REACT_APP_API_URL` in the client `.env` file to match.

## 👀 Viewing the Static Reference

Before you start building, you can view the static Wordle UI reference by running the frontend:

```bash
cd client
npm start
```

Open http://localhost:3000 to see what the finished game should look like. This static view (`WordleStaticView.js`) shows:
- The game board with example guesses
- Color coding for tiles (green = correct, yellow = wrong position, gray = not in word)
- The on-screen keyboard with visual feedback
- Overall styling and layout

**This is just a reference!** Your task is to build functional components and game logic that recreate this design with real interactivity.

## ▶️ Running the Application

### Development Mode:

You'll need two terminal windows:

**Terminal 1 - Backend Server:**
```bash
npm start
# Server runs on http://localhost:5000 (or your configured PORT)
```

**Terminal 2 - Frontend Development Server:**
```bash
npm run client
# Client runs on http://localhost:3000 (or your configured PORT)
```

The frontend is configured to proxy API requests to the backend automatically.

### Access the Game:

Open your browser and navigate to:
```
http://localhost:3000
```

Or your configured frontend port.

### Custom Ports:

To run on different ports, create `.env` files as described in the Installation section:

**Example - Running on different ports:**

Root `.env`:
```
PORT=8080
```

Client `.env`:
```
PORT=3001
REACT_APP_API_URL=http://localhost:8080
```

Then run normally with `npm start` and `npm run client`.

## �📝 Your Task

This project provides a minimal starting point for building Wordle. A static reference view (`WordleStaticView.js`) shows what the finished game should look like, but **you need to build everything from scratch**.

### What's Already Provided:

✅ Basic React app setup
✅ Express server setup with CORS and JSON middleware
✅ Static reference view showing the game UI design
✅ Project structure and configuration

### What You Need to Build:

- **Frontend**: Build React components to create the game interface matching the static reference view
- **Backend**: Implement game logic and session management server-side
- **API**: Create endpoints that handle game operations
- **Integration**: Connect frontend and backend to create a fully functional game

### Required Features:
- Game board that displays guesses with appropriate color feedback
- Proper validation of guesses
- Interactive keyboard (on-screen with the mouse click)

BONUS
- Interactive keyboard (physical keyboard support)
- User feedback messages
- New game functionality

## 📝 Submission

When you're ready to submit:

1. Ensure all code is committed to your repository
2. Test the application end-to-end one final time
3. Make sure both frontend and backend start without errors
4. Include any additional notes or comments in your commit messages

##  Questions?

If you have any questions about the requirements or run into issues, please reach out to your interviewer.

## 🎉 Good Luck!

Have fun building your Wordle implementation!
