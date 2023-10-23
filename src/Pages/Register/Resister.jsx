import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";

const Resister = () => {

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password, name);
      };

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" lg:text-left w-1/2 mr-12">
            <img src={img} alt="Login" />
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-5xl font-bold">Register now!</h1>
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name" 
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
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
          <p> already account?<Link className=" text-red-500" to='/login'>Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Resister;