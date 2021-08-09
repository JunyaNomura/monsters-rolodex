import React from 'react'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  // onSearchChange = event => {
  //   this.setState({
  //     searchField: event.target.value,
  //     title: event.target.value
  //   })
  // }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="input here"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
