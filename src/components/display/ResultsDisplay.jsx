import React from 'react';
import style from './results.css';

function ResultsDisplay({ response, loading }) {

  if (loading) {
    return <div className={style.loading}>Loading...</div>;
  }
  else return (
    <div className={style.responseContainer}>
      <pre className={style.response}>{response}</pre>
    </div>
  );
}

export default ResultsDisplay;
