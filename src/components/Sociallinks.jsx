import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const SocialFollow = () => {
  return (
    <div className="bg-inherit p-6 px-12 flex gap-4">
      <a href="https://www.facebook.com/nissan.gautam.507"
        className="facebook social" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="1x" />
      </a>
      <a href="https://twitter.com/nishan_gtsn" className="twitter social" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="1x" />
      </a>
      <a href="https://www.instagram.com/nis_san_ey/"
        className="instagram social" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
    </div>
  );
};

export default SocialFollow;