import React from "react";
import Content from "./Content.component"


export default class Board extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            step: 0
        };
    }

    next = ()=> {
        const newStep = this.state.step + 1;
        this.setState({step: newStep});
    }

    previous = ()=> {
        const newStep = this.state.step - 1;
        this.setState({step: newStep});
    }

    render(){
        return (
            <div>
                This is my Board
                <button onClick={this.previous}>Précedent</button>
                <button onClick={this.next}>Suivant</button>
                <Content  content={<div>first ever content</div>}/>
            </div>
        );
    }
}