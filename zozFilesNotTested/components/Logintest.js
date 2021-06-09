  
import { useState } from 'react'
import axios from 'axios'


function sendData(email,password) {
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
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log(result.data);
    // return result.data
  }

function Logintest() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
  
    // const fileSelected = event => {
    //   const file = event.target.files[0]
    //       setFile(file)
    //   }
    const submit = async event =>{
        event.preventDefault()
        await sendData(email,password)
    }
  
    return (
      <div className="App">
        <form onSubmit={submit} action="/login" method="POST">
            <div>

                <input value={email} onChange={e => setEmail(e.target.value)} type="text"></input>
                <br></br>
                <input value={password} onChange={e => setPassword(e.target.value)} type="text"></input>
                <br></br>
                <button type="submit">Submit</button>

            </div>
        </form>
        {/* <img src="/images/fe969291cfd4afff960bfdf3baf7452b"></img> */}
  
      </div>
    );
  }
  
  export default Logintest;