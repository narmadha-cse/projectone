import React, { useEffect, useState } from 'react';

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Use passive event listener for performance
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Only one listener, passive for smoother scroll
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header>
        <nav className={`navbar navbar-expand-xl fixed-top ${scrolled ? "bg-dark" : "bg-transparent"} `} aria-label="Main Navigation">
          <div className="container py-2">
            <div className="text-center text-md-start">
              <img
                src="../images/logo.svg"
                alt="cxontology logo"
                width={200}
                height={40}
                loading="lazy"
              />
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#navbarOffcanvasLg"
              aria-controls="navbarOffcanvasLg"
              aria-label="Toggle navigation"
            >
              <i class="mdi mdi-menu fs-1 text-white"></i>

            </button>

            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="navbarOffcanvasLg"
              aria-labelledby="navbarOffcanvasLgLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="navbarOffcanvasLgLabel">
                  Menu
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              <div className="offcanvas-body">
                <ul className="navbar-nav link ms-auto gap-3">
                  <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Our Capabilities</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">How We Deliver</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Contact CXO</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
