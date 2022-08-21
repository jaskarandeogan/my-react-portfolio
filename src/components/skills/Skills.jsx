import React from "react";

const skillsContent = [
  {
    name: "React.Js",
    skillPercent: "95",
  },
  {
    name: "MERN",
    skillPercent: "85",
  },
  {
    name: "Tailwind CSS",
    skillPercent: "85",
  },
  {
    name: "Figma",
    skillPercent: "95",
  },
  {
    name: "SASS",
    skillPercent: "90",
  },
  {
    name: "WordPress",
    skillPercent: "90",
  },
  {
    name: "HTML5 CSS3",
    skillPercent: "95",
  },
  {
    name: "Github",
    skillPercent: "90",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
