# 🥘 Virtual Recipe Book — A Full-Stack Web App for Culinary Creativity

## Overview

The **Virtual Recipe Book** is a full-stack web application that empowers users to browse, share, and discover recipes with a clean and intuitive interface. The app features a modern recipe gallery, detailed recipe pages, and a submission form that lets users add new entries. A MySQL database is used to persist user-submitted recipes including titles, descriptions, image links, and external URLs.

This project demonstrates how modern frontend technologies like **React** can be combined with traditional **relational databases** to deliver a seamless, user-friendly culinary experience online.

---

## 🌟 Features

* **Homepage** with a personalized welcome and call to action
* **Recipe Gallery**: Grid layout of visually appealing recipe cards
* **Add Recipe Form**: Allows users to submit recipes with rich details
* **Detailed View**: Clickable cards lead to expanded recipe pages
* **Responsive Design** for desktop and mobile
* **Persistent Storage** via MySQL backend

---

## 📸 Screenshots (Optional)

> Add a few UI screenshots here (e.g., homepage, recipe form, card gallery) if available.

---

## 🧑‍🍳 User Flow

1. Users land on a welcoming homepage.
2. They can browse the gallery of recipes or add their own.
3. Each recipe is displayed in a card format with an image, title, and brief description.
4. Clicking a card opens the full recipe view with links and instructions.
5. Users can add a new recipe via a form that includes inputs for:

   * Title
   * Description
   * Image URL
   * External Link

---

## 🏗️ Tech Stack

**Frontend**

* React.js (with Create React App)
* CSS Modules / Plain CSS

**Backend / Database**

* MySQL
* (Optional) Node.js / Express.js (for API if backend exists)

---

## 🗃️ Project Structure

```bash
virtual-recipe-book/
│
├── public/                 # Static files and index.html
├── src/
│   ├── components/         # Reusable UI components (e.g., RecipeCard, HomePage)
│   ├── App.js              # Main React component
│   ├── index.js            # Entry point
│   └── styles/             # CSS files
├── db/                     # MySQL schema and connection logic (if included)
├── recipes.json            # (Optional) JSON recipe data for seeding/testing
├── README.md               # You're here!
└── package.json            # NPM metadata and dependencies
```

---

## 🔌 Database Schema (MySQL)

```sql
CREATE TABLE recipes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  image_url VARCHAR(500),
  external_link VARCHAR(500)
);
```

---

## 🧪 Running Locally

### Prerequisites

* Node.js & npm
* MySQL

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/virtual-recipe-book.git
   cd virtual-recipe-book
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure the MySQL connection**
   *(Only if backend API is integrated)*
   Set credentials in `.env` or DB config file.

4. **Start the app**

   ```bash
   npm start
   ```

   App runs at `http://localhost:3000`

---

## 🧰 Scripts

```bash
npm start       # Start development server
npm run build   # Build production version
npm test        # Run test suite (if implemented)
```

---

## 📦 Deployment

You can deploy this app on:

* **Vercel / Netlify** (Frontend only)
* **Render / Heroku** (If full-stack backend is included)
* **Docker** (with MySQL container for backend)

---

## 🎯 Future Enhancements

* ✅ Add comments and ratings to recipes
* ✅ Integrate authentication (e.g., sign-in to submit)
* ✅ Tag-based filtering and search
* ✅ Bookmark/favorite recipes
* ✅ API refactor using Node.js/Express or Flask
* ✅ Progressive Web App (PWA) for offline access

---

# License

This repository is proprietary and all rights are reserved. No usage, modification, or distribution is allowed without permission.
