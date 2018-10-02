import React from 'react';
import logo from '../logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { attemptLogin } from '../actions';


const mapStateToProps = state => ({ login: state.login });

const mapDispatchToProps = dispatch => ({
    attemptLogin: () => dispatch(attemptLogin())
});

class ConnectedApp extends React.Component {
    componentDidMount() {
        setInterval(() => {
            this.props.attemptLogin();
        }, 2000);
    }

    render() {
        const { login } = this.props;
        return(
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
    }
}

// const ConnectedApp = ({ login }) => (
//     <div className="App">
//         <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <h1 className="App-title">{login.success ? 'Logged in!' : 'Nah'}</h1>
//         </header>
//         <p className="App-intro">
//             To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//     </div>
// );

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);
