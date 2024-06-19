import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../../../context/context';
import controller from '../../../services/api/requests';
import { endpoints } from '../../../services/api/constants';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const AccountDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const [userInfo, setUserinfo] = useState([]);

  const [formData, setFormData] = useState({
    firstName: 'Jenny',
    lastName: 'Raider',
    email: 'jennyraider@hotmail.com',
    phone: '876-432-4323',
  });
const {user}=useContext(MainContext)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false); 
  };

  useEffect( ()=>{
async function getUser() {
  const response=await controller.getOne(endpoints.users,user.id)

setUserinfo(response.data)
}
getUser()
  },[])
  return (
    <div className="holder">
      <Helmet>
            <title> AccountDetails</title>
        </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-3 aside aside--left">
            <div className="list-group">
              <Link to="/accountdetails" className="list-group-item active">Account Details</Link>
              <Link to="/wishlist" className="list-group-item">My Wishlist</Link>
              <Link to="/order" className="list-group-item">My Order History</Link>

            </div>
          </div>
          <div className="col-5 aside">
            <h1 className="mb-3">Account Details</h1>
            <div className="row vert-margin">
              <div className="col-sm-9">
                <div className="card">
                  <div className="card-body">
                    <h3>Personal Info</h3>
                    <b>Name:</b> {userInfo.username}<br />
                      <b>E-mail:</b> {userInfo.email}<br />
                      <b>Role:</b> {userInfo.role} <br />
                      <b>Ban Count:</b> {userInfo.banCount}<br />
                      <b>Created At:</b> {userInfo.createdAt}<br />
                    <div className="mt-2 clearfix">
                      <a href="#" className="link-icn" onClick={() => setShowForm(true)}> Edit<i class="fa-thin fa-user-pen icon-pencil mx-2"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {showForm && (
              <div className="card mt-3" id="updateDetails">
                <div className="card-body">
                  <h3>Update Account Details</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row mt-2">
                      <div className="col-sm-9">
                        <label className="text-uppercase">First Name:</label>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control--sm"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="Jenny"
                          />
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <label className="text-uppercase">Last Name:</label>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control--sm"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Raider"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-sm-9">
                        <label className="text-uppercase">E-mail:</label>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control--sm"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="jennyraider@hotmail.com"
                          />
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <label className="text-uppercase">Phone:</label>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control--sm"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="876-432-4323"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <button
                        type="button"
                        className="btn btn--alt"
                        onClick={() => setShowForm(false)}
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn ml-1">Update</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
          <div className="col-4 aside">
          <img src={userInfo.src} alt="" style={{width:"300px",height:"300px",borderRadius:"50%",objectFit:"cover",objectPosition:"top"}}  />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;

