import React from 'react';
import { useSelector } from 'react-redux';

function App() {
  const players = useSelector((state) => state.players.list);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1> Football Players</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {players.map((player) => (
          <li key={player.id}>
            <strong>{player.name}</strong> — {player.position} ({player.club})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
