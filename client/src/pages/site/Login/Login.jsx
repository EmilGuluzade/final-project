import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login form submission logic here
    console.log({
      email,
      password
    });
  };

  return (
    <div className="page-content" style={{ minHeight: '1.8px' }}>
      
      <div className="holder">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-18 col-lg-12">
              <h2 className="text-center">Login</h2>
              <div className="form-wrapper">
                <p>To access your wishlist, address book, and contact preferences, log in to your account now.</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                    <button className="btn" type="submit">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
