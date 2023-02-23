import React from 'react';
import GitHubLogo from "./Icons/ReactLogo";
import {openInNewTab} from "../Utils/helpers";

const Footer = () => {
  const onClick = () => {
        openInNewTab('https://github.com/Slamnlc/guitar-learning')
    }

    return (
        <div className="footer">
            <GitHubLogo width={48} height={48} onClick={onClick}/>
        </div>
    );
};

export default Footer;
