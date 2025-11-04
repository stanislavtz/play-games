import { NavLink } from "react-router";

import "./Header.css";

function Header() {
  return (
    <header>
      <h1>
        <NavLink className="home" to="/">
          GamesPlay
        </NavLink>
      </h1>
      <nav>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "active-link" : ""
          }
          to="/catalog"
        >
          All Games
        </NavLink>
        <div id="user">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "active-link" : ""
            }
            to="/create"
          >
            Create Game
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "active-link" : ""
            }
            to="/logout"
          >
            Logout
          </NavLink>
        </div>
        <div id="guest">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "active-link" : ""
            }
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "active-link" : ""
            }
            to="/register"
          >
            Register
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
