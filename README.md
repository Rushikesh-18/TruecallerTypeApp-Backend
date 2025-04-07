# 📱 Phone Number Spam Detection API

A RESTful API built with **Express.js**, **Sequelize**, and **MySQL** for detecting spam phone numbers. Includes user authentication, contact syncing, and spam marking functionalities.


---

## 🚀 Features

- User Registration and Login
- Contact Syncing
- Spam Detection and Reporting
- Search Contacts by Name or Number
- Sequelize ORM for DB interaction
- MySQL as the relational database

---

## 📦 Tech Stack

- **Backend:** Node.js (v20+), Express.js
- **ORM:** Sequelize
- **Database:** MySQL
- **Authentication:** JWT
- **Environment Management:** dotenv


---

## ⚙️ Setup Instructions

### 1️⃣ Prerequisites

Make sure you have the following installed:

- [Node.js (v20+)](https://nodejs.org/)
- npm (comes with Node.js)
- MySQL (ensure a running MySQL instance and proper credentials)

---


---

### 3️⃣ Install Dependencies

```bash
npm install
```

---

### 4️⃣ Configure Environment Variables

Setup a `/src/config/config.json` file  and add the following changeswith your db credentials: 

```config.json
{
"development": {
    "username": "root",
    "password": "root",
    "database": "spam_contacts_db",
    "host": "localhost",
    "dialect": "mysql"
  },
}
```

---

### 5️⃣ Initialize the Database

```bash
cd src
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all  
```

---

### 6️⃣ Start the Server

```bash
npm run start
```

---

## 📁 Project Structure

```
├── src/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── models/
│   ├── migrations/
│   ├── seeders/
│   ├── routes/
│   └── config/
├── .env
├── package.json
└── README.md
```



OR 

### You can check this 
- http://localhost:3000/api/v1/register/user (POST)
- http://localhost:3000/api/v1/login/user (POST)
- http://localhost:3000/api/v1/system/markspam (POST) (Requires token generated after login)
- http://localhost:3000/api/v1/system/name?query=R (GET) (Requires token generated after login)
- http://localhost:3000/api/v1/system/phno?query=3533824042 (GET) (Requires token generated after login)



---


