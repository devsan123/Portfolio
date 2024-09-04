import React from 'react';


const Navbar = () => {
  const collapseNavbar = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');
    if (navbarToggler && navbarCollapse) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    }
  };

  return (
    <section className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#/"><h2>Portfolio</h2></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/" onClick={collapseNavbar}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#myskill" onClick={collapseNavbar}>Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#myproject" onClick={collapseNavbar}>Projects</a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="src\assets\Resume\Devsan-Dhadavi-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={collapseNavbar}
                >Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={collapseNavbar}>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
