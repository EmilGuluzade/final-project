import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const QuickLogin = ({  isOpen, setIsOpen}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Can't be blank");
      return;
    }
    // Add login form submission logic here
    console.log({
      email,
      password
    });
  };

  return (
    <div className={ isOpen ? "dropdn-content account-drop quicklogin-wrapper is-opened":"dropdn-content account-drop quicklogin-wrapper is-opened account-close"} id="dropdnAccount">
      <div className="dropdn-content-block">
        <div className="dropdn-close"><span onClick={()=>setIsOpen(false)} className="js-dropdn-close">Close</span></div>
        <ul>
          <li><Link to="/login"><span>Log In</span><i class="fa-thin fa-right-to-bracket icon-login"></i></Link></li>
          <li><Link to="/register"><span>Register</span><i class="fa-regular fa-user icon-user2"></i>  </Link></li>
          <li><Link to="/checkout"><span>Checkout</span> <i class="fa-regular fa-credit-card icon-card"></i></Link></li>
        </ul>
        <div className="dropdn-form-wrapper">
          <h5>Quick Login</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className={`form-control form-control--sm ${emailError ? 'is-invalid' : ''}`}
                placeholder="Enter your e-mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError('');
                }}
              />
              {emailError && <div className="invalid-feedback">{emailError}</div>}
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control form-control--sm"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn">Enter</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuickLogin;
