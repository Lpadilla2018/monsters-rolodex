import './App.css';

import { Component } from 'react';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };

    // Explicit binding
    // this.setSearchFieldText = this.setSearchFieldText.bind(this);
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.setSearchFieldText}
        />
        {/* <input
          type='search'
          placeholder='search monsters'
          onChange={(e) => this.setSearchFieldText(e)}
        /> */}
        <CardList monsters={filteredMonsters}>
          {/* {this.state.monsters.map((monster, index) => {
          return <h1 key={index}>{monster.name}</h1>;
        })} */}
        </CardList>
        {/* <ListOfMonsters monsters={this.state.monsters}></ListOfMonsters> */}
      </div>
    );
  }

  // Fetch data then update component when you get it
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  //
  setSearchFieldText = (e) => {
    // this is referenced to where the function is defined from. in this case inside the app component class
    this.setState({ searchField: e.target.value });
  };
}

export default App;
