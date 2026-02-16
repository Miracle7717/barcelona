import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMatches, setLoading, setError } from '../../redux/matchesSlice';
import { fetchMatches } from '../../services/dataService';
import './MatchesList.css';

function MatchesList() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.matches);

  useEffect(() => {
    const loadMatches = async () => {
      try {
        dispatch(setLoading(true));
        const data = await fetchMatches();
        dispatch(setMatches(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };

    loadMatches();
  }, [dispatch]);

  if (loading) {
    return (
      <section className="matches-section">
        <div className="section-container">
          <h2>⚽ Матчи</h2>
          <div className="loading">
            <p>Загрузка матчей...</p>
            <div className="spinner"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="matches-section">
      <div className="section-container">
        <h2>⚽ Матчи</h2>
        <div className="matches-list">
          {list.map((match) => (
            <div key={match.id} className={`match-card ${match.status}`}>
              <div className="match-header">
                <span className="competition">{match.competition}</span>
                <span className="status">{match.status === 'completed' ? '✓ Завершен' : 'Предстоящий'}</span>
              </div>
              <div className="match-content">
                <div className="team team-1">
                  <p className="team-name">{match.team1}</p>
                </div>
                <div className="match-info">
                  {match.score ? (
                    <div className="score">{match.score}</div>
                  ) : (
                    <div className="time">VS</div>
                  )}
                  <p className="date">{match.date}</p>
                  <p className="time-text">{match.time}</p>
                </div>
                <div className="team team-2">
                  <p className="team-name">{match.team2}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MatchesList;
