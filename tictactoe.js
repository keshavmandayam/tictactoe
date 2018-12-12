//console.log('x|o|x\n------\nx|o|x\n------\nx|o|x');

const ticTacToe = () => {
  const val1 = process.argv[5][0];
  const val2 = process.argv[5][2];
  const val3 = process.argv[5][4];
  const val4 = process.argv[5][13];
  const val5 = process.argv[5][15];
  const val6 = process.argv[5][17];
  const val7 = process.argv[5][26];
  const val8 = process.argv[5][28];
  const val9 = process.argv[5][30];
  let board = [[val1, val2, val3], [val4, val5, val6], [val7, val8, val9]];
  const player = process.argv[2];
  let row = process.argv[3];
  let col = process.argv[4];
  if (player === 'player1') {
    row = Number(row) - 1;
    col = Number(row) - 1;
    board[row][col] = 'x';
    console.log('Player 2 its your turn');
  }
  if (player === 'player2') {
    row = Number(row) - 1;
    col = Number(row) - 1;
    board[row][col] = 'o';
    console.log('Player 2 its your turn');
  }
  //   console.log(player);
  //   console.log(row);
  //   console.log(col);
  console.log(
    `${board[0][0]}|${board[0][1]}|${board[0][2]}\n------\n${board[1][0]}|${
      board[1][1]
    }|${board[1][2]}\n------\n${board[2][0]}|${board[2][1]}|${board[2][2]}\n`
  );
};

ticTacToe();
