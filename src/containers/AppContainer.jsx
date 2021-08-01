/* eslint-disable max-len */
import React, { Component } from 'react';
import Form from '../components/form/Form';
import Display from '../components/display/ResultsDisplay';
import HistoryList from '../components/history/HistoryList';
import { fetchCall } from '../components/services/fetchCall';

export default class AppContainer extends Component {
  state = {
    url: '',
    method: '',
    body: '',
    history: [],
    display: 'form',
  };

  componentDidMount() {
    const historyStored = JSON.parse(localStorage.getItem('history'));

    if (historyStored) {
      this.setState({ history: historyStored });
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    const { history, url, method, body } = this.state;
    const key = `${url}+${method}+${body}`;

    e.preventDefault();
    this.fetch();

    if (history.filter(item => item.key === key).length > 0 || method === '') return;
    this.setState(state => ({

      history: [...state.history, {
        url: state.url,
        method: state.method,
        body: state.body,
        key: `${url}+${method}+${body}`
      }]
    }));

    this.setState(state => {
      localStorage.setItem('history', JSON.stringify(state.history));
    });
  };

  handleClick = event => {
    const { id } = event.target;
    let result;

    this.state.history.forEach(item => {
      if (item.key === id) {
        result = item;
      }
    });

    this.setState({
      url: result.url,
      method: result.method,
      body: result.body,
    });
  };

  fetch = () => {
    const { url, method, body } = this.state;
    return fetchCall(url, method, body)
      .then(res => this.setState({ display: res }));
  };

  render() {
    const { url, method, body, display, history } = this.state;

    return (
      <>
        <section className="container">
          <HistoryList history={history} onClick={this.handleClick} />
          <div>
            <Form
              url={url}
              method={method}
              body={body}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit} />
            <Display display={display} />
          </div>
        </section>

      </>
    );
  }
}

