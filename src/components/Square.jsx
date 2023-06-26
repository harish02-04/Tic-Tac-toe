const Square = ({ value, onClick, ch }) => {
  return (
    <button
      type="button"
      className={`square ${value === 'X' ? 'CX' : 'CY'} ${ch ? 'winning' : ''}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
