import React, {useState} from 'react'
// import './SginIn.css'
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { access } from 'fs';
import './login.css';



function SignIn() {
    
    const [data, setData] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [success, setSuccess] = useState(false)
    
    // const fileSelected = event => {
        //   const file = event.target.files[0]
        //       setFile(file)
        //   }
        // const updating = ()=>{
        
        //     if (success) {
        //         console.log(data)
        //         return <Redirect to={{pathname : '/', data : {data}}} />
        //     }
            
        // }

   const sendData = (email,password) => {
        const params = new URLSearchParams();
        // var formData = new FormData();
        params.append('email', email)
        params.append('password', password)
        // params.append('param1', 'value1');
        // params.append('param2', 'value2');
        const data = {'email': email ,"password": password}
        // console.log(params);
        // console.log(password);
        const result =  axios.post('/login', params, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}} )
        .then(function (response) {
            
            
            if(response.data.success){
                setData(response.data)
                setSuccess(true)
                
                
            }

          })
          .catch(function (error) {
            console.log(error);
          });
        // console.log(result.data);
        // return result.data
      }
    const submit = async event =>{
        event.preventDefault()
        await sendData(email,password)
    }
    const redirectFunction = (e)=>{

      console.log("in")
      window.location.replace('/signUp')
    }
    if(success)
    return <Redirect to={{pathname : '/', data : {data}}} />
  
    return (
      <div className="outterDiv">
        <div className="outterDiv__text">
        <h1>Facebook</h1>
        <h2>Facebook helps you connect and share <br></br> with the people in your life.</h2>

        </div>

      <div className="mainDiv">
            <div className="formDiv">
        <form className="signIn__form" onSubmit={submit} action="/login" method="POST">

                <input className="signIn__email" value={email} placeholder="email" onChange={e => setEmail(e.target.value)} type="email"></input>
                <input id="input2"className="signIn_password " value={password} placeholder="password" onChange={e => setPassword(e.target.value)} type="password"></input>
                <button  type="submit" id="button2">Log In</button>
                <hr/>
        </form>
                <button className="btn" onClick={redirectFunction}> Create New Account</button>
            </div> 
        {/* <img src="/images/fe969291cfd4afff960bfdf3baf7452b"></img> */}
           
      </div>
      </div>
    );
  }

export default SignIn;
