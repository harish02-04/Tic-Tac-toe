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
          𝘛𝘩𝘦 𝘸𝘪𝘯𝘯𝘦𝘳 𝘪𝘴 <span className={w == 'X' ? 'CX' : 'CY'}>{w}</span>
        </>
      );
    } else {
      return (
        <>
          𝘕𝘦𝘹𝘵 𝘗𝘭𝘢𝘺𝘦𝘳 𝘪𝘴 <span className={p == 'X' ? 'CX' : 'CY'}>{p}</span>
        </>
      );
    }
  }
  return <h2>{tellS()}</h2>;
};
export default status;
