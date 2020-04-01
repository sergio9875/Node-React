import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
//import Navbar from './components/Navbar/Navbar';
import Login from "./components/Login/Login";
//import Football from './components/Footbals/Football'
import {  Route } from 'react-router-dom';
//import Basketball from './components/Profile/Basketball';
import Registration from "./components/Registration/Registration";

// App  - Arrow Function
const App = () => {
  return (

        <div className='app-wrapper'>
          <Header />
          {/*<Navbar />*/}
          {/*<div className='app-wrapper-content'>*/}
            {/*<Route exact path='/football' component={Football} />*/}
            {/*<Route path='/basketball' component={Basketball} />*/}
            <Route path='/login' component={Login} />
            <Route path='/registration' component={Registration} />


          {/*</div>*/}
          <Footer />
        </div>

  )
}

export default App;