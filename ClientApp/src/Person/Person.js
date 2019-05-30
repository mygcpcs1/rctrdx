
import React from 'react';
import Radium from 'radium';
import './Person.css';

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
    const style1 = {
                '@media (min-width: 500px)': {
                    width: '100%',
                    backgroundColor: "orange"
                }
        };
    return(
        <div className="Person" style={style1}>
             
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

export default Radium(person);