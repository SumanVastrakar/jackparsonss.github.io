import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import "./SocialMediaIcons.css";

function SocialMediaIcons() {
  return (
    <div className="socialMediaIcons">
      <hr className="socialMediaIcons__leftHr hr" />
      <a
        href="https://github.com/SumanVastrakar"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="my GitHub"
      >
        <FaGithub className="socialMediaIcons__github footer__icon" size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/suman-vastrakar/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="my Linkedin"
      >
        <FaLinkedin
          className="socialMediaIcons__linkedin footer__icon"
          size={30}
        />
      </a>
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="my Instagram"
      >
        <FaInstagram
          className="socialMediaIcons__instagram footer__icon"
          size={30}
        />
      </a>
      <a
        href="https://twitter.com/suman1vastrakar"
        
        target="_blank"
        rel="noopener noreferrer"
        aria-label="my Twitter"
      >
        <FaTwitter
          className="socialMediaIcons__twitter footer__icon"
          size={30}
        />
      </a>
      <hr className="socialMediaIcons__rightHr hr" />
    </div>
  );
}

export default SocialMediaIcons;
