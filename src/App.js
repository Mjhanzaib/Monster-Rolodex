import React, { Component } from "react";
import './App.css';

import { CardList } from './components/cardlist/cardlist';
import { Searchbox } from './components/searchbox/searchbox.jsx'
class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [

            ],
            searchField: ''
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }))
    }
    handleChange = se => {
        this.setState({ searchField: se.target.value });
    }
    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        )
        return (
            <div className='app' >
                <h1>Monsters Rolodex</h1>
                <Searchbox placeholder='Search monsters' handleChange={this.handleChange} />
                <CardList monsters={filteredMonsters} />

            </div>



        );
    }
}
export default App;
