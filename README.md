# 👥 KeenKeeper — Friendship Management Web App

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-App_Router-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?logo=daisyui&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-22B5BF)

## 📌 Introduction

KeenKeeper is a modern web application designed to help users maintain meaningful relationships by tracking interactions such as calls, text messages, and video chats.

It focuses on reducing communication gaps through structured tracking, reminders, and insightful analytics, ensuring users stay connected with the people who matter most.
<br>


[Visit my website](https://keen-keeper-sigma-wine.vercel.app/)
---

## 📚 Table of Contents

- [Introduction](#-introduction)
- [Core Features](#-core-features)
- [Technologies Used](#️-technologies-used)
- [Installation](#️-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure-simplified)
- [Configuration](#️-configuration)
- [Examples](#-examples)
- [Troubleshooting](#️-troubleshooting)
- [Possible Enhancements](#-possible-enhancements)
- [Contributors](#-contributors)
- [License](#-license)

---

## ✨ Core Features

### 👥 Friend Management
- Displays friends in a clean card layout
- Each card includes:
  - Profile image
  - Name
  - Days since last interaction
  - Tags/categories
  - Status indicator (e.g., **Overdue**, **On Track**)

### 📞 Interaction System
- Quick action buttons:
  - 📱 Call
  - 💬 Text
  - 🎥 Video
- Automatically logs interactions
- Instant feedback via toast notifications

### 📜 Timeline Tracking
- Maintains a full history of interactions
- Displays:
  - Date
  - Interaction type
  - Short description
- Filter interactions by type

### 📊 Analytics Dashboard
- Visualizes communication patterns
- Tracks:
  - Calls
  - Text messages
  - Video chats

### 📄 Detailed Friend Profile
- Individual profile view per friend
- Includes:
  - Basic info
  - Tags
  - Interaction stats
- Additional controls:
  - ⏸ Snooze reminders
  - 🗃 Archive profile
  - 🗑 Delete entry

### 📱 Responsive Design
- Fully optimized for:
  - Mobile
  - Tablet
  - Desktop

### ⚡ Additional Functionalities
- Loading states for better UX
- Custom 404 page
- Toast notifications
- Smooth routing & navigation

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Next.js** (App Router) | Framework |
| **Tailwind CSS** + **DaisyUI** | Styling & UI Components |
| **React Hot Toast** | Notifications |
| **Recharts** | Data Visualization |
| **JSON** | Local data handling |

---

## ⚙️ Installation

```bash
git clone <repository-url>
cd project-folder
npm install
npm run dev
```

---

## 🚀 Usage

Open your browser and go to:

```
http://localhost:3000
```

1. View your friend list on the home dashboard
2. Log interactions using quick action buttons (Call, Text, Video)
3. Monitor activity via the analytics dashboard
4. Explore detailed profiles for deeper insights

---

## 📂 Project Structure (Simplified)

```
app/
components/
context/
public/
  └── data/        ← JSON data source
```

---

## ⚙️ Configuration

Currently, the app uses local JSON data for storing friend and interaction data.

To modify:

1. Navigate to the `public/data/` directory
2. Update or replace JSON files as needed

---

## 📊 Examples

### Example Interaction Flow

1. User clicks **Call** on a friend card
2. Interaction is logged instantly
3. Toast notification confirms the action
4. Timeline updates automatically
5. Analytics dashboard reflects the new data

---

## 🛠️ Troubleshooting

### Common Issues

**1. Dependencies not installing**
```bash
rm -rf node_modules package-lock.json
npm install
```

**2. App not running**
- Ensure Node.js version **≥ 18**
- Check for port conflicts on `3000`

**3. UI not updating**
- Restart the development server
- Clear browser cache

---

## 🚀 Possible Enhancements

- 🔍 Search functionality
- 🎯 Advanced filtering & sorting
- ⏰ Smart reminder system
- 🗄️ Backend & database integration
- 🔐 Authentication system

---

## 👥 Contributors

- Your Name Here

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
