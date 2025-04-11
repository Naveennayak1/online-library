# 📚 Online Library

A React-based Online Library system with Redux integration, category filtering, search functionality, and responsive design.

## 🚀 Features

- View all books with filters and search
- Add books (stored in Redux)
- Responsive navbar
- Organized by categories
- Deployed using GitHub Pages

---

## 📦 Getting Started

Follow these steps to run the project locally.

### 1. **Clone the Repository**

```bash
git clone git@github.com:Naveennayak1/online-library.git
cd online-library
```

> ⚠️ If you're using HTTPS instead of SSH:
> ```bash
> git clone https://github.com/Naveennayak1/online-library.git
> ```

---

### 2. **Install Dependencies**

Make sure you have **Node.js** and **npm** installed.

```bash
npm install
```

---

### 3. **Run the Development Server**

```bash
npm start
```

The app will open at `http://localhost:3000`.

---

## 🛠️ Build the Project

```bash
npm run build
```

This will generate optimized static files in the `build/` folder.

---

## 🌐 Deployment (GitHub Pages)

### 1. Install GitHub Pages

```bash
npm install gh-pages --save-dev
```

### 2. Add the following lines to your `package.json`:

```json
"homepage": "https://Naveennayak1.github.io/online-library",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### 3. Deploy 🚀

```bash
npm run deploy
```

Your site will be live at:

📎 https://Naveennayak1.github.io/online-library

---

## 📁 Folder Structure

```
online-library/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   └── App.js
├── package.json
└── README.md
```

---

