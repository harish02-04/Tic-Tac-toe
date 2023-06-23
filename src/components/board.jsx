import { useState } from 'react';
import Sq from './Square';
const board = () => {
  const [sq, setsq] = useState(Array(9).fill(null));
  const [tog, setTog] = useState('false');
  const draw = pos => {
    if (sq[pos]) {
      return;
    }
    setsq(cur => {
      return cur.map((sqVal, sqIdx) => {
        if (sqIdx == pos) {
          return tog ? 'X' : 'O';
        }
        return sqVal;
      });
    });
    setTog(cur => !cur);
  };
  const sqRender = p => {
    return <Sq value={sq[p]} onClick={() => draw(p)} />;
  };
  return (
    <center>
      <div className="board">
        <div className="board-row">
          {sqRender(0)}
          {sqRender(1)}
          {sqRender(2)}
        </div>
        <div className="board-row">
          {sqRender(3)}
          {sqRender(4)}
          {sqRender(5)}
        </div>
        <div className="board-row">
          {sqRender(6)}
          {sqRender(7)}
          {sqRender(8)}
        </div>
      </div>
    </center>
  );
};

export default board;
