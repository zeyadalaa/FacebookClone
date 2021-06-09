import React, { useEffect, useState } from 'react'
import Feed from "./Feed/Feed.jsx";
import Header from "./Header/Header.jsx";
import RightSidebar from "./RightSidebar/RightSidebar.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import './Home.css'
import axios from 'axios'
import { get } from 'http';

function Home(props) {
  const [post, setPost] = useState()
  const [act, setAct] = useState()
  const [viewAllPosts, setviewAllPosts] = useState([])
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [label, setLabel] = useState()
  const [profPic, setprofPic] = useState()

    useEffect(()=>{
      console.log("in")
      getPosts()
      setFirstName(props.location.data?.data.result[0].firstName)
      setLastName(props.location.data?.data.result[0].lastName)
    },[])
  
    const sendData = (post,act) =>{
      const params = new URLSearchParams();
       //var params = new FormData();
      params.append('post', post)
      params.append('act', act)

      console.log(act);
      console.log(params.toString());
      if(act!="view")
      {
        
          const result =  axios.post('/posts', params, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}} )
          .then(function (response) {
              console.log(response);
          })
          .catch(function (error) {
              console.log(error);
          });
      }
      else
      {
          const allposts =  axios.get('/allposts')
          .then(function (response) {
              console.log(response.data);
              setviewAllPosts(response.data)
          })
          .catch(function (error) {
              console.log(error);
          });
      }
      // console.log(result.data);
      // return result.data
  }
  const getPosts =  async event =>{
    
    var viewPosts = await sendData(post,"view")
    console.log(viewPosts)

        setviewAllPosts(viewAllPosts)
        setFirstName(props.location.data?.data.result[0].firstName)
        setLastName(props.location.data?.data.result[0].lastName)   
}

    return (
        <div className="home">
             {/*header*/}
             {/* {props.location.data?.data} */}
             {console.log(firstName)}
      <Header firstName={firstName} lastName={lastName}/>
      {/* app body */}
      <div className="home__body">
      {/*side bar*/}
        <Sidebar/>
      {/*feed*/}
        <Feed firstName={firstName} lastName={lastName} posts={viewAllPosts}/>
      {/*RightSidebar*/}
      <RightSidebar/>
        </div>
        </div>
    )
}

export default Home
