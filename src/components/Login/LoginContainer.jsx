import {updateLoginTextActionCreator, addLoginActionCreator} from '../../redux/login-reducer'
import {connect} from "react-redux";
import Login from "./Login";


let mapStateToProps = (state) => {
    return {
        login : state.loginPage.login,
        loginText : state.loginPage.loginText

    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        addLogin : () => {
            dispatch(addLoginActionCreator())
        },
        updateLoginText : (text)=> {
            let action = updateLoginTextActionCreator(text)
            dispatch(action)    }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);

