import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

//By using the class, we can get access to the state (A JS object with properities)
class App extends Component {
  constructor() {
    super();
    //the state is a JS object
    this.state = {
      monsters: [],
      // store the search bar input
      searchField: '',
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    //make a API call to the server and get a promise
    fetch('https://jsonplaceholder.typicode.com/users')
      // the () contains the result of the previous level
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  //all the arrow functions are automatically binded to the object where it was created in the first place. So we don't have to bind this function in the constructor
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    // destructuring
    const { monsters, searchField } = this.state;
    // get back a new array based on the input
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>

        {/* the search boxes are reusable by posting in different parameters. */}
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        {/* assign the value of this.state.monsters to the monsters */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
