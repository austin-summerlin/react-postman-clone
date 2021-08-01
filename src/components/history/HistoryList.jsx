/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import HistoryDisplay from './HistoryDisplay';

const HistoryList = ({ history, onClick }) => {
  const historyDetails = history.map((item, i) => {
    return (
      <li key={i} onClick={onClick}>
        <HistoryDisplay method={item.method} url={item.url} id={`${item.url}+${item.method}`} />
      </li>
    );
  });

  return (
    <ul className="styles.History">
      {historyDetails}
    </ul>
  );
};

HistoryList.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default HistoryList;

