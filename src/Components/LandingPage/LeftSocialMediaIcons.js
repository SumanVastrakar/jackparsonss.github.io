import "./LeftSocialMediaIcons.css";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function LeftSocialMediaIcons() {
  return (
    <div className="leftSocialMediaIcons">
      <hr className="leftSocialMediaIcons__mobileLeftBar mobile__hr" />
      <a
        href="https://github.com/SumanVastrakar"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="my GitHub"
      >
        <FaGithub className="leftSocialMediaIcons__github icon" size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/suman-vastrakar/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="my Linkedin"
      >
        <FaLinkedin className="leftSocialMediaIcons__linkedin icon" size={30} />
      </a>
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="my Instagram"
      >
        <FaInstagram
          className="leftSocialMediaIcons__instagram icon"
          size={30}
        />
      </a>
      <a
        href="https://twitter.com/suman1vastrakar"
        
        target="_blank"
        rel="noopener noreferrer"
        aria-label="my Twitter"
      >
        <FaTwitter className="leftSocialMediaIcons__twitter icon" size={30} />
      </a>
      <div className="leftSocialMediaIcons__verticalBar" />
      <hr className="leftSocialMediaIcons__mobileRightBar mobile__hr" />
    </div>
  );
}

export default LeftSocialMediaIcons;
