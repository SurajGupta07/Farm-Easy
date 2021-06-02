import React from "react";
import FooterLogo from "../src_images/india.png"

const Footer = () => {
    return (
        <div className="footer">Proudly made in{" "}
            <img src={FooterLogo} alt="footer-icon" style={{height:"20px", with:"20px", position: "relative", top: "5px"}} />
            {" "}by{" "}<a href="https://github.com/SurajGupta07" style={{color: '#4338CA', textDecoration: 'none'}} target="_blank">Suraj Gupta</a>{" "}
                <span>currently V1.0</span> 
        </div>
    );
}

export default Footer;