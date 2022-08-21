import React from "react";

const educationContent = [
  {
    year: "2012",
    degree: "PG DEGREE",
    institute: "LANGARA COLLEGE",
    details: `At Langara College, I completed a post-graduate diploma programme in web and mobile application development. I participated in a team of developers and designers who worked on various projects to create functional prototypes of issues encountered in the real world. `,
  },
  {
    year: "2019",
    degree: "BACHELOR DEGREE ",
    institute: "PUNJAB TECHNICAL UNIVERSITY",
    details: `I pursued a bachelor's degree in computer science at Punjab Technical University.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src="img/about/book.png" alt="icon" />
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
