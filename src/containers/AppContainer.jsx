/* eslint-disable max-len */
import React, { Component } from 'react';
import { getData, postData, deleteData, updateData } from '../components/services/CrudUtils';

export default class AppContainer extends Component {
  state = {
    loading: false,
    method: 'GET',
    url: '',
    response: '',
    reqBody: '',
    history: [],
  };

  handleMethodChange = ({ target }) => {
    this.setState({
      method: target.value
    });
  };

  hanldeInputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { method, url, reqBody, history } = this.state;

    if (method === 'GET') {
      this.setState((prevState) => ({
        history: [...prevState.history, { method, url }],
        response,
        loading: false,
      }));
    }
    else if (method === 'POST') {
      this.setState((prevState) => ({
        history: [...prevState.history, { method, url }],
        response,
        loading: false,
      }));
    }
    else if (method === 'DELETE') {
      this.setState((prevState) => ({
        history: [...prevState.history, { method, url }],
        response,
        loading: false,
      }));
    }
    else if (method === 'PUT') {
      this.setState((prevState) => ({
        history: [...prevState.history, { method, url }],
        response,
        loading: false,
      }));
    }
  };

  render() {
    const { loading, method, url, reqBody, response, history } = this.state;
    if (loading) return <h1>fetching data...</h1>;
    return (
      <>
      </>

    );
  }
}



