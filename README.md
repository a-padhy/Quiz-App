# Language Quiz Application - MERN Stack
Live Site URL : [Quizzy](https://quiz-app-client-six.vercel.app/)
## Video Demo
Video : [Demo](https://drive.google.com/file/d/15_PtFFE_QINedAo1TBPYXYmk-UbYJoeg/view?usp=drive_link)

This project is a full-stack web application built using React for the frontend and Express.js with MongoDB for the backend. The frontend uses various packages such as React-Axios, React-Router-Dom and React-Cookie to create a sign-up page and login page, a home page with Language selection and leaderboard features. The language selection feature enables the user to choose the language about which they want to give the test. Each language has various exercises that the user has to complete. User's progress is tracked during each exercise. Upon submitting they can see how much they scored. The Homepage also features a leaderboard feature where they can see top performing users across different languages. User's progress on each language is tracked in the user profile section and can also update their language preferences.    

The backend uses packages such as bcrypt, cors, jsonwebtoken and mongoose to handle user authentication, password encryption, and database operations. It checks whether the user exists before storing the user's information in the database and uses JSON web tokens for secure communication between the client and server. Entire scoring logic is handled at the backend. 

To use the application, users must first sign up with their email and password. Once signed in, they can choose language, attend exercises, see scores, check leaderboard, check their progress as well as upadte language preference. The application also provides a logout button to ensure the user's privacy and security.

##Testing
For now only exercises for language English has been added.

## Installation

To run this project, you'll need to have Node.js and MongoDB installed on your system. You can download Node.js from the official website: https://nodejs.org/, and install MongoDB by following the instructions provided here: https://docs.mongodb.com/manual/installation/.

To install the project dependencies, follow these steps:

Clone the repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/your-name/your-project-name.git
Navigate to the project directory:

bash
Copy code
```bash
cd your-project
```
Navigate and Install the frontend dependencies:

```bash
cd client
npm install
```
Start the frontend server:

```bash
npm run dev
```
Navigate to the backend directory:

```bash
cd server
```

Install the backend dependencies:

```bash
npm install
```
Create a .env file in the backend directory, and set the following environment variables:

makefile
```bash
MONGO_URI=<your-mongodb-url>
JWT_SECRET=<your-jwt-secret>
```
Replace <your-mongodb-uri> with the URI of your MongoDB database, and <your-jwt-secret> with a secret key of your choice.

Start the backend server:

```bash
npm run dev
```
Open a new terminal window, navigate to the project directory, and start the frontend server:

```bash
npm run start
```
Open your web browser and navigate to http://localhost:3000 to view the application.

That's it! You should now be able to run the application locally. If you encounter any issues, please refer to the project documentation or create a new issue on the project's GitHub repository.
    
  
