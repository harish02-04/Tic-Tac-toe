const history = ({ his }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {his.map((_, idx) => (
          <li key={idx}>
            <button type="button" className="btn-move">
              {idx === 0 ? `Game Starts` : `Go to move #${idx}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default history;
