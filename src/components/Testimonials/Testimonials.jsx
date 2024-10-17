import React from "react";
import Slider from "react-slick";
import Img2 from "../../img/pic1.jpg";
import Img3 from "../../img/inno.jpg";
import Img4 from "../../img/pic2.jpg";
import Img5 from "../../img/tapiwa.jpg";
import Img6 from "../../img/tumi.jpg";
import Img7 from "../../img/pic3.jpg";
import Img1 from "../../img/kamo.jpg";

const TestimonialData = [
  {
    id: 1,
    name: "Mbongeni Qwabe",
    text: "Role: Backend && UI Designer",
    img: Img4
  },
  {
    id: 2,
    name: "Tapiwa Mjongeni Mataga",
    text: "Role: Data Analyst & Backend Developer",
    img: Img5
  },
  {
    id: 3,
    name: "Itumeleng Ramodiko",
    text: "Role: Frontend Developer & Business Analyst",
    img: Img6
  },
  {
    id: 5,
    name: "Tankiso Siyabonga Nyaphisi",
    text: "Role: Business Analyst",
    img: Img7
  },
  {
    id: 6,
    name: "Innocent Mtambo",
    text: "Role: Business Analyst && UI Designer",
    img: Img3
  },
  {
    id: 7,
    name: "Tafara Edmund Shava",
    text: "Role: Backend && FrontEnd Designer",
    img: Img2
  },
  {
    id: 8,
    name: "Kamohelo Calvin Kele",
    text: "Role: Business Analyst && FrontEnd Designer",
    img: Img1
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            Meet The Creed Team
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80  font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
