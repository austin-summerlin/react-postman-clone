/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import RadioButtons from '../radio/Radio';
import style from '../form/style.css';

const Form = ({ url, body, method, onSubmit, onChange }) => {
  return (
    <section className={style.form}>
      <form onSubmit={onSubmit}>
        <input type="text" name="url" placeholder="URL" value={url} onChange={onChange} />
        <section>
          <RadioButtons method={method} onChange={onChange} />
          <button>Go</button>
        </section>
        <textarea name="body" placeholder="Raw JSON Body" value={body} onChange={onChange} />
      </form>
    </section>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  body: PropTypes.any.isRequired,
};

export default Form;






