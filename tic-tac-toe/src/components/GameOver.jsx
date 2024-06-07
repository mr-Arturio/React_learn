export default function GameOver({ winner, hasDraw }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{winner} Won!</p>
      <p>
        <button onClick={() => window.location.reload()}>Play Again</button>
      </p>
    </div>
  );
}
