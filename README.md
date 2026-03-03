# # 🔍 GitHub Profile Viewer

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub API](https://img.shields.io/badge/GitHub_API-181717?style=for-the-badge&logo=github&logoColor=white)

A simple and responsive **GitHub Profile Viewer** web app built with **HTML, CSS, and JavaScript** — developed while learning frontend development fundamentals.

It fetches real-time GitHub user data using the **GitHub REST API** and renders profile details dynamically on the UI.

---

## 📸 Demo Preview

> *(Add your screenshot here)*

```
![Project Screenshot](screenshot.png)
```

---

## ✨ Features

- 🔍 Search any GitHub username instantly
- 👤 Displays profile picture, name, and bio
- 📊 Shows followers, following & public repositories count
- 🌐 Direct link to the user's GitHub profile
- 📱 Fully responsive design (mobile-friendly)
- ⚡ Real-time data fetching using the `Fetch API`
- ❌ Graceful error handling for invalid usernames

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure & markup |
| CSS3 | Styling & responsive layout |
| JavaScript (ES6+) | API calls, async logic & DOM manipulation |
| GitHub REST API | Fetching live user data |

---

## 📂 Project Structure

```
📦 GitHub-Profile-Viewer
 ┣ 📜 index.html      → Main HTML structure
 ┣ 📜 style.css       → Styling & responsive design
 ┣ 📜 script.js       → API logic & DOM manipulation
 ┗ 📜 README.md       → Project documentation
```

---

## ⚙️ How It Works

1. User enters a GitHub username in the search box.
2. JavaScript sends a `GET` request to the GitHub API:
   ```
   https://api.github.com/users/{username}
   ```
3. The API response (JSON) is parsed and extracted.
4. Profile data is dynamically rendered on the UI using DOM manipulation.
5. If the username doesn't exist, an error message is shown gracefully.

---

## 🚀 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/your-username/github-profile-viewer.git

# 2. Navigate into the project folder
cd github-profile-viewer

# 3. Open index.html in your browser
# (No build tools or dependencies needed!)
```

---

## 🎯 What I Learned

This project helped me understand and practice:

- Working with **REST APIs**
- Using the **Fetch API** for HTTP requests
- Handling **asynchronous JavaScript** (`async/await`, Promises)
- **DOM manipulation** to render dynamic content
- Building **responsive UI** with CSS
- **Error handling** in API calls

---

## 🔮 Future Improvements

- [ ] Display user's public repositories list with links
- [ ] Add dark / light mode toggle
- [ ] Show a loading spinner during API calls
- [ ] Add smooth animations & transitions
- [ ] Show pinned repositories
- [ ] Cache recent searches for better UX

---

## 🤝 Connect With Me

If you found this project helpful or interesting, feel free to ⭐ star the repo and connect!

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/your-username)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/your-username)

---

> *Built with ❤️ while learning frontend development — one project at a time.*
