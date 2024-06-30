import React from 'react';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faLaptop, faPlay, faTable, faChartBar, faIcons, faShieldAlt, faFileAlt, faEllipsisV, faCog, faKey, faListAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar sidebar-offcanvas" id="sidebar">
      <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
        <a className="sidebar-brand brand-logo" href="index.html"><img src="assets/images/logo.svg" alt="logo" /></a>
        <a className="sidebar-brand brand-logo-mini" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
      </div>
      <Nav className="flex-column">
        <Nav.Item className="nav-item profile">
          <div className="profile-desc">
            <div className="profile-pic">
              <div className="count-indicator">
                <Image className="img-xs rounded-circle" src="assets/images/faces/face15.jpg" alt="" />
                <span className="count bg-success"></span>
              </div>
              <div className="profile-name">
                <h5 className="mb-0 font-weight-normal">Henry Klein</h5>
                <span>Gold Member</span>
              </div>
            </div>
            <NavDropdown title={<FontAwesomeIcon icon={faEllipsisV} />} id="profile-dropdown">
              <NavDropdown.Item href="#">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <FontAwesomeIcon icon={faCog} className="text-primary" />
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject ellipsis mb-1 text-small">Account settings</p>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <FontAwesomeIcon icon={faKey} className="text-info" />
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject ellipsis mb-1 text-small">Change Password</p>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <FontAwesomeIcon icon={faListAlt} className="text-success" />
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject ellipsis mb-1 text-small">To-do list</p>
                </div>
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Nav.Item>
        <Nav.Item className="nav-category">
          <span className="nav-link">Navigation</span>
        </Nav.Item>
        <Nav.Item className="nav-item menu-items active">
          <Nav.Link href="index.html">
            <span className="menu-icon">
              <FontAwesomeIcon icon={faTachometerAlt} />
            </span>
            <span className="menu-title">Dashboard</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item menu-items">
          <Nav.Link eventKey="ui-basic" data-toggle="collapse" aria-expanded="false" aria-controls="ui-basic">
            <span className="menu-icon">
              <FontAwesomeIcon icon={faLaptop} />
            </span>
            <span className="menu-title">Basic UI Elements</span>
            <FontAwesomeIcon icon={faChevronDown} className="menu-arrow" />
          </Nav.Link>
          <Nav.Collapse id="ui-basic">
            <Nav className="flex-column sub-menu">
              <Nav.Item className="nav-item"> <Nav.Link href="pages/ui-features/buttons.html">Buttons</Nav.Link></Nav.Item>
              <Nav.Item className="nav-item"> <Nav.Link href="pages/ui-features/dropdowns.html">Dropdowns</Nav.Link></Nav.Item>
              <Nav.Item className="nav-item"> <Nav.Link href="pages/ui-features/typography.html">Typography</Nav.Link></Nav.Item>
            </Nav>
          </Nav.Collapse>
        </Nav.Item>
        <Nav.Item className="nav-item menu-items">
          <Nav.Link href="pages/forms/basic_elements.html">
            <span className="menu-icon">
              <FontAwesomeIcon icon={faPlay} />
            </span>
            <span className="menu-title">Form Elements</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item menu-items">
          <Nav.Link href="pages/tables/basic-table.html">
            <span className="menu-icon">
              <FontAwesomeIcon icon={faTable} />
            </span>
            <span className="menu-title">Tables</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item menu-items">
          <Nav.Link href="pages/charts/chartjs.html">
            <span className="menu-icon">
              <FontAwesomeIcon icon={faChartBar} />
            </span>
            <span className="menu-title">Charts</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item menu-items">
          <Nav.Link href="pages/icons/mdi.html">
            <span className="menu-icon">
              <FontAwesomeIcon icon={faIcons} />
            </span>
            <span className="menu-title">Icons</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item menu-items">
          <Nav.Link eventKey="auth" data-toggle="collapse" aria-expanded="false" aria-controls="auth">
            <span className="menu-icon">
              <FontAwesomeIcon icon={faShieldAlt} />
            </span>
            <span className="menu-title">User Pages</span>
            <FontAwesomeIcon icon={faChevronDown} className="menu-arrow" />
          </Nav.Link>
          <Nav.Collapse id="auth">
            <Nav className="flex-column sub-menu">
              <Nav.Item className="nav-item"> <Nav.Link href="pages/samples/blank-page.html">Blank Page</Nav.Link></Nav.Item>
              <Nav.Item className="nav-item"> <Nav.Link href="pages/samples/error-404.html">404</Nav.Link></Nav.Item>
              <Nav.Item className="nav-item"> <Nav.Link href="pages/samples/error-500.html">500</Nav.Link></Nav.Item>
              <Nav.Item className="nav-item"> <Nav.Link href="pages/samples/login.html">Login</Nav.Link></Nav.Item>
              <Nav.Item className="nav-item"> <Nav.Link href="pages/samples/register.html">Register</Nav.Link></Nav.Item>
            </Nav>
          </Nav.Collapse>
        </Nav.Item>
        <Nav.Item className="nav-item menu-items">
          <Nav.Link href="http://www.bootstrapdash.com/demo/corona-free/jquery/documentation/documentation.html">
            <span className="menu-icon">
              <FontAwesomeIcon icon={faFileAlt} />
            </span>
            <span className="menu-title">Documentation</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;
