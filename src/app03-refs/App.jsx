import React from 'react';
import './App.css';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount(){
        console.log('myRef', this.myRef);
        console.log('myRef', this.myRef.current);
    }
    render(){
        return (
            <div ref={this.myRef}>
                ......
            </div>
        );
    }
}