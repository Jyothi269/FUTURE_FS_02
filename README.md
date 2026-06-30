# Mini CRM - Lead Management System

## Overview

Mini CRM is a web-based Customer Relationship Management (CRM) application built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js).

The application enables users to efficiently manage customer leads by providing features such as adding, viewing, editing, deleting, and searching leads through a clean and user-friendly dashboard.

This project was developed as part of the Future Interns Full Stack Development Internship.

---

## Features

- Secure Login
- Dashboard
- Add New Leads
- View All Leads
- Edit Lead Details
- Delete Leads
- Search Leads
- Responsive Bootstrap UI
- MongoDB Database Integration
- REST API using Express.js

---

## Technologies Used

### Frontend
- React.js
- Bootstrap
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB

---

## Folder Structure

```
FUTURE_FS_02
│
├── backend
│   ├── models
│   ├── routes
│   ├── server.js
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Jyothi269/FUTURE_FS_02.git
```

### Backend

```bash
cd backend
npm install
node server.js
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/leads | Get All Leads |
| POST | /api/leads | Add Lead |
| PUT | /api/leads/:id | Update Lead |
| DELETE | /api/leads/:id | Delete Lead |

---

## Future Enhancements

- JWT Authentication
- User Roles
- Charts & Analytics
- Follow-up Reminders
- Export Leads to Excel
- Cloud Deployment

---

## Author

Jyothi

GitHub:
https://github.com/Jyothi269
