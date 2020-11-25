import React,{useState}from 'react';
import history from './history';

function Login() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  
  
  const handleEmailChange = (e) => {
      setEmailInput(e.target.value);
  }
  
  const handlePasswordChange = (e) => {
      setPasswordInput(e.target.value);
  }
  
  const handleLoginSubmit = (e) => {
      e.preventDefault();
      let hardcodedCred = {
          email: 'hruday@gmail.com',
          password: 'hruday123'
      }
  
      if ((emailInput == hardcodedCred.email) && (passwordInput == hardcodedCred.password)) {
          const token = '123456abcdef';
          sessionStorage.setItem('auth-token', token);
          history.push('/Dashboard')
         
      } else {
          //bad combination
          alert('wrong email or password combination');
      }
  }
  
  return (
      <div className="login-page">
          <h2>Login In</h2>
          <form autoComplete="off" onSubmit={handleLoginSubmit}>
              <div className="form-group">
                  <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={emailInput}
                  onChange={handleEmailChange}
                  />
              </div>
              <div className="form-group">
                  <input
                  type="password"
                  autoComplete="new-password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={passwordInput}
                  onChange={handlePasswordChange}
                  />
              </div>
              <button type="submit" className="btn btn-primary">
                  Submit
              </button>
        </form>
      </div>
    );
}

export default Login;
