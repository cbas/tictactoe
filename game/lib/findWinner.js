var winningCombination = [ [0, 1, 2], [3, 4, 5], [6, 7, 8],
                           [0, 3, 6], [1, 4, 7], [2, 5, 8],
                           [0, 4, 8], [2, 4, 6] ]

export default function findWinner (tiles) {
  // tiles layout by index
  // [0] [1] [2]
  // [3] [4] [5]
  // [6] [7] [8]

  if (winningCombination.some(combo =>
    combo.map(index => tiles[index])
      .every(tile => tile.textContent === 'X'))) return 'X'
  else if (winningCombination.some(combo =>
    combo.map(index => tiles[index])
      .every(tile => tile.textContent === 'O'))) return 'O'
}
