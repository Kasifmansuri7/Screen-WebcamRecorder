import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../userContext";
import axios from "axios";

function Headers() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function handleLogout() {
    axios.post("/logout").then(() => {
      setUser(null);
      navigate("/login");
    });
  }
  return (
    <header className="bg-cyan-700 py-6 h-24">
      <div className="flex justify-between px-10">
        <Link to="/" className=" text-white text-3xl font-semibold">
          Recording App
        </Link>
        {user && (
          <Link>
            <button
              className="text-cyan-700 border rounded-xl p-2 bg-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Headers;
