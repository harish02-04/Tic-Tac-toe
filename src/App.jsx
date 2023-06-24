import './styles.scss';
import { useState } from 'react';
import Board from './components/board';
import Status from './components/status';
import History from './components/history';
import { checkWin } from './winner';

function App() {
  const [his, setHis] = useState([{ sq: Array(9).fill(null), tog: 'false' }]);
  const [cmov, setCmov] = useState(0);
  const gamboard = his[cmov];
  const w = checkWin(gamboard.sq);

  const draw = pos => {
    if (gamboard.sq[pos] || w) {
      return;
    }
    setHis(curHis => {
      const Lstate = curHis[curHis.length - 1];
      const Nstate = Lstate.sq.map((sqVal, sqIdx) => {
        if (sqIdx == pos) {
          return Lstate.tog ? 'X' : 'O';
        }
        return sqVal;
      });
      return curHis.concat({ sq: Nstate, tog: !Lstate.tog });
    });
    setCmov(cur => cur + 1);
  };
  return (
    <div className="app">
      <Status w={w} gam={gamboard} />
      <Board sq={gamboard.sq} draw={draw} />
      <History his={his} />
    </div>
  );
}

export default App;
