import { useState, useEffect } from 'react/cjs/react.development';
import './App.css';

import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event) => {
    const searchFieldText = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldText);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  // Second argument are dependancies. If those dependancies changes, then trigger the callback
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className='App'>
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder='search monsters' handleChange={onSearchChange} />
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
};
// // Lifecycle: constructor, render, componentDidMount, render
// class App extends Component {
//   constructor() {
//     // takes all classes and methods from extended class and can be reused here
//     super();
//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//     console.log('constructor');

//     // Explicit binding
//     // this.setSearchFieldText = this.setSearchFieldText.bind(this);
//   }
//   render() {
//     console.log('render');
//     // Optimization. destructure function and state.
//     const { monsters, searchField } = this.state;
//     // Function initialized once when component is made
//     const { setSearchFieldText } = this;
//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField.toLowerCase())
//     );

//     return (
//       <div className='App'>
//         <h1>Monsters Rolodex</h1>
//         <SearchBox
//           placeholder='search monsters'
//           handleChange={setSearchFieldText}
//         />
//         <CardList monsters={filteredMonsters}></CardList>
//         {/* <ListOfMonsters monsters={this.state.monsters}></ListOfMonsters> */}
//       </div>
//     );
//   }

//   // Fetch data then update component when you get it
//   componentDidMount() {
//     console.log('componentDidMount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState({ monsters: users }));
//   }

//   //
//   setSearchFieldText = (e) => {
//     // this is referenced to where the function is defined from. in this case inside the app component class
//     this.setState({ searchField: e.target.value });
//   };
// }

export default App;
