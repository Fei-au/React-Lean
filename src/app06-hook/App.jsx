import React, {useEffect, useState} from 'react';
// import FriendStatus from './modules/FriendStatus';
import './App.css';
import CheckBoxGroup from './modules/CheckBoxGroup';


function Example(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Marry');
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState('');

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })

    useEffect(() => {
        document.title = `You name is ${name}`;
    })

    function handleName(e) {
        setName(e.target.value);
    }

    function handleInput(name, e){
        if(name === 'age'){
            setAge(e.target.value);
        }else if(name === 'address'){
            setAddress(e.target.value);
        }
    }
    return (
        <>
        <CheckBoxGroup/>
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count + 1)}}>
                Click me
            </button>
        </div>

        <div>
            <p>Name</p>
            <input onChange={handleName} value={name}/>
        </div>
        <div>
            <p>Age</p>
            <input onChange={(e)=>handleInput('age', e)} value={age}/>
        </div>
        <div>
            <p>Address</p>
            <input onChange={(e)=>handleInput('address', e)} value={address}/>
        </div>

        </>
    );
}

export default Example;