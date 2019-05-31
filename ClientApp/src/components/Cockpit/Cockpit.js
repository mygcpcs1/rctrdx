import React from 'react';

import cssClasses from '../../containers/App.css';

const Cockpit = (props) =>{
    let btnClass = '';
    const appClass = [];
    if (props.showPersons) {
        btnClass = cssClasses.red;
    }
    if(props.persons.length <= 2){
        appClass.push(cssClasses.red);
    }
    if(props.persons.length <= 1){
        appClass.push(cssClasses.bold);
    }

    return (
        <div className={cssClasses.App}>
            <h1> Hi, {props.title} </h1>
            <p className={appClass.join(' ')}> This is working! </p>
            <button className={ btnClass } onClick={ props.togglePersons } >Switch Name</button>
        </div>
    );

}

export default Cockpit