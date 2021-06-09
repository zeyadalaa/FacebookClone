import axios from 'axios';
import React,{useState} from 'react'
import { Link, Redirect } from 'react-router-dom';
// import './SignUp.css'
import './login.css'




function SignUp() {
  const [success, setSuccess] = useState(false)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [dob, setDOB] = useState()
  
  function sendData(email,password, firstName, lastName, dob) {
    const params = new URLSearchParams();

    // var formData = new FormData();
    params.append('email', email)
    params.append('password', password)
    params.append('firstName',firstName)
    params.append('lastName', lastName)
    params.append('dob', dob)
    // params.append('param1', 'value1');
    // params.append('param2', 'value2');
    const data = {'email': email ,"password": password}
    console.log(params);
    // console.log(password);
    const result =  axios.post('/signUp', params, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}} )
    .then(function (response) {
        console.log(response);
        setSuccess(true)
                
        
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log(result.data);
    // return result.data
  }
  
    // const fileSelected = event => {
    //   const file = event.target.files[0]
    //       setFile(file)
    //   }
    const submit = async event =>{
        event.preventDefault()
        await sendData(email,password, firstName, lastName, dob)
    }
    const redirectFunction = (e)=>{

      console.log("in")
      window.location.replace('/signIn')
    }

    return (
      <div className="mainDiv__signUp">
        <div>

        <form onSubmit={submit} action="/signUp" method="POST">
        <h2>Sign Up</h2>
                        <label id='sub' >It's quick and easy</label>
<hr/>
            <div className="nameDiv">

                <input className="nameField" placeholder="first name" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} required></input>
                <input className="nameField" placeHolder= "last name"type="text" value={lastName} onChange={e => setLastName(e.target.value)}required></input>
               </div> 

                <input placeholder= "email" type="email" value={email} onChange={e => setEmail(e.target.value)} required></input>
                
                <input  placeholder= "password" type="password" value={password} onChange={e => 
                { if(e.target.value.length < 8){

                  document.getElementById("alert").style.display = "visible";
                  setPassword(e.target.value) 
                }
                   else{
                  document.getElementById("alert").style.display = "none";

                  setPassword(e.target.value)}
                } }
                 required></input>
                <p id="alert" stayle={{display: "none"}}> password must be greater than 8 charchters</p>
                <div>
                  <label id="dob">Date of Birth</label>
                <input type="date" value={dob} onChange={e => setDOB(e.target.value)} required></input>
                </div>
                
                
                <button type="submit" style={{ width: "100%",
    backgroundColor: "#1877f2",
    color:" white",
    padding:" 14px 20px",
    margin:"8px 0px",
    border:" none",
    borderRadius:"4px",
    cursor:"pointer"}}>Sign Up</button>
                <hr/>


        </form>
            <div>
              <button className="btn" onClick={redirectFunction}>Log In</button>
            </div>
        {/* <img src="/images/fe969291cfd4afff960bfdf3baf7452b"></img> */}
        </div>
  
      </div>
    );
  }
  
  export default SignUp;





// import axios from 'axios';
// import React,{useState} from 'react'
// import { Link } from 'react-router-dom';
// import './SignUp.css'
// function sendData(email,password,firstName,lastName) {
//     const params = new URLSearchParams();
//     // var formData = new FormData();
//     params.append('email', email)
//     params.append('password', password)
//     params.append('firstName', firstName)
//     params.append('lastName', lastName)
//     // params.append('param1', 'value1');
//     // params.append('param2', 'value2');
//     // const data = {'email': email ,"password": password,'lastName': lastName,'firstName': firstName}
//     console.log(data)
//     console.log(params);
//     console.log(password);
//     // console.log(params);
//     const result =  axios.post('/signUp', params, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}} )
//     .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//     // console.log(result.data);
//     // return result.data
//   }

// function SignUp() {

//     const [email, setEmail] = useState()
//     const [password, setPassword] = useState()
//     const [firstName, setFirstName] = useState()
//     const [lastName, setLastName] = useState()
  
//     // const fileSelected = event => {
//     //   const file = event.target.files[0]
//     //       setFile(file)
//     //   }
//     const submit = async event =>{
//         event.preventDefault()
//         await sendData(email,password,firstName,lastName)
//     }
 
    
// /**-------------------------------------------------- */


//     // const [state, setstate] = useState({
//     //     firstName: "",
//     //     lastName: "",
//     //     DOP:"",
//     //     email:""
//     // });
//     // const handleChange = (e) => {
//     //     setstate({
//     //         [e.target.name] : e.target.value,
//     //     })
//     // }
//     // const handleSubimt = (e) => {
//     //     // e.preventDefault();

//     //     const {firstName, lastName, DOP, email} = state;
//     //     const data = {
//     //         firstName,
//     //         lastName,
//     //         DOP,
//     //         email
//     //     }

//     //     axios.post('http://localhost:5000/signUp', data)
//     //     .then(()=> console.log("Data delivered"))
//     //     .catch( err => console.log(err) );

    
//     return (
//         <div className="signUp">
//             <form className="signUp__form" onSubmit={submit} action='/signUp' method='POST'>
//                 <input type="text" name="firstName"onChange={e=> setFirstName(e.target.value)}  placeholder="first name"/>
//                 <input type="text" name="lastName"onChange={e=> setLastName(e.target.value)}  placeholder="last name"/>
//                 <input type="date" name="dop"  id="date" />
//                 <input type="email" name="email" onChange={e=> setEmail(e.target.value)} placeholder="email"/>
//                 <input type="password" name="password" onChange={e=> setPassword(e.target.value)} />
//                 {/* <Link to={'/'}> */}
//                 <button type="submit"> Sign up</button>
//                 {/* </Link> */}
//                 <Link to={'/signIn'}>
//                     <p className="signUp__signInLink">
//                         Already Have an Account?
//                     </p>
//                 </Link>
//             </form>
//         </div>
//     )
// }

// export default SignUp
