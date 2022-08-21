import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Jaskaranvir " },
  { meta: "last name", metaInfo: "Deogan" },
  { meta: "Age", metaInfo: "23 Years" },
  { meta: "Nationality", metaInfo: "Canada" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Vancouver" },
  { meta: "phone", metaInfo: "+7783173463" },
  { meta: "langages", metaInfo: "English" },
  { meta: "Email", metaInfo: "jaskaran2k15@gmail.com" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
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
