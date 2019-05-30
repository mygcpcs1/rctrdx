import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import './App.css';
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
                {id:"as", name: "Max", age: 33},
                {id:"asd", name: "Manu", age: 31},
                {id:"asdf", name: "Steve", age: 32}
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

    nameChangedHandler = (event, id) => {
        //debugger;
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        })
        const person = { ...this.state.persons[personIndex]};
        person.name = event.target.value;
        const prsns = [...this.state.persons];
        prsns[personIndex] = person;
        this.setState({
                persons: prsns
            });
    };

    togglePersonsHandler = () => {
        this.setState({
            showPersons : !this.state.showPersons
        });
    };

    deletePersonHandler = (index) => {
        const prsns = this.state.persons.slice();
        prsns.splice(index, 1);
        this.setState({
            persons: prsns
        });
    }
    
    render (){

        const style = {
            backgroundColor: 'green',
            color: 'while',
            font: 'inherit',
            border: '1px solid green',
            padding: '8px',
            ':hover':{
                    backgroundColor:'blue'
                }
            };
           
        let persons = null;

        if( this.state.showPersons ){
            persons = (<div>
                        {
                            this.state.persons.map((prsn, index) => {
                                return <Person name={prsn.name}
                                            age={prsn.age}
                                            key={prsn.id}
                                            click={() => this.deletePersonHandler(index)}
                                            changed={(event) => this.nameChangedHandler(event, prsn.id)}
                                            >
                                        </Person>;
                            })
                        }
                </div>);
            style.backgroundColor = 'red';
        }
        const appClass = [];
        if(this.state.persons.length <= 2){
            appClass.push('red');
        }
        if(this.state.persons.length <= 1){
            appClass.push('bold');
            style[':hover'] = {border:'solid 4px yellow'}
        }
        return (
        <StyleRoot>
            <div>
                <h1> Hi, I am a React App </h1>
                <p className={appClass.join(' ')}> This is working! </p>
                <button style={style} onClick={ this.togglePersonsHandler } >Switch Name</button>
                { React.Version }

                { persons }

            </div>
        </StyleRoot>
            );
        }
    }
export default Radium(App);


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
