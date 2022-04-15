import React from "react";
import { Link } from "react-router-dom";
import logo1 from "./../../../images/logo.png";
import './Footer.css'

const Footer = () => {
  return (
    <div className="bg-dark w-100 text-white">
      <div className="container footer">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-6 py-5 text-center text-md-start text-lg-start my-md-0 my-lg-0">
            <img className="logo" src={logo1} alt="Footer Logo" />
          </div>
          <div className="col-12 col-sm-12 text-center text-lg-start py-4 text-md-start col-md-4 col-lg-3">
            <Link
              className="text-white text-decoration-none d-block my-2"
              to="*">
              About Online Food
            </Link>

            <Link
              className="text-white text-decoration-none d-block my-2"
              to="*">
              Read Our Blogs
            </Link>

            <Link
              className="text-white text-decoration-none d-block my-2"
              to="*">
              Sign up to Deliver
            </Link>

            <Link
              className="text-white text-decoration-none d-block my-2"
              to="*">
              Add your restaurant
            </Link>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-3 py-4 my-lg-0 my-md-0 text-center text-lg-start text-md-start">
            <Link
              className="text-white text-decoration-none d-block my-2"
              to="*">
              Get Help
            </Link>

            <Link
              className="text-white text-decoration-none d-block my-2"
              to="*">
              Read FAQs
            </Link>

            <Link
              className="text-white text-decoration-none d-block my-2"
              to="*">
              View All Cities
            </Link>

            <Link
              className="text-white text-decoration-none d-block my-2"
              to="*">
              Restaurant Near Me
            </Link>
          </div>
        </div>
        <div className="row my-5 py-5 text-center text-md-start text-lg-start px-0">
          <div className="col-12 col-md-6 col-lg-6 text-muted">
            <p>Copyright © 2022 online food</p>
          </div>
          <div className="col-12 col-md-6 col-lg-6 ">
            <Link
              className="text-white mx-4 text-decoration-none d-block d-lg-inline d-md-inline my-2 my-lg-0 my-md-0"
              to="*">
              Privacy Policy
            </Link>
            <Link
              className="text-white mx-4 text-decoration-none d-block d-lg-inline d-md-inline my-2 my-lg-0 my-md-0"
              to="*">
              Terms And Use
            </Link>
            <Link
              className="text-white mx-4 text-decoration-none d-block d-lg-inline d-md-inline my-2 my-lg-0 my-md-0"
              to="*">
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
