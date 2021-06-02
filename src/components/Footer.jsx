import React from "react";
import FooterLogo from "../src_images/india.png"

const Footer = () => {
    return (
        <div className="footer">Proudly made in{" "}
            <img src={FooterLogo} alt="footer-icon" style={{height:"20px", with:"20px", position: "relative", top: "5px"}} />
            {" "}by Suraj Gupta {" "}
                <span>currently V1.0</span> 
        </div>
    );
}

export default Footer;