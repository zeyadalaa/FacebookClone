import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import StoryReel from "./StoryReel/StoryReel";
import profilePic from "../Sidebar/Formal_Image.jpg";
import postImage from "./StoryReel/background.jpg";
function Feed({firstName, lastName, posts}) {
  return (
    <div className="feed">
      {/*Story Reel*/}
      <StoryReel />

      {/*MessageSender*/}
      <MessageSender firstName={firstName} lastName={lastName} />

      {/*Posts*/}
      {
      posts.map((post)=>{
      let userName = post.firstName + " " + post.lastName;
      let time = new Date().toUTCString() - post.createdAt;
      console.log(post);  
      return <Post
            profilePic={profilePic}
            image={post.img}
            username={userName}
            message={post.content}
            timeStamp={time}
          />
            
           } 
           )
      }
      {/* <Post
        profilePic={profilePic}
        image={postImage}
        username="Ahmed Hany"
        message="First post"
        timeStamp="2 min"
      />
      <Post
        profilePic={profilePic}
        image={postImage}
        username="Ahmed Hany"
        message="First post"
        timeStamp="2 min"
      /> */}
    </div>
  );
}

export default Feed;
