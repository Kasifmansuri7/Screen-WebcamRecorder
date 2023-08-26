import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../userContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("/login", { name, email }).then(({ data }) => {
        setUser(data);
        navigate("/");
      });
    } catch (err) {
      console.log("Login :" + err);
    } finally {
      setName("");
      setEmail("");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto my-auto flex flex-col gap-3"
    >
      <h2 className="text-3xl font-semibold my-4 text-center">Login</h2>
      <input
        type="text"
        placeholder="john doe."
        className="border px-4 py-2 rounded-xl"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder="example@email.com"
        className="border px-4 py-2 rounded-xl"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button className="border rounded-xl w-32  py-2 bg-sky-600 text-white mx-auto">
        Start
      </button>
    </form>
  );
}

export default LoginPage;
