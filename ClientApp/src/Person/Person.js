
import React from 'react';
import cssClasses from './Person.css';

const person = (props) => {
   /* const style1 = {
            backgroundColor: 'green',
            color: 'while',
            font: 'inherit',
            border: '1px solid green',
            padding: '8px',
            ':hover':{
                    backgroundColor:'blue'
                }
                }; */
    let rnd = Math.random();
    console.log(rnd);
    if(rnd < 0.7){
        throw new Error('Custom error');
    }
    return(
            <div className={cssClasses.Person} >
                 
                <input type="text" onChange={props.changed} value={props.name} />

                <p onClick={props.click} >
                    I am {props.name} and i am {props.age} 
                    </p>
                <p>
                {props.children}
                    </p>
            </div>
        )
}

export default person;