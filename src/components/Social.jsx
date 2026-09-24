import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-github",
    link: "https://github.com/manueliazme98me",
  },
  {
    iconName: "fa fa-whatsapp",
    link: "https://wa.me/19295487825",
  },
  { iconName: "fa fa-telegram", link: "https://t.me/brownmillos" },
];

const Social = ({ className = "" }) => {
  return (
    <ul className={`social list-unstyled pt-1 mb-0 ${className}`.trim()}>
      {SocialShare.map((val, i) => (
        <li key={val.link} style={{ animationDelay: `${i * 0.18}s` }}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
