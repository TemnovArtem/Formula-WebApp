import { useState, useEffect } from "react";

const useLeaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLeaderboardData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:8080/leaderboard");

      if (!response.ok) {
        throw new Error(`Помилка завантаження даних: ${response.status}`);
      }

      const data = await response.json();
      // Сортуємо дані за countOfTest у спадаючому порядку
      console.log(data);

      const sortedData = data.sort((a, b) => b.countOfTest - a.countOfTest);
      setLeaderboardData(sortedData);
    } catch (err) {
      console.error("Помилка:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  return {
    leaderboardData,
    isLoading,
    error,
    refetch: fetchLeaderboardData,
  };
};

export default useLeaderboard;
