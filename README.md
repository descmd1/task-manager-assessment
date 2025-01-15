# task-manager-assessment
# Task Management App

## Overview

This is a task management application that allows users to manage their tasks by adding, editing, deleting, and marking them as completed or ongoing. The application provides features like drag-and-drop functionality for organizing tasks, a search bar for filtering tasks by title, and a dropdown menu to filter tasks by category (Work, Personal, Urgent, or All). The app also integrates a mock JSON server as a backend to store and manage task data.

## Features

- **Task Management**: Add, edit, delete, and mark tasks as completed or ongoing.
- **Drag-and-Drop Functionality**: Organize tasks in a drag-and-drop interface using `react-beautiful-dnd`.
- **Search and Filter**: Search tasks by title and filter them by category (Work, Personal, Urgent, or All).
- **Responsive Design**: The app is fully responsive and works on desktop and mobile devices.
- **Edit Modal**: A modal popup to edit task details (title, description, category).
- **Mock Backend**: The app uses a mock JSON server as the backend to simulate real API interactions.

## Technologies Used

- **Frontend**:
  - React.js (with functional components and hooks)
  - Tailwind CSS (for styling)
  - Axios (for API calls)
  - React Router (for navigation)
  - React Beautiful DnD (for drag-and-drop functionality)
  
- **Backend**:
  - Mock JSON Server (to simulate backend API)

- **Development Tools**:
  - Node.js
  - npm (or yarn)

## Instructions to Set Up and Run the App Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app
   
## run npm install to install the dependencies

## run npm install -g json-server to access the backend

## json-server --watch db.json --port 3001  to start the backend

## run npm start to start the project.
