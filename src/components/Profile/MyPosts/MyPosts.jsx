import React from 'react';
import Post from './Post/Post'
import './MyPosts.css';
import {addPostActionCreator, updateNewPosTextActionCreator} from '../../../redux/profile-reducer';


const MyPosts = (props) => {

    let postsElement = props.posts.map((p, index) =>
        < Post key={index} message={p.message}/>)

    let addPost = () => {

        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (e) => {
        let text = e.target.value;

        let action = updateNewPosTextActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className="myPosts">
            My Posts
            <div>
                <div>
                    <textarea onChange={onPostChange}  value={props.newPostText}/>
                </div>
                <button onClick={addPost}>Add Post</button>
            </div>

            <div className='posts'>

                {postsElement}


            </div>

        </div>

    )
}
export default MyPosts;