import React, { Component } from 'react';
import './App.css';
class Tweet extends Component({ name, message, tagline }) {
    reender() {
        return (
            <div className='tweet' >
                <h1>{name}</h1>
                <p>{message}</p>
                <h3>{tagline}</h3>
            </div>
        )
    }
}
export default Tweet; 