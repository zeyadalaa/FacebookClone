  
import { useState } from 'react'
import axios from 'axios'



function Poststest() { 
    const [post, setPost] = useState()
    const [act, setAct] = useState()
    const [viewAllPosts, setviewAllPosts] = useState([])

    const sendData =(post,act) =>{
        const params = new URLSearchParams();
        // var formData = new FormData();
        params.append('post', post)
        params.append('act', act)
        // const data = {'email': email ,"password": password}
        console.log(post);
        console.log(act);
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
            const allposts =  axios.get('/')
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

  
    // const fileSelected = event => {
    //   const file = event.target.files[0]
    //       setFile(file)
    //   }
    const submit = async event =>{
        event.preventDefault()
        var viewPosts = await sendData(post,act)
        // console.log(viewPosts)

            setviewAllPosts(viewAllPosts)
        
    }
  
    return (
      <div className="App">
        <form onSubmit={submit} action="/register" method="POST">
            <div>

                <input value={post} onChange={e => setPost(e.target.value)} type="text"></input>
                <br></br>
                <button type="submit" onClick={e=> setAct(e.target.value)} value="post">create </button>
                <br></br>
                <button type="submit" onClick={e=> setAct(e.target.value)} value="delete">delete</button>
                <br></br>
                <button type="submit" onClick={e=> setAct(e.target.value)} value="update">update</button>
                <br></br>
                <button type="submit" onClick={e=> setAct(e.target.value)} value="view">view</button>

            </div>
        </form>

        {/* <p>{viewAllPosts[0].content}</p>
        <div>{viewAllPosts.map( onePost =>{
             <div>
                <p>{onePost.content}</p>
                <p>{onePost.createdAt}</p>
            </div>
        })}</div> */}
        {/* <img src="/images/fe969291cfd4afff960bfdf3baf7452b"></img> */}
  
      </div>
    );
  }
  
  export default Poststest;