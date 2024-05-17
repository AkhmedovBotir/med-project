import { Typography } from "@mui/material";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import avatar from "../../img/avatar.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import GradeIcon from "@mui/icons-material/Grade";
export default function HeroCompetition() {
  return (
    <Container>
      <Row xs={1} md={2}>
        <Col className="d-flex flex-column justify-content-center">
          <Typography variant="h6" className="fw-bold">
            Dasturga shifokorlar tanlov asosida qabul qilinadi!
          </Typography>
          <div className="my-3">
            <ul className="competition-ul fs-5">
              <li>Tajribali mutahassislar!</li>
              <li>Toshkentdagi e'ng yaxshi shifohonalardan!</li>
              <li>
                <div className="d-flex align-items-center">
                  O'rtacha reyting-5
                  <GradeIcon className="text-warning" />
                </div>
              </li>
            </ul>
          </div>
        </Col>
        <Col>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}
            breakpoints={{
              1440: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide className="my-swiper-col">
              <Card>
                <Card.Body>
                  <Row className="d-flex justify-content-around px-2">
                    <Col>
                      <Typography variant="p" className="active">
                        Уролог
                      </Typography>
                      <div className="py-2"></div>
                      <Typography variant="h6" className="nav-text fw-bold">
                        Режаметов Мирзахмат Анарматович
                      </Typography>
                    </Col>
                    <Col className="d-flex justify-content-end align-items-center">
                      <img src={avatar} className="rounded-circle img-avatar" />
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer className="text-left">
                  <Typography className="textleft">
                    <b>Ish tajribasi: </b> <span className="fw-0"> 5-yil</span>
                  </Typography>
                  <Typography className="textleft">
                    <b>Ta'lim darajasi: </b>
                    <span className="fw-0">
                      Уролог,25йил иш стажига эгаман. Урологик касалликларни
                      тугри диагностика мураккаб текширишлар ва даволаш
                      усулларини мукаммал узлаштирганман . Сийдик тош касалли.
                      Сийдик йуллари инфекциями. Сурункали простатит. Эркаклар
                      жинсий азолари касалликлари. Эректильная дисфункции.
                      Фарзандсизлик. Варикоцеле ва бошка касалликларни
                      даволайман.
                    </span>
                  </Typography>
                </Card.Footer>
              </Card>
            </SwiperSlide>
            <SwiperSlide className="my-swiper-col">
              <Card>
                <Card.Body>
                  <Row className="d-flex justify-content-around px-2">
                    <Col>
                      <Typography variant="p" className="active">
                        Уролог
                      </Typography>
                      <div className="py-2"></div>
                      <Typography variant="h6" className="nav-text fw-bold">
                        Режаметов Мирзахмат Анарматович
                      </Typography>
                    </Col>
                    <Col className="d-flex justify-content-end align-items-center">
                      <img src={avatar} className="rounded-circle img-avatar" />
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer className="text-left">
                  <Typography className="textleft">
                    <b>Ish tajribasi: </b> <span className="fw-0"> 5-yil</span>
                  </Typography>
                  <Typography className="textleft">
                    <b>Ta'lim darajasi: </b>
                    <span className="fw-0">
                      Уролог,25йил иш стажига эгаман. Урологик касалликларни
                      тугри диагностика мураккаб текширишлар ва даволаш
                      усулларини мукаммал узлаштирганман . Сийдик тош касалли.
                      Сийдик йуллари инфекциями. Сурункали простатит. Эркаклар
                      жинсий азолари касалликлари. Эректильная дисфункции.
                      Фарзандсизлик. Варикоцеле ва бошка касалликларни
                      даволайман.
                    </span>
                  </Typography>
                </Card.Footer>
              </Card>
            </SwiperSlide>
            <SwiperSlide className="my-swiper-col">
              <Card>
                <Card.Body>
                  <Row className="d-flex justify-content-around px-2">
                    <Col>
                      <Typography variant="p" className="active">
                        Уролог
                      </Typography>
                      <div className="py-2"></div>
                      <Typography variant="h6" className="nav-text fw-bold">
                        Режаметов Мирзахмат Анарматович
                      </Typography>
                    </Col>
                    <Col className="d-flex justify-content-end align-items-center">
                      <img src={avatar} className="rounded-circle img-avatar" />
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer className="text-left">
                  <Typography className="textleft">
                    <b>Ish tajribasi: </b> <span className="fw-0"> 5-yil</span>
                  </Typography>
                  <Typography className="textleft">
                    <b>Ta'lim darajasi: </b>
                    <span className="fw-0">
                      Уролог,25йил иш стажига эгаман. Урологик касалликларни
                      тугри диагностика мураккаб текширишлар ва даволаш
                      усулларини мукаммал узлаштирганман . Сийдик тош касалли.
                      Сийдик йуллари инфекциями. Сурункали простатит. Эркаклар
                      жинсий азолари касалликлари. Эректильная дисфункции.
                      Фарзандсизлик. Варикоцеле ва бошка касалликларни
                      даволайман.
                    </span>
                  </Typography>
                </Card.Footer>
              </Card>
            </SwiperSlide>
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
}
