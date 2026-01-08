import React from "react";

const Footer = () => {
  return (
    <footer className="footer" aria-label="footer">
      <div className="container">
        <div className="position-absolute top-n50px start-0 end-0 mx-auto w-90 w-xl-90 mx-3">
          <div className="p-4 bg-dark-primary rounded-4 text-white" style={{ background: "#00308C" }}>
            <div className="row">
              <div className="col-md-8">
                <h3>Want to stay on top of the latest digital and MarTech news?</h3>
                <p className="mb-md-0">Sign up for our newsletter to keep on top of What’s Hot, What’s New and What’s Next!</p>

              </div>
              <div className="col-md-4">
                <div class="input-group mb-1">
                  <input type="text" class="form-control" placeholder="Enter Your Email address" aria-label="Enter Your Email address" aria-describedby="basic-addon2" />
                  <span class="input-group-text bg-primary text-white fw-medium" id="basic-addon2">Send</span>
                </div>
                <div className="fs-12px">By signing up, you agree to receive marketing communications from CXO.</div>
              </div>
            </div>
          </div>
        </div>


        <div className="row link">
          <div className="col-12 col-xl">
            <div className="mb-5 mb-xl-0 text-center text-md-start">
              <img
                src="../images/logo-white.svg"
                alt="cxontology logo"
                width={240}
                height={40}
                loading="lazy"
              />
            </div>


          </div>

          <div className="col-md">
            <h4>Home</h4>
            <ul>
              <li className="nav-item"><a className="nav-link" href="/">What is Ontology?</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Technology Services</a></li>
              <li className="nav-item"><a className="nav-link" href="/">How We Deliver</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Measurable impact of CXO</a></li>
            </ul>
          </div>

          <div className="col-md">
            <h4>Our Capabilities</h4>
            <ul>
              <li className="nav-item"><a className="nav-link" href="/">Platform Capabilities</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Engagement Models</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Delivery Framework</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Services Targeted</a></li>
            </ul>
          </div>

          <div className="col-md">
            <h4>About Us</h4>
            <ul>
              <li className="nav-item"><a className="nav-link" href="/">Our Leadership Team</a></li>
              <li className="nav-item"><a className="nav-link" href="/">How We Deliver</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Who We Serve</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Our Mission & Vision</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-privacy d-flex gap-3 align-items-center justify-content-between">
          <div>
            © Copyright 2025–26 cxontology Private Limited. All rights reserved.
          </div>
          <div className="d-flex gap-3">
            <div>Privacy Policy</div>
            <div>Terms & Conditions</div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
