const Log = ({ turns }) => {
  // for (const turn of turns) {
  //     const { square, player } = turn;
  //     const { row, col } = square;

  //     gameBoard[row][col] = player;
  //   }
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}-${turn.square.col}`}>
          Player {turn.player} selected - {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
