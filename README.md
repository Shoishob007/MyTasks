# Trade Data API

## Backend Overview
This project is a RESTful API for managing trade data. It uses an in-memory SQLite database to store trade records, including trade code, date, close price, and volume.

## Technologies Used
- Backend: Node.js, Express
- Database: SQLite
- Middleware: body-parser, cors

  
## Frontend Overview
The frontend of this application is built using React and JavaScript. It provides an intuitive user interface for managing data, integrating with the backend API to perform CRUD (Create, Read, Update, Delete) operations on data.

## Technology Stack
- **React**: A JavaScript library for building user interfaces.
- **JavaScript**: A lightweight, interpreted, or just-in-time compiled programming language with first-class functions. Primarily used to create and control dynamic website content.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Vite**: A fast development build tool.


## Setup Instructions

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Shoishob007/task101.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd task101
    ```

3. **Checkout to the desired branch (optional):**
    ```bash
    git checkout sqlModel or,
    git checkout jsonModel
    ```

4. **Setup Backend:**
    1. Navigate to the backend directory:
        ```bash
        cd backend
        ```
    2. Install backend dependencies:
        ```bash
        npm install
        ```

5. **Setup Frontend:**
    1. Navigate to the frontend directory:
        ```bash
        cd ../frontend
        ```
    2. Install frontend dependencies:
        ```bash
        npm install
        ```

6. **Run the Application:**

    **Backend:**
    1. Navigate to the backend directory:
        ```bash
        cd ../backend
        ```
    2. Start the backend server:
        ```bash
        npm run dev
        ```

    **Frontend:**
    1. Open a new terminal and navigate to the frontend directory:
        ```bash
        cd frontend
        ```
    2. Start the frontend development server:
        ```bash
        npm run dev
        ```

The backend server should now be running, typically on `http://localhost:3000`, and your frontend development server should be running on `http://localhost:5173/`.

## Branch Information
- **master**: Contains the main application code.
- **sqlModel**: Contains the application code with SQL database models.
- **jsonModel**: Contains the application code with JSON-based models.

Choose the appropriate branch based on your database preference and follow the setup instructions accordingly.

## Deployment

The application is deployed on [Netlify]. You can access it [here](URL).

## Learnings and Challenges

### What I Learned

1. **Express Framework**: Gained a deeper understanding of setting up and configuring an Express server.
2. **Routing and CRUD Operations**: Implemented RESTful API endpoints for CRUD operations.
3. **SQLite Integration**: Set up and interacted with an in-memory SQLite database.
4. **Error Handling**: Implemented middleware for robust error handling.
5. **Middleware Utilization**: Understood the role and correct usage of middleware in an Express application.

### Challenges Faced

1. **Database Setup**: Faced challenges with setting up and populating the SQLite database.
2. **Asynchronous Programming**: Managed asynchronous operations and error handling.
3. **Middleware Integration**: Integrated and configured middleware correctly to handle errors.
4. **Scalability Considerations**: Considered the challenges of scaling the application for production.
5. **Debugging**: Debugged issues related to database queries and server responses.
