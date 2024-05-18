import React from "react";
import icon from "../../img/icon.png";
import img1 from "../../img/appstore.png";
import img2 from "../../img/play.png";
import { Facebook, Instagram, Telegram, YouTube } from "@mui/icons-material";

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer id="gradient">
      <div className="footer-row container">
        <div className="footer-col-left px-3 my-3">
          <img src={icon} alt="logo" className="py-3" />
          <div className="footer-col-lefts py-3">
            <h6 className="d-flex justify-content-between align-items-start py-1">
              <span>Pochta: </span>
              <span className="d-flex flex-column footer-moljal">
                <a href="mailto:info@xmed.uz">info@xmed.uz</a>
              </span>
            </h6>
            <h6 className="d-flex justify-content-between align-items-start py-1">
              <span>Texnik yordam: </span>
              <span className="d-flex flex-column footer-moljal">
                <a href="tel:+998998950303">+998 99 895 03 03</a>
                <a href="tel:+998991150424">+998 99 115 04 24</a>
              </span>
            </h6>
            <h6 className="d-flex justify-content-between align-items-start py-1">
              <span>Manzil: </span>
              <span className="d-flex flex-column footer-moljal">
                <a href="manzil">
                  O'zbekiston, Toshkent shahri, Yashnobod tumani, Sarbon
                  ko'chasi 1A.
                </a>
              </span>
            </h6>
            <h6 className="d-flex justify-content-between align-items-start py-1">
              <span>Mo'ljal: </span>
              <span className="d-flex flex-column footer-moljal">
                <a href="mo'ljal">GARNET mehmonxonasi</a>
              </span>
            </h6>
            <h6 className="d-flex justify-content-between align-items-start py-1">
              <span>Ish vaqti: </span>
              <span className="d-flex flex-column footer-moljal">
                <div>dush-juma, 09:00-18:00</div>
              </span>
            </h6>
          </div>
        </div>
        <div className="footer-col-center p-3 my-3">
          <h4 className="text-center">Qo'shimcha bo'limlar</h4>
          <div className="fw-bold d-flex flex-column justify-content-between h-75">
            <a href="/">Kirish</a>
            <a href="/">Kontaktlar</a>
            <a href="/">Kompaniyani ro'yxatdan o'tkazish</a>
            <a href="/">Maxfiylik siyosati</a>
            <a href="/">Shifokor ommaviy ofertasi</a>
            <a href="/">Bemor ommaviy ofertasi</a>
          </div>
        </div>
        <div className="footer-col-right p-3 my-3 d-flex flex-column justify-content-between">
          <div className="footer-col-row d-flex flex-column">
            <div className="footer-col-col d-flex justify-content-around p-3">
              <a href="https://apps.apple.com/uz/app/xmed/id1580909766">
                <img src={img1} alt="" />
              </a>
              <a href="https://apps.apple.com/uz/app/xmed/id1580909766">
                <img src={img2} alt="" />
              </a>
            </div>
            <div className="footer-col-col1 d-flex justify-content-around w-100 px-5 py-2">
              <a
                href="https://t.me/XmedDoctorBot?start=web"
                className="p-2 d-flex justify-content-center align-items-center rounded-pill"
              >
                <Telegram />
              </a>
              <a
                href="https://www.instagram.com/xmed.uz"
                className="p-2 d-flex justify-content-center align-items-center rounded-pill"
              >
                <Instagram />
              </a>
              <a
                href="https://www.youtube.com/channel/UCDE1VC5pMBcYX_FpmlL4MlA"
                className="p-2 d-flex justify-content-center align-items-center rounded-pill"
              >
                <YouTube />
              </a>
              <a
                href="https://www.facebook.com/xmedonline/?ref=pages_you_manage"
                className="p-2 d-flex justify-content-center align-items-center rounded-pill"
              >
                <Facebook />
              </a>
            </div>
          </div>
          <span className="footer-text p-4">
            Saytda taqdim etilgan ma'lumotlar bemorga tashxis qo'yish va
            davolash uchun ishlatilishi mumkin emas va shifokorning o'rnini bosa
            olmaydi.
          </span>
        </div>
      </div>
      <p className="text-center footer-copy py-3 m-0">&copy; 2021 — {year} | Barcha huquqlar himoyalangan.</p>
    </footer>
  );
}
