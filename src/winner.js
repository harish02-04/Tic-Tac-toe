function checkWin(sq) {
  const ch = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 5],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (var i = 0; i < ch.length; i++) {
    const [a, b, c] = ch[i];
    if (sq[a] && sq[a] === sq[b] && sq[b] === sq[c]) {
      return sq[a];
    }
  }
  return null;
}
export { checkWin };
