import React from 'react';

const Footer = () => (
  <div className="footer">
    <div id="button" />
    <div id="container">
      <div id="cont">
        <div className="footer_center">
          <h3>Made by Lai Weng Han with <i style={{color: "#e74c3c"}} className="fa fa-heart"></i></h3>
          <span style={{display: "flex", justifyContent: "space-between"}}>
            <a href="https://fb.me/sup3roo7" target="_blank"><i className="fa fa-facebook-official fa-2x"></i></a>
            <a href="https://twitter.com/jlwhoo7" target="_blank"><i className="fa fa-twitter fa-2x"></i></a>
            <a href="https://linkedin.com/in/superoo7" target="_blank"><i className="fa fa-linkedin fa-2x"></i></a>
            </span>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
