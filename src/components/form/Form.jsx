/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import style from '../form/style.css';


function Form({
  handleSubmit,
  method,
  onMethodChange,
  handleInputChange,
  url,
  reqBody,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            placeholder="Enter a URL"
            className={style.form}
            type="text"
            name="url"
            onChange={handleInputChange}
            value={url} />
        </label>
        <button className={style.submitButton} aria-label="fetch-button"></button>
      </div>

      <div className={style.radioContainer}>
        <label className={style.radioLabel}>
          <input
            data-testid="get-button"
            type="radio"
            name="method"
            value="GET"
            checked={method === 'GET'}
            onChange={onMethodChange} />
          <span>GET</span>
        </label>

        <label className={style.radioLabel}>
          <input
            data-testid="post-button"
            type="radio"
            name="method"
            value="POST"
            checked={method === 'POST'}
            onChange={onMethodChange} />
          <span>POST</span>
        </label>

        <label className={style.radioLabel}>
          <input
            data-testid="put-button"
            type="radio"
            name="method"
            value="PUT"
            checked={method === 'PUT'}
            onChange={onMethodChange} />
          <span>PUT</span>
        </label>

        <label className={style.radioLabel}>
          <input
            data-testid="delete-button"
            type="radio"
            name="method"
            value="DELETE"
            checked={method === 'DELETE'}
            onChange={onMethodChange} />
          <span>DELETE</span>
        </label>
      </div>

      <div className={style.reqBody}>
        <label>
          <textarea
            placeholder="Raw JSON"
            type="text"
            className={style.reqBody}
            name="reqBody"
            onChange={handleInputChange}
            value={reqBody} />
        </label>
      </div>
    </form>
  );
}

Form.PropTypes = {
  handleSubmit: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
  onMethodChange: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  reqBody: PropTypes.any.isRequired,
};

export default Form;






