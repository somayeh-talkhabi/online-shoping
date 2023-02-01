import { Link } from "react-router-dom";
import { productsContext } from "./context/product-context";
import { useContext } from "react";

function Register() {
  const productContext = useContext(productsContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    productContext.setErrors(validation());
  };

   const handleChange = (e) => {
     productContext.setuserInfo({
       ...productContext.userInfo,
       [e.target.name]: e.target.value,
     });
   };
  const validation = () => {
    let errors = {};
    // const emailRegEx  = new RegExp("/^([A-Zd.-]+)@([A-Zd.-]+).([A-Z]{2-5})$/i"); 
    const emailRegEx = new RegExp("/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i"); 
    const passwordRegEx = new RegExp("/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=]).{8,32}$/i"); 
    
    console.log(emailRegEx .test(productContext.userInfo.email));
    
    console.log(emailRegEx);
    console.log(productContext.userInfo.email);
    if (productContext.userInfo.email === "") {
      errors.name = "email required";
    }
    else if (!emailRegEx.test(productContext.userInfo.email)) {
      errors.name = "email address is invalid";
    }
    if (productContext.userInfo.password === "") {
      errors.password = "password required";
    }
    else if(!passwordRegEx.test(productContext.userInfo.password)){
      errors.password = "at least one digit";
    }
    else if (productContext.userInfo.password.length < 8) {
      errors.password = "password must be more than 8 words";
    }
    return errors;
  };
 
  return (
    <div className="login-main">
      <div className="login-container">
        <p className="fw-bolder">Register here</p>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label htmlFor="username">Email</label>

            <input
              onChange={handleChange}
              type="text"
              name="email"
              class="form-control"
              id="username"
              placeholder="Enter email"
            />
            <p className="error-text">{productContext.errors.name}</p>
          </div>
          <div class="form-group">
            <label htmlFor="password">PassWord</label>
            <input
              onChange={handleChange}
              type="text"
              name="password"
              class="form-control"
              id="password"
              placeholder="Enter password"
            />
            <p className="error-text">{productContext.errors.password}</p>
          </div>
          <div class="form-group">
            <label htmlFor="confirm">Confirm PassWord</label>
            <input
              type="text"
              class="form-control"
              id="confirm"
              placeholder="Reapet password"
            />
          </div>
          <input type="submit" name="" id="" className="btn btn-dark my-2" />
          <Link className="switch-btn" to={"/login"}>
            already have an account? click to login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
