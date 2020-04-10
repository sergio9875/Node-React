import React from "react";
import Post from './Post/Post';
import './MyPosts.css';


const MyPosts = (props) => {


    let postsElement = props.posts.map((p, index) =>
        < Post key={index} message={p.message}/>)

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);

    }

    return (
        <div className="myPosts">
            My Posts
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <button onClick={onAddPost}>Add Post</button>
            </div>

            <div className='posts'>

                {postsElement}


            </div>

        </div>

    )
}
export default MyPosts;