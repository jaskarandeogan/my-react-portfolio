import React from "react";
import Social from "../Social";
import ReactTyped from "react-typed";

const heroContent = {
  shapeImage: "hero-shape",
  heroImage: "2",
  name: "Jaskaranvir Deogan",
  description: `I'm a aspiring Full Stack Developer and Front-end React Developer based In Canada, over 2 years of
  professional experience.`,
};

const Hero = () => {
  return (
    //    HERO
    <div className="edina_tm_hero" id="home">
      <div className="background-grad">
        <img className="light" src="img/hero/grad-light.jpg" alt="hero" />
        <img className="dark" src="img/hero/grad-dark.jpg" alt="hero" />
      </div>
      <div className="content">
        <div className="extra">
          <h5
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
            className="hello"
          >
            Hello, I'm {heroContent.name}
          </h5>
          <h1
            className="name"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <span className="typer-toper">
              <ReactTyped
                loop
                typeSpeed={150}
                backSpeed={60}
                strings={["Full Stack Developer","Front-end Developer", "MERN Developer"]}
                smartBackspace
                shuffle={false}
                backDelay={1}
                fadeOut={false}
                fadeOutDelay={100}
                loopCount={0}
                showCursor
                cursorChar="|"
              />
            </span>
          </h1>
          <p
            className="text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            {heroContent.description}
          </p>

          <div
            className="social"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <Social />
          </div>
          <div
            className="edina_tm_button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <a href="Resume/cv.pdf" download className="color">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
    // /HERO
  );
};

export default Hero;
