/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
const findWinners = function (matches) {
// O(n logn) Time | O(n) Space
//  n = all elements in matches
//  Algorithm scales linearithmically with input array size.

  const playerLossesMap = new Map();

  // process input
  //  O(n) Time | O(n) Space
  //  n = all elements in matches array
  //
  for (const matchResult of matches) {

    // For each new winner, loser, set their match count to totalMatches
    //
    for (const player of matchResult) {
      if (!playerLossesMap.get(player)) {
        playerLossesMap.set(player, 0);
      }
    }

    // Subtract from the loser's match count
    //
    const loser = matchResult[1];
    playerLossesMap.set(
      loser,
      playerLossesMap.get(loser) + 1
    );

  }

  // find zeros and ones
  //  O(n) Time
  //
  const zeroLossPlayers = [];
  const oneLossPlayers = [];
  for (const [player, lossCount] of playerLossesMap) {
    if (lossCount === 0) {
      zeroLossPlayers.push(player);
    } else if (lossCount === 1) {
      oneLossPlayers.push(player);
    }
  }

  // sort
  //  O(n logn) Time
  //
  zeroLossPlayers.sort(increasingSort);
  oneLossPlayers.sort(increasingSort);


  return [zeroLossPlayers, oneLossPlayers];
};

const increasingSort = function (a, b) {
  // 1 - 2 => -1 (right is bigger)
  // 2 - 1 => 1 (left is bigger)
  // 2 - 2 => 0 (both are equal)
  return a - b;
};

module.exports = {
  findWinners
};
