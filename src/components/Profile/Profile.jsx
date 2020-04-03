import React from 'react';
import MyPosts from './MyPosts/MyPosts'
// import Basketball from './Basketball'

const Profile = (props) => {

    return (
        <div >
            {/*<Basketball />,*/}
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}  // - value in textarea
                     dispatch={props.dispatch} />
        </div>
    )
}
export default Profile;