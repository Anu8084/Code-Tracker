# Code Tracker 🧠📊

**Code Tracker** is a MERN (MongoDB, Express, React, Node.js) based web application designed to help users track and manage their code-related tasks, progress, or activity in an intuitive interface.

---

## 🔧 Tech Stack

- **Frontend**: React.js, Axios, CSS/Bootstrap (or your preferred UI framework)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT-based (or any other used)
- **Others**: dotenv, cors, concurrently (optional)

---

## 📁 Folder Structure

Code-Tracker/
│
├── client/ # React frontend
│ ├── src/
│ ├── public/
│ └── package.json
│
├── server/ # Express backend
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ └── server.js
│
├── .gitignore
└── README.md

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Anu8084/Code-Tracker.git
cd Code-Tracker
2. Install Backend Dependencies
bash
Copy
Edit
cd server
npm install
Create a .env file in /server with your environment variables:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
3. Install Frontend Dependencies
bash
Copy
Edit
cd ../client
npm install
🧪 Run the App
Backend (on port 5000):
bash
Copy
Edit
cd server
npm start
Frontend (on port 3000):
bash
Copy
Edit
cd client
npm start
