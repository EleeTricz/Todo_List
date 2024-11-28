


# Todo List API - Back End

Welcome to the back end of the Todo List application, built using **Node.js**, **Express**, and **MySQL**. This API manages the creation, editing, deletion, and status updates of tasks.  

The front-end integration is currently **in progress** and will be added in future updates.

---

## 📚 Project Overview

### Features
- **Add Tasks:** Create new tasks via API.
- **Edit Tasks:** Update task descriptions.
- **Delete Tasks:** Remove tasks from the database.
- **Mark Complete:** Toggle task completion status.
- **Persistent Storage:** Tasks are stored securely in a MySQL database.

---

## ⚙️ Setup and Installation

### Prerequisites
- **Node.js** installed on your system.
- **MySQL** installed and running locally or remotely.

### Installation Steps

1. **Clone the Repository**  
   ```bash
   git clone <repository-url>
   cd <repository-folder>/backend
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**  
   Create a `.env` file in the `backend` folder with the following content:
   ```env
   PORT=3306
   MYSQL_HOST=your_database_host
   MYSQL_USER=your_database_username
   MYSQL_PASSWORD=your_database_password
   MYSQL_NAME=your_database_name
   ```
   Replace `your_database_host`, `your_database_username`, `your_database_password`, and `your_database_name` with your MySQL credentials.

4. **Create the Database**  
   Use the provided SQL script in the `backend/sql` folder (if available) to create the required database schema.

5. **Run the Server**  
   Start the server with:
   ```bash
   npm start
   ```
   The API will be running on `http://localhost:3306`.

---

## 📂 API Structure

- **Base URL:** `http://localhost:3306`

| HTTP Method | Endpoint       | Description              |
|-------------|----------------|--------------------------|
| `GET`       | `/tasks`       | Fetch all tasks          |
| `POST`      | `/tasks`       | Create a new task        |
| `PUT`       | `/tasks/:id`   | Update a specific task   |
| `DELETE`    | `/tasks/:id`   | Delete a specific task   |

---

## 🛠 Environment Variables

Make sure the following variables are configured in your `.env` file:

- `PORT`: Port for the server (default: 3306).
- `MYSQL_HOST`: Host of the MySQL database (default: `localhost`).
- `MYSQL_USER`: MySQL database username.
- `MYSQL_PASSWORD`: MySQL database password.
- `MYSQL_NAME`: Name of the MySQL database.

---

## 🚀 Current Status & Future Plans

- **Current Status:**  
  The back-end API is fully operational. You can manage tasks with the provided endpoints.

- **Next Steps:**  
  - Development of the front end using React.
  - Integration of the front end with the API.
  - Addition of advanced features like user authentication, deadlines, and reminders.

---

## 💡 Contributing

Feel free to open issues or submit pull requests for improvements or new features. All contributions are welcome!  
```  
