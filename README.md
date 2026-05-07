# EduFlow — School Content Management Platform

A modern school content management system built with Next.js where teachers can upload educational content and principals can review, approve, or reject submissions through a role-based workflow system.

---

# ✨ Features

## 🔐 Authentication & Authorization

* Role-based login system
* Teacher & Principal dashboards
* Protected routes
* Session handling using localStorage
* Role validation

---

## 👨‍🏫 Teacher Features

* Upload educational content
* Manage classroom/live session content
* View content status
* Track rejected submissions with reasons
* Paginated content management

---

## 🧑‍💼 Principal Features

* Review submitted content
* Approve content
* Reject content with reason
* Monitor pending submissions
* Dashboard overview

---

## 🎨 UI & UX

* Fully responsive design
* Mobile-friendly sidebar
* Glassmorphism inspired UI
* Smooth transitions & hover effects
* Reusable UI components
* Pagination support
* Loading states
* Empty states

---

# 🛠 Tech Stack

## Frontend

* Next.js App Router
* React
* Tailwind CSS
* Shadcn UI
* Lucide Icons

---

## State Management

* React Hooks
* Context API
* Custom Hooks

---

## Data Handling

* LocalStorage
* Service Layer Architecture
* Mock Async Services

---

# 📁 Project Structure

```txt id="f0b1n7"
src
│
├── app
│   ├── login
│   ├── principal
│   ├── teacher
│   └── live
│
├── components
│   ├── common
│   ├── dashboard
│   ├── forms
│   └── ui
│
├── context
│
├── hooks
│
├── services
│
├── utils
│
├── data
│
└── lib
```

---

# 🧠 Architecture

## Current Architecture

```txt id="d13t6e"
Component
   ↓
Hook
   ↓
Service
   ↓
localStorage
```

---

## Future Ready Architecture

```txt id="98vyl7"
Frontend UI
   ↓
Hooks
   ↓
Services
   ↓
Backend API
   ↓
Database
```

---

# ✅ Why This Architecture?

This project is structured for scalability and future backend integration.

Benefits:

* Clean separation of concerns
* Backend-ready structure
* Easy migration to Express.js backend
* Reusable business logic
* Better maintainability
* Cleaner UI components
* Easier testing

---

# 🔄 Content Workflow

```txt id="wsv0yc"
Teacher Uploads Content
           ↓
Principal Reviews Content
           ↓
Approve / Reject
           ↓
Status Updated
```

---

# 🔐 Authentication Flow

```txt id="e5jv2x"
Login
  ↓
Store User in localStorage
  ↓
Protected Route Validation
  ↓
Dashboard Access
```

---

# 💾 LocalStorage Usage

Currently, the application uses localStorage as a temporary database.

Stored keys include:

```js id="q2o8m1"
CONTENT
USER
LIVE_CLASSES
```

This allows the app to work completely without a backend during development.

---

# ⚙️ Services Layer

All business logic is isolated inside the services layer.

Example:

```txt id="2b58gc"
services/
 ├── auth.service.js
 ├── approval.service.js
 ├── live.service.js
 └── content.service.js
```

Benefits:

* Cleaner components
* Easier backend integration
* Better code organization
* Reusable logic

---

# 📄 Pagination System

Pagination is managed at dashboard level for better scalability.

Benefits:

* Cleaner tables
* Better performance
* Centralized state management
* Easier filtering

---

# 📱 Responsive Design

The platform is fully responsive and optimized for:

* Mobile devices
* Tablets
* Desktop screens

Features include:

* Mobile sidebar drawer
* Overlay navigation
* Adaptive spacing
* Responsive grids

---

# 🚀 Future Improvements

## Backend

* Express.js API
* MongoDB / PostgreSQL
* JWT Authentication
* NextAuth integration
* Cloudinary uploads

---

## Features

* Real-time notifications
* Live classroom integration
* Search & filtering
* Analytics dashboard
* Student management
* Attendance tracking
* Email notifications

---

# 🌐 Deployment

Frontend deployment:

* [Vercel](https://vercel.com?utm_source=chatgpt.com)

---

# ⚡ Installation

## Clone Repository

```bash id="zlv6p5"
git clone <repository-url>
```

---

## Install Dependencies

```bash id="75n9h9"
npm install
```

---

## Run Development Server

```bash id="k8u7n4"
npm run dev
```

---

# 🎯 Design Philosophy

EduFlow focuses on:

* Clean architecture
* Modern UI/UX
* Backend scalability
* Reusable components
* Production-ready structure
* Maintainable codebase

---

# 📌 Summary

EduFlow is a scalable school workflow management platform designed using modern frontend architecture principles.

The application currently works completely without a backend using localStorage and mock async services, while still maintaining a backend-ready architecture for future scalability.
