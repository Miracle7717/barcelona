import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlayersList from '../../components/PlayersList/PlayersList';
import PlayerForm from '../../components/PlayerForm/PlayerForm';
import { setPlayers, setLoading, setError } from '../../redux/playersSlice';
import { fetchPlayers } from '../../services/dataService';
import './Players.css';

function Players() {
  const dispatch = useDispatch();
  const players = useSelector(state => state.players.list);
  const loading = useSelector(state => state.players.loading);
  const [showForm, setShowForm] = useState(false);
  const [editingPlayer, setEditingPlayer] = useState(null);

  useEffect(() => {
    const loadPlayers = async () => {
      dispatch(setLoading(true));
      try {
        const data = await fetchPlayers();
        dispatch(setPlayers(data));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };
    loadPlayers();
  }, [dispatch]);

  const handleAddPlayer = () => {
    setEditingPlayer(null);
    setShowForm(true);
  };

  const handleEditPlayer = (player) => {
    setEditingPlayer(player);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingPlayer(null);
  };

  return (
    <div className="players-page">
      <div className="players-header">
        <h1>Все игроки</h1>
        <button className="btn btn-add" onClick={handleAddPlayer}>
          + Добавить игрока
        </button>
      </div>

      {loading ? (
        <div className="loading">Загрузка игроков...</div>
      ) : (
        <PlayersList players={players} onEdit={handleEditPlayer} />
      )}

      {showForm && (
        <PlayerForm editingPlayer={editingPlayer} onClose={handleCloseForm} />
      )}
    </div>
  );
}

export default Players;
