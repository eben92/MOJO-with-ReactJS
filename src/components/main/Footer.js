import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <p className='copyright'>2014 &copy; MOJO INC</p>

        <div className='contacts'>
          <Link to='/contact' className='terms'>
            contact us
          </Link>
          <Link to='/' className='terms'>
            faq
          </Link>
          <Link to='/' className='terms'>
            terms & conditions
          </Link>
          <Link to='/' className='terms'>
            privavcy policy
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
