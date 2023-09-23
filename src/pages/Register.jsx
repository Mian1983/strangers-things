import { useState } from "react"
import AuthForm from "../components/AuthForm"
import { registerUser } from "../API"
import { useNavigate } from "react-router-dom"

const Register = ({ token, setToken}) => {
  const navigate = useNavigate();
    
  async function handleSubmit(e, username, password) {
    e.preventDefault()
    const token = await registerUser(username, password);
    setToken(token);
    localStorage.setItem('token', token);
    navigate('/');
  }
  if (token) {
    navigate('/');
  }
  return (
    <div>
      <h1>Register</h1>
      <AuthForm buttonText="Register" handleSubmit={handleSubmit} />
    </div>
  )
}

export default Register;