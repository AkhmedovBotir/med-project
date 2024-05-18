import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ReceiptIcon from "@mui/icons-material/Receipt";

export default function HomeProf() {
  let homeProf = [
    {
      icon: <ElectricBoltIcon />,
      text: "O'zingizga qulay vaqtda shifokor qabuliga yoziling",
    },
    {
      icon: <SentimentSatisfiedAltIcon />,
      text: "Bemorlarning shifokorlar haqida ochiq fikrlari",
    },
    {
      icon: <AccountBalanceWalletIcon />,
      text: "Sog'liqni saqlash xizmatlari uchun qulay narxlar",
    },
    {
      icon: <ReceiptIcon />,
      text: "Hamkor klinikalar uchun chegirmalar va aktsiyalar",
    },
  ];
  return (
    <Container>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
        }}
        loop={true}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper py-5"
      >
        {homeProf.map((item) => {
          return (
            <SwiperSlide className="h-auto">
              <div className="d-flex align-items-center">
                <div className="d-flex justify-content-center homeprof-icon mx-3">{item.icon}</div>
                <div className="d-flex justify-content-center homeprof-text">
                  <h5>{item.text}</h5>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}
