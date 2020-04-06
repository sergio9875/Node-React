const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts:
        [
            {id: 1, message: 'How are You?'},
            {id: 2, message: 'My First Post'},


        ],
    newPostText: ' '
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                id: 3, message: state.newPostText,
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";

            return stateCopy;
    }
        case  UPDATE_NEW_POST_TEXT : {
        let stateCopy = {...state};
        stateCopy.newPostText = action.newText;
        return stateCopy;
    }
        default :
            return state;

    }


}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPosTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}
export default profileReducer;