import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        857 N Grant St <br/>
        Denver, USA
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:manueliazme98@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you" target="_blank" rel="noopener noreferrer">
          manueliazme98@gmail.com
        </a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call me</span>{" "}
        <a href="tel:+19295487825" target="_blank" rel="noopener noreferrer">
          +1 929 548 7825
        </a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
