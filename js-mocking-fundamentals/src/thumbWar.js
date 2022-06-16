const utils = require("./utils");

function thumbWar(player1, player2) {
  const battlesToWin = 2;

  let player1Wins = 0;
  let player2Wins = 0;

  while (player1Wins < battlesToWin && player2Wins < battlesToWin) {
    const winner = utils.getWinner(player1, player2);

    if (winner === player1) {
      player1Wins++;
    } else if (winner === player2) {
      player2Wins++;
    }

    console.log({ player1Wins }, { player2Wins });
  }

  const winner = player1Wins > player2Wins ? player1 : player2;

  console.log(`${winner} wins the Thumb War!`);

  return winner;
}

module.exports = thumbWar;
