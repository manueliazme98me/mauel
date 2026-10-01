import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Manuel" },
  { meta: "last name", metaInfo: "Diaz" },
  { meta: "Email", metaInfo: "manueliazme98@gmail.com" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val) => (
        <li key={`${val.meta}-${val.metaInfo}`}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
