import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStandings, setLoading, setError } from '../../redux/standingsSlice';
import { fetchStandings } from '../../services/dataService';
import './StandingsList.css';

function StandingsList() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.standings);

  useEffect(() => {
    const loadStandings = async () => {
      try {
        dispatch(setLoading(true));
        const data = await fetchStandings();
        dispatch(setStandings(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };

    loadStandings();
  }, [dispatch]);

  if (loading) {
    return (
      <section className="standings-section">
        <div className="section-container">
          <h2>🏆 Таблица</h2>
          <div className="loading">
            <p>Загрузка таблицы...</p>
            <div className="spinner"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="standings-section">
      <div className="section-container">
        <h2>🏆 Таблица La Liga</h2>
        <div className="standings-table">
          <div className="table-header">
            <div className="col col-pos">#</div>
            <div className="col col-team">Команда</div>
            <div className="col col-played">И</div>
            <div className="col col-won">В</div>
            <div className="col col-drawn">Н</div>
            <div className="col col-lost">П</div>
            <div className="col col-gf">ГЗ</div>
            <div className="col col-ga">ГП</div>
            <div className="col col-gd">РГ</div>
            <div className="col col-points">О</div>
          </div>
          {list.map((standing) => (
            <div key={standing.id} className={`table-row ${standing.position === 1 ? 'leader' : ''}`}>
              <div className="col col-pos">{standing.position}</div>
              <div className="col col-team">
                {standing.position === 1 && '⭐ '}
                {standing.team}
              </div>
              <div className="col col-played">{standing.played}</div>
              <div className="col col-won">{standing.won}</div>
              <div className="col col-drawn">{standing.drawn}</div>
              <div className="col col-lost">{standing.lost}</div>
              <div className="col col-gf">{standing.goalsFor}</div>
              <div className="col col-ga">{standing.goalsAgainst}</div>
              <div className="col col-gd">{standing.goalDifference}</div>
              <div className="col col-points">
                <strong>{standing.points}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StandingsList;
