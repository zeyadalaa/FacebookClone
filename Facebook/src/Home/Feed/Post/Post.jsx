import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PublicIcon from '@material-ui/icons/Public';
function Post({profilePic, image, username, timeStamp, message,label}) {
    return (
        <div className="post">
            <div className="post__top">
            <Avatar src={profilePic}/>
            <div className="post__topInfo">
                <h3>{username}</h3>
                {/* <p>{new Date(timeStamp?.toDate()).toUTCString()}</p> */}
                <p>{timeStamp} · <PublicIcon style={{fontSize:"medium"}}/></p>
                </div>
            </div>
            <div className="post__data">
            <p>{message}</p>
            <br></br>
            <p>Content in this photo is : {label}</p>
            </div>
            <div className="post__image">
                <img src={image} alt=""/>
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpOutlinedIcon/>
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeOutlinedIcon/>
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon/>
                    <ExpandMoreOutlinedIcon/>
                </div>


            </div>
                

        </div>
    )
}

export default Post;
