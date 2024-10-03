# MERN Workouts Application

## Description:

This project is a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). The app allows users to create, manage, and track their workout routines. It supports user authentication, strong passwords and secure token storage.

## Features
- **User Authentication**: Password hashing with **bcrypt**
- **Custom Hooks**: For managing reusable logic in components
- **State Management**: Implemented using the **Context API**

## Technologies Used
- **MongoDB**: Database for storing user and exercise data
- **Express.js**: Backend framework for creating the REST API
- **React.js**: Frontend framework for building user interfaces
- **Node.js**: Server-side environment
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB

**Getting Started**

**Prerequisites:**

Make sure you have the following installed:  
Node.js (v14 or higher)  
MongoDB (local instance or MongoDB Atlas)

**Installation:**

Clone the repository:

```bash
git clone https://github.com/your-username/mern-workout-app.git
cd mern-workout-app
```


Install dependencies:
```bash
npm install
```

Create a .env file in the root directory with the following variables:

```bash
PORT=5000
MONG_URI=mongodb+srv://<username>:<password>@<cluster-url>/test?retryWrites=true&w=majority
SECRET=<your_secret_key>
```

Replace `<username>`, `<password>`, and `<cluster-url>` with your MongoDB credentials and cluster information.  
Set your custom secret key for JWT token signing.

Start the backend server:

```bash
npm run start
```
In a separate terminal, navigate to the frontend folder and start the React app:

```bash
npm start
```

**Proxy Configuration**
The React app is configured to use a proxy for API calls during development:

```bash
"proxy": "http://localhost:5000"
```

This configuration is set in the package.json file to simplify communication between the frontend and backend during development.

**License**

This project is a personal learning app, and no formal license is included.

