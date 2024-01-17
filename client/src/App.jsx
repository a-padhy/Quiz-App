// HANDLE VALIDATION

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";
import QuizPage from "./pages/QuizPage";
import QuizExercisePage from "./pages/QuizExercisePage";
import axios from "axios";
import ResultPage from "./pages/ResultPage";

axios.defaults.baseURL = "http://localhost:4000/";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <div className="max-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/:languageId" element={<QuizExercisePage />} />
          <Route
            path="/:languageId/exercise/:exerciseId"
            element={<QuizPage />}
          />
          <Route path="/result/:exerciseId" element={<ResultPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
