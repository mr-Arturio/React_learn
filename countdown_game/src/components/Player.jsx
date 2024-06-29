import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef(null);

  const [name, setName] = useState(null);

  function handleClick() {
    setName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2> //works only if name in null not an empty string "_"
      <p>
        <input
          ref={playerName}
          type="text"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
