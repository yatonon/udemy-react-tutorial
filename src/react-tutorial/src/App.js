import React, {Component} from 'react';
import propTypes from 'prop-types';

const App = () => {
    const profiles=[
        {name: "taro", age: 10},
        {name: "hanako", age: 10},
        {name: "moe"}
    ]
    return (
        <div>
            {
                profiles.map((profile, index) => {
                    return <User name={profile.name} age={profile.age} key={index}/>
                })
            }
            <Counter></Counter>
        </div>
    )
}

const User = (props) => {
    return <div>Meow! {props.name}, age = {props.age}</div>
}

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = { count: 0}
    }
    handlePlusButton = () => {
        const count = this.state.count + 1
        this.setState(
            {count: count}
        )
    }
    render(){
        return(
            <div>
                <div>counter = {this.state.count}</div>
                <button onClick={this.handlePlusButton}>+1</button>
                <button>-1</button>
            </div>
        )
    }
}
User.defaultProps = {
    age: 1
}
User.propTypes = {
    name: propTypes.string
}
export default App;
