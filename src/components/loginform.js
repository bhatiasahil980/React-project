import React from 'react';
import "./loginform.css"

const LoginForm = () => {
  return (
    <div className="body">
     <div className="cover">
      <h1>Login</h1>
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      
      <div className="login-btn">Submit</div>
      

    </div>
    </div>
  )
}

export default LoginForm