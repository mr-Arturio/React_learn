import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setEditing] = useState(false);

  function handleEdit() {
    setEditing((prev) => !prev);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" required value={name}/>
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
