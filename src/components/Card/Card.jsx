import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./style.css";
import img1 from "../../img/back_ache.png";
import img2 from "../../img/children.png";
import img3 from "../../img/cough.png";
import img4 from "../../img/diabets.png";
import img5 from "../../img/gynecological_diseases.png";
import img6 from "../../img/headache.png";
import img7 from "../../img/heartache.png";
import img8 from "../../img/hormonal.png";
import img9 from "../../img/impotence.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Image } from "react-bootstrap";

export default function Cards() {
  let cardValue = [
    {
      img: img1,
      text: "Umurtqa pog'onasi og'riqlari",
    },
    {
      img: img2,
      text: "Bolalar kasalliklari",
    },
    {
      img: img3,
      text: "Tomoq - burun  og‘riqlari",
    },
    {
      img: img4,
      text: "Qandli diabet",
    },
    {
      img: img5,
      text: "Ginekologik xastaliklar",
    },
    {
      img: img6,
      text: "Bosh og‘riqlari",
    },
    {
      img: img7,
      text: "Yurak muammolari",
    },
    {
      img: img8,
      text: "Gormonlarning buzulishi",
    },
    {
      img: img9,
      text: "Jinsiy zaiflik",
    },
  ];
  return (
    <div className="py-4 container">
      <h3 className="text-center">Sizni nima bezovta qiladi?</h3>

      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
        }}
        navigation={true}
        loop={true}
        breakpoints={{
          300: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 8,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper px-5"
      >
        {cardValue.map((item) => {
          return (
            <SwiperSlide>
              <Card sx={{ maxWidth: 345 }} className="rounded-3">
                <Image
                  src={item.img}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
