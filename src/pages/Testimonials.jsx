import "./Testimonials.css";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Testimonials() {

  const data = [
    {
      name: "Rahul Sharma",
      role: "Business Owner",
      img: "/Images/testimonial-3.jpg",
      text: "Excellent service! My laptop was repaired quickly with genuine parts. Truly professional support."
    },
    {
      name: "Amit Verma",
      role: "IT Manager",
      img: "/Images/testimonial-2.jpg",
      text: "Networking setup was done perfectly. Highly recommend Viresani Technologies."
    },
    {
      name: "Neha Patil",
      role: "Startup Founder",
      img: "/Images/testimonial-1.jpg",
      text: "Their AMC service is outstanding. Very reliable and affordable."
    },
    {
        name: "Neha Patil",
        role: "Startup Founder",
        img: "/Images/testimonial-1.jpg",
        text: "Their AMC service is outstanding. Very reliable and affordable."
      }
  ];

  return (
    <section className="testimonial-section">
      <div className="overlay1"></div>

      <div className="container">

        <div className="test-head">
          <span>TESTIMONIALS</span>
          <h2>What Our Clients Say</h2>
          <p>Real feedback from our satisfied customers</p>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            320:{slidesPerView:1},
            768:{slidesPerView:2},
            1024:{slidesPerView:3}
          }}
        >
          {data.map((item,i)=>(
            <SwiperSlide key={i}>
              <div className="test-card">

                <div className="user">
                  <img src={item.img} />
                  <div>
                    <h5>{item.name}</h5>
                    <small>{item.role}</small>
                  </div>
                </div>

                <p>{item.text}</p>

                <div className="stars">
                  {[...Array(5)].map((_,i)=>
                    <FaStar key={i}/>
                  )}
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
