import React from 'react';
import Person from './Person/Person';

const Persons = (props) => {

    const deletePersonHandler = (index) => {
        const prsns = props.persons.slice();
        prsns.splice(index, 1);
        props.setPersons(prsns);
        /*
            this.setState({
            persons: prsns
            });
            */
    }
    const nameChangedHandler = (event, id) => {
        //debugger;
        const personIndex = props.persons.findIndex(p => {
            return p.id === id
        })
        const person = { ...props.persons[personIndex]};
        person.name = event.target.value;
        const prsns = [...props.persons];
        prsns[personIndex] = person;
        props.setPersons(prsns);
        /*
        this.setState({
                persons: prsns
                });
                */
    };
    return (<div>
                {
                    props.persons.map((prsn, index) => {
                        return <Person name={prsn.name}
                                    age={prsn.age}
                                    key={prsn.id}
                                    click={() => deletePersonHandler(index)}
                                    changed={(event) => nameChangedHandler(event, prsn.id)}
                                    >
                                </Person>;
                    })
                }
            </div>);
}

export default Persons