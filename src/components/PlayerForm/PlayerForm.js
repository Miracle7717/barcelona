import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPlayer, updatePlayer } from '../../redux/playersSlice';
import { createPlayer, updatePlayer as updatePlayerService } from '../../services/dataService';
import './PlayerForm.css';

function PlayerForm({ editingPlayer, onClose }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    number: '',
    club: 'Barcelona',
    photo: null,
    photoPreview: null,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editingPlayer) {
      setFormData({
        name: editingPlayer.name,
        position: editingPlayer.position,
        number: editingPlayer.number,
        club: editingPlayer.club,
        photo: null,
        photoPreview: editingPlayer.photo,
      });
    }
  }, [editingPlayer]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          photo: file,
          photoPreview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.position || !formData.number) {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    setLoading(true);

    try {
      const playerData = {
        name: formData.name,
        position: formData.position,
        number: parseInt(formData.number),
        club: formData.club,
        photo: formData.photoPreview || (editingPlayer ? editingPlayer.photo : null),
      };

      if (editingPlayer) {
        const updated = await updatePlayerService(editingPlayer.id, playerData);
        dispatch(updatePlayer(updated));
      } else {
        const created = await createPlayer(playerData);
        dispatch(addPlayer(created));
      }

      setFormData({
        name: '',
        position: '',
        number: '',
        club: 'Barcelona',
        photo: null,
        photoPreview: null,
      });
      onClose();
    } catch (error) {
      console.error('Error saving player:', error);
      alert('Ошибка при сохранении игрока: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const positions = ['Forward', 'Midfielder', 'Defender', 'Goalkeeper'];

  return (
    <div className="player-form-overlay">
      <div className="player-form-container">
        <h2>{editingPlayer ? 'Редактировать игрока' : 'Добавить нового игрока'}</h2>
        
        <form onSubmit={handleSubmit} className="player-form">
          <div className="form-group">
            <label htmlFor="name">Имя игрока:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Введите имя игрока"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="position">Позиция:</label>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              required
            >
              <option value="">Выберите позицию</option>
              {positions.map(pos => (
                <option key={pos} value={pos}>{pos}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="number">Номер:</label>
            <input
              type="number"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              placeholder="Введите номер"
              min="1"
              max="99"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="club">Клуб:</label>
            <input
              type="text"
              id="club"
              name="club"
              value={formData.club}
              onChange={handleInputChange}
              placeholder="Введите клуб"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="photo">Фото:</label>
            <input
              type="file"
              id="photo"
              name="photo"
              onChange={handlePhotoChange}
              accept="image/*"
            />
            {formData.photoPreview && (
              <div className="photo-preview">
                <img src={formData.photoPreview} alt="Preview" />
              </div>
            )}
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Сохранение...' : 'Сохранить'}
            </button>
            <button type="button" className="btn btn-cancel" onClick={onClose}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PlayerForm;
