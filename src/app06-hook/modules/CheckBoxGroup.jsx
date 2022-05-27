import React from 'react';

export default class CheckBoxGroup extends React.Component{

    render(){
        return (
            ['aa', 'bb'].map((item, index)=>{
                return <CheckBox key={index}/>
            })
        );
    }
}

function CheckBox(props){
    return (
        <input
            type='checkbox'
        />
    );
}