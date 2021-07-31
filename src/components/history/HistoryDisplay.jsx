import React from 'react';
import PropTypes from 'prop-types';
import style from './history.css';

function HistoryDisplay({ history }) {

  return (
    <div className={style.historyContainer}>
      <div className={style.containerTop}>
        <p className={style.textContent}>previous...</p>
      </div>
      <ul aria-label="requests">
        {!!history.length && history.map((item, i) => (
          <li key={`${i}-${item.method}-${item.url}`}>
            <span>{item.method} </span>
            <span>{item.url}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

HistoryDisplay.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
  }))
};

export default HistoryDisplay;

