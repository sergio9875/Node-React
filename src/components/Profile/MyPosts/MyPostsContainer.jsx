import React from 'react';
import {addPostActionCreator, updateNewPosTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStatetoProps = (state) => {
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

const SuperDialogContainer = connect(mapStatetoProps,mapDispatchToProps)(MyPosts);

export default SuperDialogContainer;