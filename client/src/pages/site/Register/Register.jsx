import React, { useState } from 'react';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      agreeTerms
    });
  };

  return (
    <div className="page-content" style={{ minHeight: '1.8px' }}>
      <div className="holder">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-18 col-lg-12">
              <h2 className="text-center">Create an Account</h2>
              <div className="form-wrapper">
                <p>To access your wishlist, address book and contact preferences and to take advantage of our speedy checkout, create an account with us now.</p>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-sm-9">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-9">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
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
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="clearfix">
                    <input
                      id="checkbox1"
                      name="checkbox1"
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                    />
                    <label htmlFor="checkbox1">
                      By registering your details you agree to our <a href="#" className="custom-color" data-fancybox="" data-src="#modalTerms">Terms and Conditions</a> and <a href="#" className="custom-color" data-fancybox="" data-src="#modalCookies">Cookie Policy</a>
                    </label>
                  </div>
                  <div className="text-center">
                    <button className="btn" type="submit">Create an Account</button>
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

export default Register;
