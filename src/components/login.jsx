import { Link } from "react-router-dom";

const handleSubmit =(e)=>{
  e.preventDefault();
}
const handleChange =()=>{
  
}

function Login() {
  return (
    <div className="login-main">
      <div className="login-container">
        <p className="fw-bolder">Login here</p>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label htmlFor="username">Email</label>

            <input
              onChange={handleChange}
              type="text"
              class="form-control"
              id="username"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label htmlFor="password">PassWord</label>
            <input
              onChange={handleChange}
              type="text"
              class="form-control"
              id="password"
              placeholder="Enter password"
              name="password"
            />
          </div>

          <input type="submit" name="" id="" className="btn btn-dark my-2" />
          <Link className="switch-btn" to={"/register"}>
            Dont have an account? click to Register
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
