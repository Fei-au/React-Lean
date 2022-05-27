import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default function App (props){
    
    return(
        <div>hello {props.name}!</div>
    )
}

App.propTypes  = {
    name: PropTypes.string
}

App.defaultProps = {
    name: 'xiaodddming'
}