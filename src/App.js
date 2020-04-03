import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
//import Navbar from './components/Navbar/Navbar';
import Login from "./components/Login/Login";
import Football from './components/Footbals/Football'
import {Route} from 'react-router-dom';
//import Basketball from './components/Profile/Basketball';
import Registration from "./components/Registration/Registration";
import Profile from "./components/Profile/Profile";

// App  - Arrow Function
const App = (props) => {

    return (

        <div className='app-wrapper'>
            <Header/>

            <Route exact  path='/' render={() => < Profile profilePage={props.state.profilePage}
                                                          dispatch={props.dispatch}/>}/>

            <Route path='/football' component={Football}/>
            <Route path='/login' component={Login}/>
            <Route path='/registration' component={Registration}/>


            {/*</div>*/}
            <Footer/>
        </div>

    )
}

export default App;