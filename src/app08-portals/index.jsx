import React, {Fragment, useEffect, useState} from 'react';
import reactDOM from 'react-dom';
import './index.css';

export default class App extends React.Component{
    render(){
        return (
            <Fragment>
                <div id='rootTest'><RootApp/></div>
                <div id='modalTest'></div>
            </Fragment>
        );
    }
}

function RootApp(props){

    const [showModal, setShowModal] = useState(false);

    const ModalCom = showModal ? <Modal>
        <div id='modal'>
            Some infomation in Modal
            <button onClick={()=>{setShowModal(false)}}>hide modal</button>
        </div>
    </Modal> : null

    return (
        <div id={'app'}>
            The root div
            <br/>
            <button onClick={()=>{setShowModal(true)}}>show modal</button>
            {ModalCom}
        </div>
    );
}

function Modal (props){

    const modal = document.getElementById('modalTest');
    const el = document.createElement('div');

    useEffect(()=>{
        // modal.appendChild(el);
        // return (()=>{
        //     modal.removeChild(el);
        // });
    }, [])

    return reactDOM.createPortal(
        props.children,
        modal
    );

    // return (
    //     props.children
    // );
}