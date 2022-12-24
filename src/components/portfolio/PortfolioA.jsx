import React from "react";
import ReactTooltip from "react-tooltip";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {

  const projects = [
    {
      title: "Product View",
      description: "proof of concept",
      image: "img/portfolio/ecom.svg",
      link: "https://ecommerce-olive.vercel.app/",
    },
    {
      title: "Rest Countries API",
      description: "proof of concept",
      image: "img/portfolio/countries.svg",

      link: "https://my-tailwind-project.vercel.app/",

    },
    {
      title: "Splink",
      description: "Mobile App",
      image: 'img/portfolio/splink.svg',
      link: "https://www.splink.ca/",
    },
    {
      title: "Dustypaws ",
      description: "Product",
      image: "img/portfolio/dustypaws.svg",
      link: "https://dustypaws.co/",
    },
    {
      title: "People and Cars",
      description: "proof of concept",
      image: "img/portfolio/cars.svg",
      link: "https://dustypaws.co/",
    },
    {
      title: "AI web app",
      description: "proof of concept",
      image: "img/portfolio/AIWeb.svg",
      link: "https://dustypaws.co/",
    }
  ]

  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrow: false,
          autoplay: false,
          draggable: true,
          speed: 300,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="portfolio_inner my_carousel gallery_zoom">
      <ul data-aos="fade-right" data-aos-duration="1200">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <li key={index}>
              
              <div className="list_inner">
                <div className="image">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="details"
                  >
                    <img
                      src={project.image}
                      data-tip
                      data-for="product"
                      alt="portfolio"
                    />
                    <ReactTooltip
                      id="product"
                      place="bottom"
                      type="light"
                      effect="float"
                      className="tooltip-wrapper"
                    >
                      <div>
                        <h5>{project.title}</h5>
                        <span>{project.description}</span>
                      </div>
                    </ReactTooltip>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </Slider>
      </ul>
    </div>
  );
};

export default Portfolio;
