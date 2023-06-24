import { useState } from 'react';
import Sq from './Square';
const board = ({ sq, draw }) => {
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
