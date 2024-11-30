---

# Todo List Application - Full Stack (Back-End + Front-End)

Welcome to the full-stack **Todo List Application**, built with **Node.js**, **Express**, **MySQL** (Back-End), and **React** (Front-End). This application allows users to manage tasks, including adding, editing, deleting, and updating their status.

---

## 📚 Project Overview

### Features
- **Add Tasks:** Create new tasks via the front-end or API.
- **Edit Tasks:** Update task descriptions and statuses.
- **Delete Tasks:** Remove tasks from the database.
- **Task Status Management:** Mark tasks as "pending", "in progress", or "completed".
- **Persistent Storage:** Tasks are stored in a MySQL database.
- **Frontend Integration:** Built with React, displaying tasks dynamically and providing a user-friendly interface.

---

## ⚙️ Setup and Installation

### Prerequisites
- **Node.js** installed on your system.
- **MySQL** installed and running locally or remotely.

### Installation Steps

#### 1. Clone the Repository  
```bash
git clone <repository-url>
cd <repository-folder>
```

#### 2. Set Up the Back-End
1. Go to the backend directory:
   ```bash
   cd backend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in the `backend/.env` file:
   ```env
   PORT=3306
   MYSQL_HOST=your_database_host
   MYSQL_USER=your_database_username
   MYSQL_PASSWORD=your_database_password
   MYSQL_NAME=your_database_name
   ```
   Replace `your_database_host`, `your_database_username`, `your_database_password`, and `your_database_name` with your MySQL credentials.

4. Create the database schema (if not already created). Use the provided SQL script from the `backend/sql` folder.

5. Run the back-end server:
   ```bash
   npm start
   ```
   The back-end API will be running on `http://localhost:3306`.

#### 3. Set Up the Front-End
1. Go to the front-end directory:
   ```bash
   cd frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the front-end development server:
   ```bash
   npm start
   ```
   The front-end application will be running on `http://localhost:3000`.

---

## 📂 API Structure

- **Base URL:** `http://localhost:3306`

| HTTP Method | Endpoint       | Description                  |
|-------------|----------------|------------------------------|
| `GET`       | `/tasks`       | Fetch all tasks              |
| `POST`      | `/tasks`       | Create a new task            |
| `PUT`       | `/tasks/:id`   | Update a specific task       |
| `DELETE`    | `/tasks/:id`   | Delete a specific task       |

---

## 🛠 Front-End Structure

- **Base URL for API:** `http://localhost:3306`
- The front-end is built with **React**, and the main file is `src/pages/Home/index.jsx`, where tasks are displayed and managed.

---

## 🛠 Environment Variables

Make sure the following variables are configured in your `.env` files:

### Back-End `.env`
- `PORT`: Port for the server (default: `3306`).
- `MYSQL_HOST`: Host of the MySQL database (default: `localhost`).
- `MYSQL_USER`: MySQL database username.
- `MYSQL_PASSWORD`: MySQL database password.
- `MYSQL_NAME`: MySQL database name.

### Front-End `.env` (optional, if you want to set up API URL separately)
- `REACT_APP_API_URL`: URL for your back-end API (default: `http://localhost:3306`).

---

## 🚀 Current Status & Future Plans

### Current Status:
- **Back-End**: Fully operational with endpoints for managing tasks.
- **Front-End**: React application that allows interaction with the back-end, displaying tasks, and providing functionalities to add, edit, and delete tasks.

### Next Steps:
- **Back-End**: 
  - Implement authentication (login/signup).
  - Add task priority, deadlines, and reminders.
- **Front-End**: 
  - Improve UI/UX with advanced components and styling.
  - Implement more user interactions (like sorting tasks).
  - User authentication (if required in the future).

---

## 💡 Contributing

Feel free to open issues or submit pull requests for improvements or new features. All contributions are welcome!

---

