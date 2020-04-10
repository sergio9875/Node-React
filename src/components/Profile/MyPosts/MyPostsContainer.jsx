import {addPostActionCreator, updateNewPosTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
return {
    posts : state.profileReducer.posts,
    newPostText : state.profileReducer.newPostText

}

}
let mapDispatchToProps = (dispatch) => {
return {
    addPost : () => {
     dispatch(addPostActionCreator())
    },
    updateNewPostText : (text)=> {
        let action = updateNewPosTextActionCreator(text)
        dispatch(action)    }
}
}

const SuperDialogContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default SuperDialogContainer;