import React from 'react';
import PropTypes from 'prop-types';


const HistoryDisplay = ({ method, url, id }) => {
  return (
    <article id={id}>
      <p id={id}>{method}</p>
      <span id={id}>{url}</span>
    </article>
  );
};


HistoryDisplay.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
};

export default HistoryDisplay;

