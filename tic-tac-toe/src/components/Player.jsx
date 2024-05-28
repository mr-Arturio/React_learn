import { useState } from "react";

export default function Player({ name, symbol }) {
  const [editing, setEditing] = useState(false);

  function handleEdit() {
    setEditing(true);
  }

  return (
    <li>
      <span className="player">
        {editing ? (
          <input type="text" required />
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>Edit</button>
    </li>
  );
}
