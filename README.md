# Game-Freak-Reviews

## Overview
Game-Freak-Reviews is a dedicated platform for gamers to explore, review, and discuss the latest and greatest in the gaming world. Whether you're looking for in-depth reviews, expert ratings, or community opinions, we bring you honest, unbiased, and engaging content about video games across all platforms.

## Live Site URL : https://game-freak-reviews-client.web.app

## 🛠 Technologies Used

This project is built using the following technologies:

- ⚛ **[React.js](https://react.dev/)** – A JavaScript library for building dynamic and interactive user interfaces.  
- 📜 **JavaScript (ES6+)** – The core programming language used for development.  
- 🎨 **[Tailwind CSS](https://tailwindcss.com/)** – A utility-first CSS framework for fast and responsive UI design.  
- 🔥 **[Firebase](https://firebase.google.com/)** – Used for authentication, database, and cloud storage.  
- 🍃 **[MongoDB](https://www.mongodb.com/)** – A NoSQL database for efficiently storing and managing data.  
- ⚡ **[Node.js](https://nodejs.org/)** – A runtime environment for executing JavaScript code on the server.  

## Screenshots

![App Screenshot](https://github.com/Sadia0920/gameFreak-reviews/blob/main/pic1.png)

## 🚀 Features

- 🔐 **User Authentication** – Users can **register** and **log in**, with their information securely stored.  
- 🔑 **Google Authentication** – Users can also log in using their **Google accounts** for convenience.  
- 🔒 **Protected Routes** – Some sections of the website are accessible only to **registered users**.  
- 📝 **Game Reviews** – Users can **add reviews** for different games.  
- 📌 **Watchlist** – Users can **add games to their watchlist** to keep track of favorites.  
- 🔍 **Detailed Reviews** – Users can **view all reviews** of a game, along with a **details button** for more information.  
- ✍️ **My Reviews Section** – Users can see **only their own reviews** in the "My Reviews" section.  
- 🎨 **Theme Controller** – A theme switcher allows users to customize the website appearance.  
- 🎮 **Gaming Platform Section** – A special section to **learn more about gaming** and explore new trends.

## Dependencies

This project utilizes the following npm packages:

| Package | Version | Description |
|---------|---------|-------------|
| [firebase](https://firebase.google.com/docs/web/setup) | ^11.0.2 | Google Firebase SDK for authentication, database, and storage |
| [localforage](https://localforage.github.io/localForage/) | ^1.10.0 | Offline storage with IndexedDB, WebSQL, or localStorage |
| [match-sorter](https://github.com/kentcdodds/match-sorter) | ^8.0.0 | Utility for ranking and sorting items based on search terms |
| [react](https://react.dev/) | ^18.3.1 | JavaScript library for building user interfaces |
| [react-awesome-reveal](https://github.com/dennismorello/react-awesome-reveal) | ^4.2.14 | Animation library for revealing components in React |
| [react-dom](https://react.dev/) | ^18.3.1 | React package for DOM rendering |
| [react-icons](https://react-icons.github.io/react-icons/) | ^5.4.0 | Collection of popular icon packs for React |
| [react-router-dom](https://reactrouter.com/) | ^7.0.2 | Declarative routing for React applications |
| [react-tooltip](https://react-tooltip.com/) | ^5.28.0 | A customizable tooltip component for React |
| [sort-by](https://www.npmjs.com/package/sort-by) | ^1.2.0 | Utility for sorting arrays of objects by property values |
| [sweetalert2](https://sweetalert2.github.io/) | ^11.14.5 | Modern and customizable alert, confirm, and prompt dialogs |

To install these dependencies, run:

```sh
npm install
```
## Run Locally

Clone the project

```bash
  git clone https://github.com/Sadia0920/gameFreak-reviews.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_API_KEY=your_firebase_api_key`
`VITE_AUTH_DOMAIN=your_firebase_auth_domain`
`VITE_PROJECT_ID=your_firebase_project_id`
`VITE_STORAGE_BUCKET=your_firebase_storage_bucket`
`VITE_MESSAGING_SENDER_ID=your_firebase_sender_id`
`VITE_APP_ID=your_firebase_app_id`
`VITE_SERVER_URL=your_backend_server_url`

