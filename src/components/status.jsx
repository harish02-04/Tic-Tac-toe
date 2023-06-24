const status = ({ w, gam }) => {
  function tellS() {
    const d = gam.sq.every(val => val != null);
    const p = gam.tog ? 'X' : 'O';
    if (w == null && d) {
      return (
        <>
          <span className="CX">X</span> and <span className="CY">O</span> Tied
        </>
      );
    }
    if (w) {
      return (
        <>
          The winner is <span className={w == 'X' ? 'CX' : 'CY'}>{w}</span>
        </>
      );
    } else {
      return (
        <>
          The Next Player is <span className={p == 'X' ? 'CX' : 'CY'}>{p}</span>
        </>
      );
    }
  }
  return <h1>{tellS()}</h1>;
};
export default status;
