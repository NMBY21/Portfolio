import React from 'react';
import { FaTelegram, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://t.me/NMBY21" target="_blank" rel="noopener noreferrer">
        <FaTelegram />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/betelihem-mengist-835346232/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/betelihemmengist?igsh=MWo0bWRjanF1ajdidg==" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
