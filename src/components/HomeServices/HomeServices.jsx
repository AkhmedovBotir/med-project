import { Typography } from "@mui/material";
import React from "react";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import img1 from "../../img/chat/1.jpg";
import img2 from "../../img/chat/2.jpg";
import img3 from "../../img/chat/3.jpg";
import ChatIcon from "@mui/icons-material/Chat";
import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from "@mui/icons-material/Videocam";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

export default function HomeServices() {
  return (
    <Container className="py-5 pb-0">
      <h3 className="text-center">Onlayn maslahat xizmati haqida</h3>
      <br />
      <Row xs={1} md={2}>
        <Col className="p-3">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className="my-swiper-col">
              <img src={img1} />
            </SwiperSlide>
            <SwiperSlide className="my-swiper-col">
              <img src={img2} />
            </SwiperSlide>
            <SwiperSlide className="my-swiper-col">
              <img src={img3} />
            </SwiperSlide>
          </Swiper>
        </Col>
        <Col className="d-flex flex-column justify-content-center">
          <Typography variant="h6" className="fw-bold">
            Onlayn maslahat xizmatidan foydalanish usullari:
          </Typography>
          <div className="my-3">
            <Typography variant="span">
              XMed - zamonaviy texnologiyalar yordamida shifokorlardan onlayn
              maslahat olish dasturi
            </Typography>
          </div>
          <div className="my-2">
            <Typography variant="p">
              Toshkentdagi shifoxonalarining eng yaxshi mutaxassislari 24/7
              aloqada
            </Typography>
            <Typography variant="p">
              Online maslahat xizmati turlari quyidagicha:
            </Typography>
          </div>
          <Stack direction="horizontal" className="my-2" gap={2}>
            <Badge className="badge-bg">
              <ChatIcon /> Chat
            </Badge>
            <Badge className="badge-bg">
              <CallIcon /> Audio
            </Badge>
            <Badge className="badge-bg">
              <VideocamIcon /> Video aloqa
            </Badge>
          </Stack>
          <div className="py-3">
            <button className="btn btn-register px-5">
              Mutaxassis tanlash
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
