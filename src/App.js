import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';


class App extends Component {
    render(){
        return(
          <div className="container">
            <>
            <Header />
              <div className="profile">
                <Profile />
              </div>
            </>
          </div>
        );
    }
}

export default App;
