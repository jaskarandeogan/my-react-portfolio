import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const SocialShare = [
  {
    iconName: <FiFacebook />,
    link: "https://www.facebook.com/jaskarandvg",
  },
  { iconName: <FiTwitter />, link: "https://twitter.com/DeoganJaskaran" },
  {
    iconName: <FiInstagram />,
    link: "https://www.instagram.com/jskrndeogxn",
  },
  { iconName: <FiGithub />, link: "https://github.com/jaskarandeogan" },
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/jaskaranvir-deogan",
  },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
