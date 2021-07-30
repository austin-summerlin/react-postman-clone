/* eslint-disable max-len */
import React, { Component } from 'react';
import Form from '../components/form/Form';
import ResultsDisplay from '../components/display/ResultsDisplay';
import HistoryDisplay from '../components/history/HistoryDisplay';
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
      method: target.value,
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { method, url } = this.state;

    if (method === 'GET') {
      const response = await getData(url);
      this.setState((prevState) => ({
        history: [...prevState.history, { method, url }],
        response,
        loading: false,
      }));
    }
    else if (method === 'POST') {
      const response = await postData(url);
      this.setState((prevState) => ({
        history: [...prevState.history, { method, url }],
        response,
        loading: false,
      }));
    }
    else if (method === 'DELETE') {
      const response = await deleteData(url);
      this.setState((prevState) => ({
        history: [...prevState.history, { method, url }],
        response,
        loading: false,
      }));
    }
    else if (method === 'PUT') {
      const response = await updateData(url);
      this.setState((prevState) => ({
        history: [...prevState.history, { method, url }],
        response,
        loading: false,
      }));
    }
  }

  render() {
    const { loading } = this.state;
    if (loading) return <h1>loading...</h1>;
    return (
      <>
        <HistoryDisplay history={this.state.history} />
        <Form
          handleSumbit={this.handleSubmit}
          method={this.state.method}
          onMethodChange={this.handleMethodChange}
          handleInputChange={this.handleInputChange}
          url={this.state.url}
          reqBody={this.state.reqBody} />
        <ResultsDisplay
          response={this.state.response}
          loading={this.state.loading} />
      </>
    );
  }
}
