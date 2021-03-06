import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Login from "./components/Login/Login";
import Football from './components/Footbals/Football'
import {Route} from 'react-router-dom';
//import Basketball from './components/Profile/Basketball';
import Registration from "./components/Registration/Registration";
import Profile from "./components/Profile/Profile";
import UsersContainer from "./components/Users/UsersContainer";
import LoginContainer from "./components/Login/LoginContainer";


// App  - Arrow Function
const App = () => {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">

                <Route exact  path='/' render={() => < Profile />}/>

                <Route path='/football' component={Football}/>
                <Route path='/login' component={LoginContainer}/>
                <Route path='/registration' component={Registration}/>
                <Route path='/users'
                       render={ () => <UsersContainer /> } />


            </div>
            {/*<div className='app-wrapper-content'>*/}



            {/*</div>*/}
            <Footer/>
        </div>

    )
}

export default App;