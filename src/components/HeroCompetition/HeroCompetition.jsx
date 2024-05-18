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
    <Container className="py-5">
      <h3>Eng yaxshi shifokorlar</h3>
      <Row>
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
              768:{
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1024:{
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 10,
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
