
import React, { Component }  from 'react';
import cssClasses from './Person.css';

class Person extends Component {
    render(){
    console.log('[Person.js] Rendering...')
    return(
            <div className={cssClasses.Person} >
                 
                <input type="text" onChange={this.props.changed} value={this.props.name} />

                <p onClick={this.props.click} >
                    I am {this.props.name} and i am {this.props.age} 
                    </p>
                <p>
                {this.props.children}
                    </p>
            </div>
        )
    }
}

export default Person;