import React from "react";
import Img2 from "../../img/camomile.jpg";
import Img3 from "../../img/affogato.jpg";
import Img4 from "../../img/mocha.jpg";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Camomile",
    description:
      "A special herbal infusion crafted from the dried flowers of the chamomile plant.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img3,
    name: "Affogato",
    description:
      "A treat or coffee that combines vanilla ice cream and hot espresso.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img4,
    name: "Mocha",
    description:
      "It's brewed with espresso steamed milk and delicious chocolate syrup on top",
    aosDelay: "500",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              What do we have for you??
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
