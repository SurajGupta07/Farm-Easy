import React from "react";
import FooterLogo from "../src_images/india.png"

const Footer = () => {
    return (
        <div style={{paddingTop: "2rem", fontWeight: 600, textAlign: "center", paddingBottom: "1rem", backgroundColor: "#A78BFA"}}>Proudly made in{" "}
            <img src={FooterLogo} style={{height:"20px", with:"20px", position: "relative", top: "5px"}} />
            {" "}by Suraj Gupta {" "}
                <span>currently V1.0</span> 
        </div>
    );
}

export default Footer;