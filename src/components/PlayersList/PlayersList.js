import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePlayer } from '../../redux/playersSlice';
import { deletePlayer as deletePlayerFromService } from '../../services/dataService';
import './PlayersList.css';

function PlayersList({ players, onEdit }) {
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    if (window.confirm('Вы уверены, что хотите удалить этого игрока?')) {
      try {
        await deletePlayerFromService(id);
        dispatch(deletePlayer(id));
      } catch (error) {
        console.error('Error deleting player:', error);
      }
    }
  };

  if (players.length === 0) {
    return <div className="players-empty">Нет игроков. Добавьте первого игрока!</div>;
  }

  return (
    <div className="players-list">
      {players.map(player => (
        <div key={player.id} className="player-card">
          <img src={player.photo} alt={player.name} className="player-photo" />
          <div className="player-info">
            <h3>{player.name}</h3>
            <p><span className="label">Позиция:</span> {player.position}</p>
            <p><span className="label">Номер:</span> {player.number}</p>
            <p><span className="label">Клуб:</span> {player.club}</p>
          </div>
          <div className="player-actions">
            <button className="btn btn-edit" onClick={() => onEdit(player)}>
              Редактировать
            </button>
            <button className="btn btn-delete" onClick={() => handleDelete(player.id)}>
              Удалить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlayersList;
