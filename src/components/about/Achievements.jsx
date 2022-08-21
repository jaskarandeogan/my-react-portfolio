import React from "react";

const achievementsContent = [
  { title: "02", subTitle1: "years of", subTitle2: "Experience" },
  { title: "10", subTitle1: "Completed", subTitle2: "Projects" },
  { title: "06", subTitle1: "Certifications", subTitle2: "LinkedIn" },
  { title: "02", subTitle1: "Assessments ", subTitle2: "Passed" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
