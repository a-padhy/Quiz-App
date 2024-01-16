import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/register");
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <Link to="/" className="text-white text-xl font-semibold">
          Quizzy
        </Link>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          {!cookies.access_token ? (
            <>
              <Link to="/register" className="text-white hover:text-gray-300">
                Register
              </Link>
              <Link to="/login" className="text-white hover:text-gray-300">
                Login
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile" className="text-white hover:text-gray-300">
                My Profile
              </Link>
              <button
                className="text-white hover:text-gray-300"
                onClick={logout}
              >
                {" "}
                Logout{" "}
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
