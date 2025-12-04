import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useLogin(page) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const User = { email, username, password, countOfTest: 0 };

    try {
      const response = await fetch(`http://127.0.0.1:8080/${page}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(User),
      });

      // Перевіряємо, чи відповідь містить JSON
      const contentType = response.headers.get("content-type");
      let data = null;

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        // Якщо відповідь не JSON, отримуємо текст
        const text = await response.text();
        console.log("Server response (non-JSON):", text);
        data = { message: text || "Помилка сервера" };
      }

      if (response.ok) {
        if (page === "login") {
          navigate("/menu");
        } else {
          console.log("Registration successful:", data);
          navigate("/login");
        }
      } else {
        console.log(`${page} failed:`, data.message || "Невідома помилка");
        alert(`Помилка: ${data.message || "Перевірте введені дані"}`);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Помилка з'єднання з сервером");
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
