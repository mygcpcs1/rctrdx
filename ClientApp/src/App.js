import React, { Component } from 'react';
/*
import React, { useState } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
*/
import Person from './Person/Person';
//import person from './Person/Person';


class App extends Component {

    state = {
            persons:[
            {name: "Max", age: 33},
            {name: "Manu", age: 31},
            {name: "Steve", age: 32}
            ],
        otherState: 'this is other state',
        showPersons: false
        };

    switchNameHandler = (newName) => {
        this.setState({
            persons:[
            {name: newName, age: 33},
            {name: "Manu", age: 31},
            {name: "Steve", age: 27}]
            })
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons:[
            {name: "Max", age: 33},
            {name: event.target.value, age: 31},
            {name: "Steve", age: 26}]
            })
    };

    togglePersonsHandler = () => {
        this.setState({
            showPersons : !this.state.showPersons
        });
    };
    
    render (){

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid green',
            padding: '8px'
            };
           
        let persons = null;

        if( this.state.showPersons ){
            persons = (<div>
                        <Person  
                            name={this.state.persons[0].name} 
                            age={this.state.persons[0].age} 
                            click={this.switchNameHandler.bind(this, "maximilian")}
                            > 
                        Hobby: games </Person>
                        <Person 
                        name={this.state.persons[1].name} 
                        age={this.state.persons[1].age}
                        changed={this.nameChangedHandler}>
                            </Person>
                        <Person 
                        name={this.state.persons[2].name} 
                        age={this.state.persons[2].age}>
                            </Person>
                    </div>);
        }
        return (
            <div>
                <h1> Hi, I am a React App </h1>
                <p> This is working! </p>
                <button style={style} onClick={ this.togglePersonsHandler } >Switch Name</button>
                { React.Version }

                { persons }

            </div>);
        }
    }
export default App;


/*

const App = props => {

    const [personsState, setPersonsState] = useState({
        persons:[
        {name: "Max", age: 33},
        {name: "Manu", age: 31},
        {name: "Steve", age: 32}
        ]
        });
    const [otherstateState, setotherstateState] = useState({otherstate: 'yemoo new'});
    console.log(personsState, otherstateState);
    const switchNameHandler = () => {
        setPersonsState(
        {persons:[
            {name: "Mamilian", age: 33},
            {name: "Manu", age: 31},
            {name: "Steve", age: 27}]
            })
        };

        return (<div>
            <h1> Hi, I am a React App </h1>
            <p> This is working! </p>
            <button onClick={switchNameHandler}>Switch Name</button>
            React.Version
            <Person 

                name={personsState.persons[0].name} 
                age={personsState.persons[0].age} > 
                Hobby: games </Person>
            <Person 
                name={personsState.persons[1].name} 
                age={personsState.persons[1].age}>
                </Person>
            <Person 
                name={personsState.persons[2].name} 
                age={personsState.persons[2].age}>
                </Person>
            </div>);
    }
export default App;

*/
