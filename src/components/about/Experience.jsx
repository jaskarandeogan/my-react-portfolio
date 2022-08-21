import React from "react";

const experienceContent = [
  {
    year: "   2020 - Present",
    position: " Web Developer",
    compnayName: "Freelance",
    details: `I have been assisting local businesses in going online by creating their online portfolios and websites. `,
  },
  {
    year: "2022 - 2022",
    position: " Customer Service",
    compnayName: "Langara College",
    details: `Helping students to find the right stuff they are looking at bookstore.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src="img/about/briefcase.png" alt="icon" />
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
