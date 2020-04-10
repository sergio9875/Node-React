import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import loginReducer from "./login-reducer";

let reducers = combineReducers({
    profileReducer,
    usersPage: usersReducer,
    loginPage : loginReducer,
});

let store = createStore(reducers);

export default store;