import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Dou', age: 24 },
            { name: 'sara', age: 21 }
        ]
    }

    switchNameHandler = () => {
        this.setState({
            persons: [
                { name: 'moaz', age: 21 },
                { name: 'Dou', age: 24 },
                { name: 'sara', age: 21 }
            ]
        })
    }



    render() {
        return (
            <div className="App" >
                <h1 > i am a react app </h1>
                <button onClick={this.switchNameHandler}>Switch Names</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >
                    My Hobby is swimming</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

            </div >
        );
        /* return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I am a react app ya moaz')); */
    }
}

export default App;