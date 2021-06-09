import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import { Link, Redirect } from 'react-router-dom';
import AttachmentOutlinedIcon from "@material-ui/icons/AttachmentOutlined";
import VideoCamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import axios from 'axios'



function MessageSender({firstName, lastName}) {
  
    const [input, setInput] = useState("");
    const [file, setFile] = useState()
    const [description, setDescription] = useState("")
    const [images, setImages] = useState([])
    const [success, setSuccess] = useState(false)
    
    async function postImage({image, description, firstName, lastName, input}) {
      const formData = new FormData();
      formData.append("image", image)
      formData.append("description", description)
      // formData.append("firstName", firstName)
      // formData.append("lasrName", lastName)
      // formData.append("content", content)
      // formData.append("act","post")
      const params = new URLSearchParams();
      // var formData = new FormData();
      params.append("firstName", firstName)
      params.append("lastName", lastName)
      params.append("content", input)
      params.append("act","post")
      console.log(params)
      console.log(params.toString())
      const result = await axios.post('/images', formData, { headers: {'Content-Type': 'multipart/form-data'}})
      console.log(result.data.imagePath);
      params.append('img', result.data.imagePath)
      const result2 = await axios.post('/posts',params, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}} )
      setSuccess(true)
      return result.data
    }
      
    const fileSelected = event => {
      const file = event.target.files[0]
          setFile(file)
      }
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("in")
      const result = await postImage({image: file, description, firstName, lastName, input})
      setImages([result.image, ...images])
      //some db logic
      console.log("after")
      setInput('');
      return
    };
    if(success){
      let data = {firstName, lastName}
      console.log("this is data")
      console.log(data);
      setSuccess(false);
      window.location.reload()
    }

  
    return (
    <div className="messageSender">
        <form>
      <div className="messageSender__top">
        <Avatar />
          <input
            value={input}
            className="messageSender__input"
            id="inputField"
            type="text"
            placeholder="What's on your mind?"
            onChange={(e) => setInput(e.target.value)}
          />
          {/* <AttachmentOutlinedIcon/>
            <input type="file"/> */}
          {/* <input
            placeholder=" URL of image"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          /> */}
         

          <button onClick={handleSubmit} type="submit" style={{display: "none"}}>
            Hidden Submit
          </button>
        
      </div>
      <div className="sep"></div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideoCamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
        <label for="fileUpload" style={{display: "flex"}} >
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3 style={{fontSize:"medium"}}>Photo/Video</h3>
          </label>
         <input id="fileUpload" onChange={fileSelected} style={{display : "none"}} type="file" accept="image/*"></input>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
        
      </div>
      </form>
  
    </div>
  );
}

export default MessageSender;
