# 📝 Notes App

A modern, feature-rich notes application built with **React**, **Redux Toolkit**, and **TailwindCSS**. This app supports CRUD operations, pinning, archiving, trash management, tag filtering, search, and persistent state via `localStorage`.

---

##  Features

- **Create & Edit Notes**  
  Add rich notes with title, description, and tags. Edit anytime via modal or dedicated edit page.

- **Pin, Archive, Trash Logic**  
  Toggle notes between active, pinned, archived, and trashed states. Each view is mutually exclusive.

- **Tag Filtering**  
  Filter notes by selected tags with dynamic UI feedback.

- **Search Functionality**  
  Real-time search across titles and descriptions.

- **Persistent State**  
  Notes are saved in `localStorage` and restored on reload.

- **Responsive Design**  
  Fully responsive layout using TailwindCSS with modern UI touches like shadows, hover effects, and transitions.

---

## 🧱 Tech Stack

| Layer        | Technology            |
|--------------|------------------------|
| Frontend     | React, React Router    |
| State Mgmt   | Redux Toolkit          |
| Styling      | TailwindCSS            |
| Persistence  | localStorage           |


---

## 🛠️ Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/notes-app.git
   cd notes-app

2. **Install dependencies**
    npm install

3. **Start Server**
    npm run dev