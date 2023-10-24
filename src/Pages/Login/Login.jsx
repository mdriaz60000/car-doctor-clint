
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {  FaFacebook, FaGoogle } from 'react-icons/fa';

const Login = () => {

  const {signIn, googlelogIn, facebook}  = useContext(AuthContext)

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .catch(error => console.log(error))
    
  };
  

  const handlegoogleLogin = () =>{
    //signInUser user in firebase
    googlelogIn()
    .then((result) => {
      console.log(result.user);
   
    })
    .catch((error) => {
      console.error(error);
   
    });
 }
  const handleFacebook = () =>{
    //signInUser user in firebase
    facebook()
    .then((result) => {
      console.log(result.user);
   
    })
    .catch((error) => {
      console.error(error);
   
    });
 }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" lg:text-left w-1/2 mr-12">
            <img src={img} alt="Login" />
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email" 
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="/forgot-password" className="label-text-alt link link-hover"> 
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button> 
                </div>
              </form>
          <p> place new?<Link className=" text-red-500" to='/register'>Register</Link></p>
          <button onClick={handlegoogleLogin} className="btn btn-outline w-full border rounded-3xl ">
            <FaGoogle></FaGoogle>
            Continue with Google
          </button>
          <button onClick={handleFacebook} className="btn btn-outline w-full border rounded-3xl ">
            <FaFacebook></FaFacebook>
            Continue with Facebook
          </button>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Login;
