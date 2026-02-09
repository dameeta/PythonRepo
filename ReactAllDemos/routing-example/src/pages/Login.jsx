import {useNavigate} from "react-router-dom"
const Login = () =>{
  const navigate = useNavigate();
  const handleLogin = () =>{

    navigate("/dashboard");
  };
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
export default Login;