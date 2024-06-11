# Post-Comments Service

The Post-Comments Service is a full-stack web application designed to facilitate the creation and interaction of posts and comments. Built using MongoDB, Express.js, React.js, and Node.js (MERN stack), this application allows users to create text-based posts on various topics of interest. Each post can have multiple comments, enabling users to engage in discussions and share their thoughts. The backend server handles data storage using MongoDB with Mongoose as the ODM, providing efficient management of posts and comments through RESTful APIs. On the frontend, React.js ensures a dynamic and responsive user interface, where users can seamlessly create posts and add comments in real-time without needing to refresh the page. The project emphasizes a clean MVC architecture, separating data models, server routes, and UI components for clarity and scalability. Overall, the Post-Comments Service aims to provide a user-friendly platform for sharing ideas and fostering community interaction through intuitive web functionalities.

# Project Structure

post-comments-service/
├── client/ # Frontend React application
│ ├── public/
│ └── src/
│ ├── components/ # React components
│ ├── pages/ # React pages
│ ├── App.js # Main React component
│ └── ... # Other frontend files
├── models/ # Mongoose models (Post and Comment)
│ ├── Comment.js
│ └── Post.js
├── routes/ # Express.js API routes
│ ├── comments.js
│ └── posts.js
├── .env # Environment variables (MongoDB URI, PORT)
├── server.js # Node.js server setup
└── README.md # Project documentation

# Getting Started

To get a local copy of this project up and running on your machine, follow these steps:

## Prerequisites

Make sure you have the following installed on your system:

- Node.js (v14.0.0 or later)
- MongoDB (Make sure MongoDB server is running locally or accessible)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Harshu34/Post-Comment-Service.git
   ```

2. **Naviage to the Project Repository:**

   ```bash
   cd Post-Comment-Service
   ```

3. **Navigate to client directory:**

   ```bash
   cd frontend
   ```

4. **Install client dependencies:**

   ```bash
   npm install
   ```

5. **Navigate to server directory:**

   ```bash
   cd backend
   ```

6. **Install server dependencies:**
   ```bash
   npm install
   ```

### Configuration

Create a `.env` file in the root of the project and add the following environment variables:

```bash
MONGO_URI=Your environment variable for the MongoDB server.
PORT=5000
```

For Sample use:

```bash
MONGO_URI = mongodb+srv://harsh:harsh@cluster0.8b310z0.mongodb.net/?retryWrites=true&w=majority
PORT=5000
```

## Disclaimer: Do not misbehave for the above URI, this will be given only for the sake of simplicity for the project.

# Running the Application

**Navigate to server directory:**

```bash
cd backend
```

**Start the server:**

```bash
npm start
```

**Navigate to client directory:**

```bash
cd frontend
```

**Start the client:**

```bash
npm start
```

# Accessing the Application

```bash
http://localhost:3000
```

# Contributions and Features for the Application Project.

Contributions are welcome! Fork the repository, make your changes, and submit a pull request for review.
