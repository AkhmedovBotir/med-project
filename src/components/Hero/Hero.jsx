import React from "react";
import { Container } from "react-bootstrap";
import play from "../../img/play.png";
import appStore from "../../img/appstore.png";
import TelegramIcon from '@mui/icons-material/Telegram';
export default function Hero() {
  return (
    // <div className="hero"></div>
    <>
      <div className="hero d-flex justify-content-center flex-column">
        <Container>
          <div className="w-50">
            <h3>Toshkent shifokorlarining onlayn maslahati.</h3>
            <h4>
              XMed – uyingizdan chiqmasdan tibbiy maslahat oladigan, onlayn
              shifokor qabul tizimi.
            </h4>
            <p>
              XMed - zamonaviy texnologiyalar yordamida O'zbekistonda tibbiy
              xizmatlarni masofadan turib taqdim etishning birinchi platformasi
              hisoblanadi. Bemorlar shifokorlar bilan Internet yordamida
              videoqo'ng'iroq orqali bog'lanishadi. Mutaxassislar barcha
              shikoyatlaringizni diqqat bilan tinglab, Siz uchun foydali bo'lgan
              maslahat berishadi. Endilikda, O'zbekiston aholisi Xmed
              platformasi orqali osonlik bilan tibbiy yordam olish imkoniga ega.
            </p>
            <div className="download">
              <a
                href="https://apps.apple.com/uz/app/xmed/id1580909766"
                className="appstore"
              >
                <img src={appStore} width={130} alt="" />
              </a>
              <a
                href="https://apps.apple.com/uz/app/xmed/id1580909766"
                className="appstore px-3"
              >
                <img src={play} width={130} alt="" />
              </a>
              <a href="https://t.me/XmedDoctorBot?start=web">
                <button type="button" class="btn btn-dark">
                  <TelegramIcon />
                  <h6 className="d-none d-sm-inline px-2">
                    Telegram bot orqali murojaat
                  </h6>
                </button>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
