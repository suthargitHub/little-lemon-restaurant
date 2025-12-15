# 🍽️ Little Lemon – Restaurant Table Booking Website

## 📌 Project Description

Little Lemon is a full-stack restaurant website designed to provide users with an interactive and visually appealing dining experience along with an online table reservation feature. The frontend is built using HTML, CSS, and JavaScript, offering sections such as menu display, special dishes, chef highlights, testimonials, and events.

The backend is implemented using **Node.js, Express.js, and MongoDB**, enabling users to book tables online. Reservation details such as customer name, phone number, number of persons, reservation date, time, and special message are securely stored in a MongoDB database through RESTful APIs.

This project demonstrates the integration of a static frontend with a dynamic backend, showcasing full-stack development skills including REST API creation, database design, and client–server communication.

---

## 🚀 Features

* Responsive and modern restaurant UI
* Interactive hero slider and animations
* Detailed food menu and special dish section
* Online table reservation form
* REST API for handling reservations
* MongoDB database integration
* CORS-enabled backend for frontend communication

---

## 🛠️ Tech Stack

**Frontend:**

* HTML5
* CSS3
* JavaScript (Vanilla JS)

**Backend:**

* Node.js
* Express.js

**Database:**
MongoDB (Mongoose ODM)

---

## 📂 Project Structure

```
Little-Lemon-Restaurant/
│
├── index.html
├── rnd.js
├── server.js
├── style-guide.md
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── dishimg/
└── README.md
```

---

## ⚙️ How It Works

1. User fills out the **Online Reservation Form** on the website.
2. Frontend JavaScript captures form data and sends it to the backend using `fetch()`.
3. Express server exposes a `POST /reserve` API endpoint.
4. Reservation details are validated and stored in MongoDB.
5. User receives confirmation once the reservation is saved.

---

## ▶️ How to Run the Project

### Prerequisites

* Node.js installed
* MongoDB running locally

### Steps

```bash
# Clone the repository
git clone https://github.com/your-username/little-lemon-restaurant.git

# Navigate to project folder
cd little-lemon-restaurant

# Install dependencies
npm install

# Start MongoDB
mongod

# Run server
node server.js
```

Open `index.html` in your browser to access the website.

---

## 👨‍💻 Author
Dheeraj kumar

