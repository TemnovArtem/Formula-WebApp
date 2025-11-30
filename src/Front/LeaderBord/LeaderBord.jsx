import React, { useState, useEffect } from "react";
import "./StyleLeaderBord.css";
import BackButton from "../Components/ButtonBack/BackButton.jsx";

const LeaderBord = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  const fetchLeaderboardData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Замініть URL на ваш реальний ендпоінт для отримання даних leaderboard
      const response = await fetch("http://127.0.0.1:8080/leaderboard");

      if (!response.ok) {
        throw new Error(`Помилка завантаження даних: ${response.status}`);
      }
      const data = await response.json();
      // Сортуємо дані за countOfTest у спадаючому порядку
      const sortedData = data.sort((a, b) => b.countOfTest - a.countOfTest);
      setLeaderboardData(sortedData);
    } catch (err) {
      console.error("Помилка:", err);
      setError(err.message);

      // Тестові дані для демонстрації (видаліть після підключення до API)
      /* const mockData = [
        { email: "player1@gmail.com", name: "Player One", countOfTest: 8 },
        { email: "player2@gmail.com", name: "Player Two", countOfTest: 7 },
        { email: "player3@gmail.com", name: "Player Three", countOfTest: 6 },
        { email: "player4@gmail.com", name: "Player Four", countOfTest: 5 },
        { email: "player5@gmail.com", name: "Player Five", countOfTest: 9 },
      ];*/

      //const sortedMockData = mockData.sort(
      //(a, b) => b.countOfTest - a.countOfTest,
      // );
      //setLeaderboardData(sortedMockData);
    } finally {
      setIsLoading(false);
    }
  };

  const getMedalEmoji = (position) => {
    switch (position) {
      case 0:
        return "🥇";
      case 1:
        return "🥈";
      case 2:
        return "🥉";
      default:
        return `#${position + 1}`;
    }
  };

  return (
    <div className="leaderboard-page">
      <div className="titleText">
        <div>LEADER</div>
        <div>BOARD</div>
      </div>

      <div className="leaderboard-card">
        <div className="leaderboard-header">
          <h2>🏆 TOP PLAYERS 🏆</h2>
          <button
            className="refresh-button"
            onClick={fetchLeaderboardData}
            disabled={isLoading}
          >
            🔄 Оновити
          </button>
        </div>

        {isLoading && <div className="loading-message">Завантаження...</div>}

        {error && !leaderboardData.length && (
          <div className="error-message">Помилка: {error}</div>
        )}

        {!isLoading && leaderboardData.length > 0 && (
          <div className="leaderboard-table-container">
            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th>Позиція</th>
                  <th>Гравець</th>
                  <th>Правильних відповідей</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((player, index) => (
                  <tr
                    key={player.email}
                    className={`leaderboard-row ${index < 3 ? "top-three" : ""}`}
                  >
                    <td className="position-cell">
                      <span className="position-badge">
                        {getMedalEmoji(index)}
                      </span>
                    </td>
                    <td className="player-cell">
                      <div className="player-info">
                        <span className="player-name">
                          {player.name || player.email}
                        </span>
                        <span className="player-email">{player.email}</span>
                      </div>
                    </td>
                    <td className="score-cell">
                      <span className="score-badge">{player.countOfTest}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!isLoading && leaderboardData.length === 0 && !error && (
          <div className="empty-message">
            Поки що немає даних у таблиці лідерів
          </div>
        )}
      </div>

      <BackButton />
    </div>
  );
};

export default LeaderBord;
