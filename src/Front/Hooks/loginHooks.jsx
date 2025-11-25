import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useLogin(page) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const User = { email, username, password, countOfText: 0 };

    try {
      const response = await fetch(`http://127.0.0.1:8080/${page}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(User),
      });

      const data = await response.json();

      if (response.ok) {
        if (page === "login") {
          navigate("/menu");
        } else {
          console.log("Registration successful:", data);
          navigate("/login");
        }
      } else {
        console.log(`${page} failed:`, data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return {
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    handleSubmit,
  };

  //P.S: Я вивчив основні правила для створення хуків:3
}
