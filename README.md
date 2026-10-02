# 🦷 BrightSmile — MERN Stack Dental Hospital Website

A full-stack dental hospital web application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). Features a modern React single-page application frontend, a secure Express backend with JWT-based user authentication, and full-stack appointment booking with MongoDB persistence.

---

## Tech Stack

| Layer       | Technology                              |
|-------------|----------------------------------------|
| **Frontend** | React 19, Vite, React Router DOM, Axios |
| **Backend**  | Node.js, Express.js                     |
| **Database** | MongoDB Atlas with Mongoose ODM         |
| **Auth**     | JWT (JSON Web Tokens), bcrypt           |

---

## Project Structure

```
MERNSTACK-Project/
├── client/                          # React Frontend (Vite)
│   ├── src/
│   │   ├── assets/                  # Images (dental service photos)
│   │   ├── components/
│   │   │   ├── Navbar.jsx           # Shared navbar (auth-aware)
│   │   │   └── Footer.jsx           # Shared footer
│   │   ├── context/
│   │   │   └── AuthContext.jsx      # Auth state (JWT, login/signup/logout)
│   │   ├── pages/
│   │   │   ├── HomePage.jsx         # Landing page with hero, cards, testimonials
│   │   │   ├── LoginPage.jsx        # Login + Signup (toggle)
│   │   │   ├── AboutPage.jsx        # About us, doctors, awards
│   │   │   ├── ServicesPage.jsx     # Dental services gallery
│   │   │   ├── ContactPage.jsx      # Contact info + message form
│   │   │   ├── CareersPage.jsx      # Job listings
│   │   │   ├── FAQsPage.jsx         # Frequently asked questions
│   │   │   ├── AppointmentPage.jsx  # Patient booking form (full-stack)
│   │   │   ├── PrivacyPolicyPage.jsx
│   │   │   └── TermsPage.jsx
│   │   ├── index.css                # CSS design system
│   │   ├── App.jsx                  # Router + Layout
│   │   └── main.jsx                 # Entry point
│   └── package.json
│
├── server/                          # Express Backend (Node.js)
│   ├── models/
│   │   ├── User.js                  # Mongoose user schema + bcrypt hashing
│   │   └── Appointment.js           # Mongoose appointment schema (linked to User)
│   ├── middleware/
│   │   └── auth.js                  # JWT verification middleware
│   ├── routes/
│   │   ├── auth.js                  # Auth endpoints (signup, login, me)
│   │   └── appointments.js          # Appointment endpoints (create, retrieve)
│   ├── index.js                     # Express server entry
│   ├── .env                         # Environment variables (not committed)
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** (v18+)
- **MongoDB** (local or [Atlas cloud](https://www.mongodb.com/atlas))
- **npm**

### 1. Clone the Repository

```bash
git clone https://github.com/lingeshivakumar/MERNSTACK-Project.git
cd MERNSTACK-Project
```

### 2. Set Up the Backend

```bash
cd server
npm install
```

Create a `.env` file in `/server`:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/brightsmile?retryWrites=true&w=majority
JWT_SECRET=your_secret_key_here
```

> Replace `<username>`, `<password>`, and `<cluster>` with your MongoDB Atlas credentials.

Start the server:

```bash
npm run dev
```

The API will run at **http://localhost:5000**

### 3. Set Up the Frontend

```bash
cd client
npm install
npm run dev
```

The app will run at **http://localhost:5173**

---

## Authentication

The app uses **JWT-based authentication** with the following flow:

1. **Sign Up** → Password hashed with bcrypt (12 salt rounds) → Stored in MongoDB → JWT returned
2. **Login** → Credentials validated → JWT returned
3. **Authenticated Requests** → JWT sent via `Authorization: Bearer <token>` header
4. **Persistence** → Token stored in `localStorage`, user auto-fetched on page load

---

## Appointment Booking

Authenticated users can book dental appointments through a full-stack flow:

1. **Patient fills form** → Name, age, contact, preferred date, service, doctor, etc.
2. **Frontend sends** → `POST /api/appointments` with JWT in Authorization header
3. **Backend validates** → JWT verified, user ID derived from token (not from frontend)
4. **MongoDB persists** → Appointment document created with reference to authenticated user
5. **Patient can retrieve** → `GET /api/appointments/my` returns only their own appointments

Each appointment is linked to the authenticated user via an ObjectId reference:

```
User (1) ──────< Appointment (many)
```

---

## API Endpoints

### Auth

| Method | Endpoint           | Auth | Description                            |
|--------|--------------------|------|----------------------------------------|
| `POST` | `/api/auth/signup`  | ✗    | Create account (name, email, password) |
| `POST` | `/api/auth/login`   | ✗    | Login → returns JWT                    |
| `GET`  | `/api/auth/me`      | ✓    | Get current user profile               |

### Appointments

| Method | Endpoint                | Auth | Description                          |
|--------|-------------------------|------|--------------------------------------|
| `POST` | `/api/appointments`      | ✓    | Create a new appointment             |
| `GET`  | `/api/appointments/my`   | ✓    | Get current user's appointments      |

### General

| Method | Endpoint       | Auth | Description    |
|--------|----------------|------|----------------|
| `GET`  | `/api/health`   | ✗    | Health check   |

---

## Pages

| Route              | Page                    | Description                          |
|--------------------|-------------------------|--------------------------------------|
| `/`                | Home                    | Hero banner, feature cards, testimonials |
| `/login`           | Login / Sign Up         | Auth forms with toggle               |
| `/about`           | About Us                | Hospital info, doctor profiles, awards |
| `/services`        | Services                | Dental services with images          |
| `/contact`         | Contact Us              | Contact details + message form       |
| `/careers`         | Careers                 | Job listings with apply buttons      |
| `/faqs`            | FAQs                    | Common questions & answers           |
| `/book-appointment`| Book an Appointment     | Patient application form (saved to DB) |
| `/privacy-policy`  | Privacy Policy          | Privacy information                  |
| `/terms`           | Terms & Conditions      | Terms of service                     |

---

## Features

- **Single Page Application** — React Router for instant navigation
- **Secure Authentication** — bcrypt password hashing + JWT tokens
- **Full-Stack Appointment Booking** — React form → Express API → MongoDB Atlas
- **User-Appointment Relationship** — Appointments linked to authenticated users via JWT
- **Responsive Design** — Mobile-friendly with hamburger menu
- **Custom CSS Design System** — CSS custom properties, transitions, and hover animations
- **Auth-Aware Navbar** — Shows user avatar when logged in, login link when not
- **Auth-Gated Forms** — Appointment form disabled with login prompt for unauthenticated users
- **Error Handling** — Client-side validation + backend Mongoose validation + user-friendly error messages
- **10 Fully Converted Pages** — All original HTML pages ported to React components

---

## Database Collections

| Collection     | Description                                      |
|---------------|--------------------------------------------------|
| `users`        | Registered users (name, email, hashed password)  |
| `appointments` | Patient appointments (linked to user via ObjectId) |

---
