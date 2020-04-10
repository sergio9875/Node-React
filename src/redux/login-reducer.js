const ADD_LOGIN  = 'ADD-LOGIN';
//const ADD_PASSWORD = 'ADD-PASSWORD'

const UPDATE_LOGIN_TEXT = 'UPDATE-NEW-LOGIN-TEXT';

let initialState = []


const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_LOGIN : {

            let newPost = 'Kali';

            let stateCopy = {...state};
           // stateCopy.login = [...state.login]
            //stateCopy.push(newPost);
           // stateCopy.loginText = "";

            return stateCopy;
        }
        case  UPDATE_LOGIN_TEXT : {
            debugger;
            let stateCopy = {...state};
            stateCopy.loginText = action.newText;
            return stateCopy;
        }
        default :
            return state;

    }


}

export const addLoginActionCreator = () => {
    return {
        type: ADD_LOGIN
    }
}

export const updateLoginTextActionCreator = (text) => {
    return {
        type: UPDATE_LOGIN_TEXT, newText: text
    }
}
export default loginReducer;