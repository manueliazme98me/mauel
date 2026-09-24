import React from "react";

const educationContent = [
  // {
  //   year: "2012",
  //   degree: "AWS Cloud Fundamentals",
  //   institute: "",
  //   details: ``,
  // },
  {
    year: "2016 - 2020",
    degree: "Master's degree - Computer Science and Engineering",
    institute: "Savanci University",
    details: `  Istanbul, Turkey`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val) => (
        <li key={`${val.year}-${val.institute}`}>
          <div className="icon">
            <i className="fa fa-university"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
