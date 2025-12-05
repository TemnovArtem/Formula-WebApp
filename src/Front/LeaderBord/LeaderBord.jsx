import React from "react";
import "./StyleLeaderBord.css";
import BackButton from "../Components/ButtonBack/BackButton.jsx";
import useLeaderboard from "/src/Front/Hooks/useLeaderBoard.jsx"

const LeaderBord = () => {
  const { leaderboardData, isLoading, error, refetch } = useLeaderboard();

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
            onClick={refetch}
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
