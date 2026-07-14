# 🎓 Learning Portal

A full-stack **Learning Portal Web Application** built using **React.js, Vite, Tailwind CSS, Node.js, Express.js, MongoDB, and JWT Authentication**. The portal allows students to securely access learning videos, create multiple bookmarks, resume playback from saved timestamps, track watch progress, continue watching previously viewed videos, and manage their learning experience through an intuitive interface.


# 🚀 Features

## 👤 User Authentication

- Student Registration
- Secure Login using JWT Authentication
- Password Encryption using bcrypt
- Protected Routes
- Session Persistence using Local Storage


## 🎥 Learning Portal

- Browse available learning courses
- Search videos instantly
- Watch educational videos
- Professional video player
- Dynamic video information display


## 📌 Bookmark Management

- Create multiple bookmarks for a single video
- Save bookmark title
- Automatically save timestamp
- Resume playback from bookmarked timestamp
- Edit bookmark title
- Delete bookmarks
- View all saved bookmarks


## ▶️ Continue Watching

- Automatically saves watch progress
- Resume video from the last watched position
- Progress stored using Local Storage


## 📺 Recently Watched Videos

- Displays recently watched videos
- Stores last 5 watched videos
- Quick access from dashboard
- Resume watching anytime


## 📊 Watch Progress

- Live watch progress indicator
- Current playback time
- Video duration
- Progress percentage
- Dynamic progress bar


## 🛡️ Screenshot Protection

Best possible browser-based content protection:

- Dynamic watermark
- Disable right-click
- Disable copy
- Disable cut
- Disable paste
- Disable drag
- Blur video when browser tab is inactive

> **Note:** Complete screenshot prevention is not possible in web browsers because screenshots are controlled by the operating system.


# 🛠️ Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | React.js |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| HTTP Client | Axios |
| Backend | Node.js |
| Framework | Express.js |
| Database | MongoDB |
| Authentication | JWT + bcrypt |
| Video Player | React Player |


# 📁 Project Structure

```text
learning-portal/
│
├── client/
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── seedVideos.js
│   ├── server.js
│   └── package.json
│
├── screenshots/
│
├── .env.example
├── .gitignore
└── README.md
```



# ⚙️ Setup Instructions

## 🔹 1. Clone the Repository

```bash
git clone https://github.com/Rachana-Hegde/learning-portal.git

cd learning-portal
```



## 🔹 2. Install Backend Dependencies

```bash
cd server

npm install
```



## 🔹 3. Install Frontend Dependencies

```bash
cd ../client

npm install
```


## 🔹 4. Configure Environment Variables

Create a **.env** file inside the **server** folder.

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY
```



## 🔹 5. Seed Sample Videos

```bash
cd server

node seedVideos.js
```



## 🔹 6. Start Backend

```bash
npm run dev
```


## 🔹 7. Start Frontend

```bash
cd ../client

npm run dev
```


# ▶️ Open in Browser

Frontend

```
http://localhost:5173
```

Backend

```
http://localhost:5000
```


# 📱 Application Flow

- Student Registration
- Student Login
- Browse Available Courses
- Search Learning Videos
- Watch Course Videos
- Create Multiple Bookmarks
- Resume Playback from Bookmarks
- Edit/Delete Bookmarks
- Continue Watching
- View Recently Watched Videos
- Track Watch Progress


# 🔐 Features

- JWT Authentication
- Protected Routes
- Search Videos
- Multiple Bookmarks
- Bookmark Editing
- Bookmark Deletion
- Resume Playback
- Continue Watching
- Recently Watched Videos
- Watch Progress Tracking
- Dynamic Watermark
- Screenshot Deterrence
- Persistent Bookmark Storage
- Responsive Desktop Interface


# 🗄️ Database Collections

### Users

- Name
- Email
- Password

### Videos

- Title
- Description
- Thumbnail
- Video URL
- Duration

### Bookmarks

- User ID
- Video ID
- Bookmark Name
- Timestamp


# 📌 Future Enhancements

- Admin Panel
- Upload Custom Videos
- Video Categories
- Course Progress Dashboard
- Bookmark Notes
- Video Playback Speed
- Certificates
- Student Profile
- Email Verification
- Dark Mode
- Mobile Application



# 📌 Conclusion

This project demonstrates:

- Full Stack MERN Development
- REST API Development
- JWT Authentication
- MongoDB Database Design
- React Component Architecture
- Video Streaming Integration
- Bookmark Management System
- Learning Management Features
- Local Storage Persistence
- Browser-Based Content Protection
- Clean UI using Tailwind CSS


# 👩‍💻 Author

**Rachana Hegde**

🔗 GitHub

https://github.com/Rachana-Hegde


# 🌐 Live App

https://learning-portal-react-node.vercel.app
