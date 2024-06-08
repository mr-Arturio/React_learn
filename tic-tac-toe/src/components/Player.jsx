import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setEditing] = useState(false);

  // Function to handle the edit button
  function handleEdit() {
    setEditing((prev) => !prev);

    if (isEditing) {
      onChangeName(symbol, playerName); // Call the onChangeName function with the symbol and playerName as arguments
    }
  }

  // Function to handle the change in the input field
  function handleChange(event) {
    setPlayerName(event.target.value); // Update the playerName state with the value entered in the input field
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
