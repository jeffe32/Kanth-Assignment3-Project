The Assignment Tracker helps students keep track of their upcoming homework and due dates.
Users can:
  Add new assignments
  View all assignments in a clean table layout
  Edit assignment details
  Delete assignments (with confirmation)
  
The project was built as part of INFR3120 – Assignment 3, focusing on ExpressJS, MongoDB, secure CRUD operations, and EJS templating.

Features
CRUD Functionality

Create: Add new assignments (title, course, due date, description)
Read: Browse all assignments
Update: Edit assignment details
Delete: Remove assignments with a confirmation message

MongoDB Integration

Uses Mongoose schemas and models
Secure database connection using environment variables (.env)

Templating with EJS

Reusable header, footer, and layout components
Clean UI using Bootstrap styling

Secure Structure

.env file used for DB credentials
No credentials stored directly inside app.js

Technologies Used

Node.js
Express.js
MongoDB Atlas
Mongoose
EJS Templating
Bootstrap 5
dotenv

Live Deployment

Your project is hosted on:
Render : https://kanth-assignment3-project-4.onrender.com

Assignment Tracker – Project Plan

1. Project Overview
The Assignment Tracker is a web-based productivity tool that allows students to manage, organize, and keep track of their academic assignments. The system enables users to create, edit, delete, and view assignments in a clean and intuitive interface. The goal is to improve time management and ensure no assignment deadlines are missed.

2. Core Features
• Add new assignments with title, course, due date, and description.
• Edit assignment details at any time.
• Delete assignments that are completed or no longer relevant.
• View all assignments in an organized table.
• Responsive black & white modern UI.
• MongoDB Atlas database integration for persistent storage.

3. System Architecture
The system is developed using the MVC architecture pattern:
• Model – Represents the Assignment schema stored in MongoDB.
• View – EJS pages for frontend display.
• Controller – Handles CRUD logic for assignment operations.
• Router – Manages navigation between pages.

5. Visual Representation
Below is a simple visualization of how the Assignment Tracker workflow functions.
Home Page → Assignment List → Add/Edit/Delete Assignment → MongoDB Atlas

6. Goals and Benefits
• Helps students stay organized.
• Ensures deadlines are not missed.
• Provides a clean and simple dashboard.
• Improves productivity and time management.



