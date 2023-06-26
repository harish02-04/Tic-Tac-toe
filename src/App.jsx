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
  const { w, ws } = checkWin(gamboard.sq);
  const reset = () => {
    setCmov(0);
    setHis([{ sq: Array(9).fill(null), tog: 'false' }]);
  };
  const isTraversing = cmov + 1 !== his.length - 1;
  const last = isTraversing ? his[cmov] : his[his.length - 1];
  const toMove = m => {
    setCmov(m);
  };

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
      const base = isTraversing ? his.slice(0, his.indexOf(last) + 1) : his;
      return base.concat({ sq: Nstate, tog: !Lstate.tog });
    });
    setCmov(cur => cur + 1);
  };
  return (
    <div className="app">
      <h1>
        𝓣𝓘𝓒 <span className="CX">𝓣𝓐𝓒</span> 𝓣𝓞𝓔
      </h1>
      <Status w={w} gam={gamboard} />
      <Board sq={gamboard.sq} draw={draw} ws={ws} />
      <button
        className={`btn-reset ${w ? 'active' : ''}`}
        onClick={() => reset()}
      >
        𝗥𝗲𝘀𝘁𝗮𝗿𝘁
      </button>
      <h2>𝙶𝚊𝚖𝚎 𝙷𝚒𝚜𝚝𝚘𝚛𝚢</h2>
      <History his={his} toMove={toMove} cmov={cmov} />
    </div>
  );
}

export default App;
