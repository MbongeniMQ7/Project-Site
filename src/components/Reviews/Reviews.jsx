import React from "react";
import Slider from "react-slick";
import Img2 from "../../img/shorty.jpg";
import Img3 from "../../img/puso.jpg";
import Img4 from "../../img/pholoba.jpg";


const TestimonialData = [
  {
    id: 1,
    name: "Mapholoba",
    text:  "Timly's Café has a nice ambiance, but I wasn’t blown away by my experience. The coffee was decent, but not extraordinary, and the prices felt a bit high for what you get. I had a latte and a slice of cake, and while both were okay, I’ve had better elsewhere. The staff was friendly though, and I liked the décor, so I might give it another try. It’s definitely a good place if you’re looking for a quiet spot to sit for a while.",
    img: Img4
  },
  {
    id: 6,
    name: "Ditiro Puso",
    text: "I’ve been coming to Timly's CaféTimly's Caffe for a few weeks now to work remotely, and it’s a great space. The Wi-Fi is fast, the staff is super accommodating, and the coffee is amazing. I usually get a flat white and a croissant, and both are consistently delicious. My only issue is that it can get a little crowded during peak hours, so finding a seat can sometimes be tricky. Other than that, it’s a fantastic place to work, and I really appreciate the warm atmosphere!",
    img: Img3
  },
  {
    id: 7,
    name: "Nhlakanipho Xolo",
    text: "Timly's Café is hands down my favorite coffee spot in town! Every time I go there, I’m greeted with a smile, and the baristas are true artists when it comes to coffee. Their cappuccinos are perfectly balanced, and they even made me a custom blend based on my taste preferences! The vibe is chill, with great music and cozy seating—perfect for catching up with friends or getting some work done. Plus, I love that they source their beans ethically and support local suppliers. Highly recommend!",
    img: Img2
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
            Customer Reviews
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
