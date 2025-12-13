import { Link, NavLink } from "react-router-dom";
import { Button } from "../Button";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-light shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-xl font-extrabold">
          Library<span className="text-accentColor">MS</span>
        </Link>

        {/* LINKS */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-accentColor font-medium" : "text-fontColor"
            }
          >
            Home
          </NavLink>

          {!user ? (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-accentColor font-medium" : "text-fontColor"
                }
              >
                Login
              </NavLink>

              <Button size="sm">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </>
          ) : (
            <>
              <span className="text-sm text-spanColor">
                Hi, <b>{user.name}</b>
              </span>

              <Button
                size="sm"
                variant="outline"
                onClick={logout}
              >
                Logout
              </Button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
