import { useState } from "react"
import AuthForm from "../components/AuthForm"
import { loginUser } from "../API"
import { useNavigate } from "react-router-dom"

const Login = ({ token, setToken }) => {
  const navigate = useNavigate();

  async function handleSubmit(e, username, password) {
    e.preventDefault()

    const token = await loginUser(username, password);
    setToken(token);
    localStorage.setItem('token', token);
    navigate('/');
  }
  if (token) {
    navigate('/');
  }
  return (
    <div>
        <h1>Login</h1>
        <AuthForm buttonText="Login" handleSubmit={handleSubmit} />
    </div>
  )
}

export default Login;