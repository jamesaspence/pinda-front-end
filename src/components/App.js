'use strict';

import React from 'react';
import logo from '../logo.svg';
import './App.css';
import { connect } from 'react-redux';


const mapStateToProps = state => ({ login: state.login });

const ConnectedApp = ({ login }) => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{login.success ? 'Logged in!' : 'Nah'}</h1>
        </header>
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    </div>
);

export default connect(mapStateToProps)(ConnectedApp);
