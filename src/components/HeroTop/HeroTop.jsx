import { Typography } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function HeroTop() {
  return (
    <div className="bg-pill py-5">
      <Container>
        <Row>
          <Col className="d-flex align-items-center">
            <iframe
              className="rounded-3"
              frameborder="0"
              allowfullscreen=""
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              title="XMed - Доктор Д билан бепуштлик хакида фойдали маслахатлар"
              width="580"
              height="300"
              src="https://www.youtube.com/embed/ciYHZ1VAdBA?enablejsapi=1&amp;origin=https%3A%2F%2Fxmed.uz&amp;widgetid=1"
              id="widget2"
              data-gtm-yt-inspected-6="true"
            ></iframe>
          </Col>
          <Col className="d-flex flex-column justify-content-center">
            <Typography variant="h6" className="fw-bold">
              Bemor uchun yaratilgan qulayliklar:
            </Typography>
            <div className="my-3">
              <ul className="competition-ul fs-5">
                <li>
                  24/7 sifatli tibbiy xizmatlardan onlayn foydalanish
                  imkoniyati;
                </li>
                <li>
                  Dunyoning istalgan burchagidan malakali shifokor xizmatlaridan
                  foydalanish;
                </li>
                <li>
                  Shifokorlardan onlayn maslahat olishning keng imkoniyatlari;
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
