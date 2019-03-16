import React, { Component } from 'react';
import './App.css';
import PreviousHomework from './PreviousHomework';
import HomeworkWeek3 from './HomeworkWeek3';

const url = ' https://uinames.com/api/?amount=10';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    this.fetchApi()
      .then(results => this.setState({ data: results }))
      .catch(err => console.error(err));
  }
  async fetchApi() {
    const data = await fetch(url);
    if (data.status !== 200) {
      throw new Error('An error has occured!');
    }
    const parsedData = await data.json();
    return parsedData;
  }
  render() {
    return (
      <div className="App">
        <PreviousHomework />
        <HomeworkWeek3 data={this.state.data} />
      </div>
    );
  }
}

export default App;
