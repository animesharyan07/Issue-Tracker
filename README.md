
Issue Tracker Application
Description
The Issue Tracker Application is a full-stack web application designed to efficiently manage issues in a clear, organized manner.
It includes a responsive React.js frontend and a robust Node.js/Express backend connected to MongoDB for data persistence. Users can create, edit, delete, and view detailed information about issues, with sorting and filtering capabilities.

Features
Frontend (React.js)
•	Dashboard View:
o	Displays all issues in a clear, organized list.
o	Each issue shows: 
	ID
	Title
	Shortened Description
	Status (Open | In Progress | Closed)
	Priority (Low | Medium | High)
	Creation Date
o	Sorting and filtering functionalities.
•	Issue Detail View:
o	Shows complete information when a user selects an issue.
o	Includes edit and delete options.
•	Issue Management:
o	Form to create new issues with required fields.
o	Edit functionality to update existing issues.
o	Confirmation dialog for issue deletion.
•	Navigation & UI:
o	Utilizes React Router for page navigation.
o	Responsive and professional user interface using a CSS framework (e.g., Tailwind, Bootstrap).
Backend (Node.js/Express/MongoDB)
•	RESTful API Endpoints:
o	GET /api/issues: Retrieve all issues.
o	GET /api/issues/:id: Retrieve a specific issue.
o	POST /api/issues: Create a new issue.
o	PUT /api/issues/:id: Update an existing issue.
o	DELETE /api/issues/:id: Delete an issue.
•	Data Storage:
o	MongoDB is used for storing issue data.
o	Ensures data persistence between server restarts.
•	Server Implementation:
o	Input validation for all endpoints.
o	Proper error handling with appropriate HTTP status codes.
o	Request logging for debugging purposes.


Technologies Used
•	Frontend:
o	React.js
o	Axios for HTTP requests
o	React Router for navigation
o	CSS Framework (e.g., Tailwind or Bootstrap)
•	Backend:
o	Node.js
o	Express.js
o	MongoDB/Mongoose
o	Body-Parser
o	Cors for cross-origin requests

Installation Instructions
Clone the Repository
git clone https://github.com/your-repository/Issue-Tracker.git
cd Issue-Tracker

Backend Setup
1.	Navigate to the backend folder:
2.	cd backend
3.	Install dependencies:
4.	npm install
5.	Start the MongoDB server (ensure MongoDB is installed locally or use a remote URI, I have done the Mongo db part).
6.	Start the backend server:
7.	nodemon index.js


Frontend Setup
1.	Navigate to the frontend folder:
2.	cd ../frontend
3.	Install dependencies:
4.	npm install
5.	Start the React development server:
6.	npm start


Usage
1.	Open the application in your browser:
o	Frontend: http://localhost:3000
o	Backend: http://localhost:5000
2.	Navigate to the Dashboard to view all issues.
3.	Use the "Create Issue" button to add a new issue.
4.	Select an issue from the list to view its details, edit, or delete it.
5.	Experiment with sorting and filtering in the Dashboard to manage issues effectively.



Folder Structure
issue-tracker/
  backend/
    models/
      Issue.js
    routes/
      issues.js
   index.js
    package.json

    
  frontend/
    src/
      components/
        Dashboard.js
        IssueDetail.js
        IssueForm.js
        Navbar.js
      App.js
      index.js
      styles.css
   public/
  index.html
  package.json




Future Enhancements
•	Add user authentication to allow secure login and personalized issue management.
•	Integrate role-based access control for different types of users.
•	Implement additional filtering options such as date range and text search.


