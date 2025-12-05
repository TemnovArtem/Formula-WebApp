import { useState, useEffect } from "react";

function useSessionEmail(key) {
  // 1. Инициализация из sessionStorage
  const [email, setEmail] = useState(() => {
    const saved = sessionStorage.getItem(key);
    return saved ?? "";
  });

  // 2. Сохранение при каждом обновлении email
  useEffect(() => {
    sessionStorage.setItem(key, email);
  }, [email, key]);

  return { email, setEmail };
}

export default useSessionEmail;
