import React, { Component } from 'react';
import PersonList from './components/PersonList';


class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    fetch('http://ec2-52-23-228-96.compute-1.amazonaws.com:7070/ecoms-api/setup/get_industries/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }


  render() {
    return (
      <div class="container">
        <PersonList contacts={this.state.contacts} />
        
      </div>
    );
  }
}

export default App;