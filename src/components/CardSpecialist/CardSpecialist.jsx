import React from "react";
import img1 from "../../img/specialist/1.png";
import img2 from "../../img/specialist/2.png";
import img3 from "../../img/specialist/3.png";
import img4 from "../../img/specialist/4.png";
import img5 from "../../img/specialist/5.png";
import img6 from "../../img/specialist/6.png";
import img7 from "../../img/specialist/7.png";
import img8 from "../../img/specialist/8.png";
import img10 from "../../img/specialist/all.png";
import "./style.css";
export default function CardSpecialist() {
  let cardValue = [
    {
      img: img1,
      title: "Ginekolog",
      text: "Ayollar sog'lig'i bilan shug'ullanuvchi mutaxassis",
    },
    {
      img: img2,
      title: "Bolalar shifokori",
      text: "Bolalar sog'lig'i va ularni parvarish qilish bo'yicha mutaxassis",
    },
    {
      img: img3,
      title: "Urolog",
      text: "Peshob - jinsiy tizim mutaxassisi.",
    },
    {
      img: img4,
      title: "LOR",
      text: "Quloq, tomoq, burun kasalliklarini davolash va oldini olish bo'yicha mutaxassis. ",
    },
    {
      img: img5,
      title: "Endokrinolog",
      text: "Gormonal buzilishlar bo'yicha mutaxassis",
    },
    {
      img: img6,
      title: "Teri tanosil kasalliklari shifokori",
      text: "Teri - tanosil kasalliklarini davolash bo'yicha mutaxassis.",
    },
    {
      img: img7,
      title: "Allergolog",
      text: "Allergik kasalliklarni aniqlash va davolashga ixtisoslashgan shifokor.",
    },
    {
      img: img8,
      title: "Asab kassaliklari",
      text: "Asab tizimi mutaxassisi",
    },
    {
      img: img10,
      title: "Barcha mutaxassislar",
    },
  ];
  return (
    <div className="p-4 container">
      <h3 className="text-center">Mutaxassisni tanlang</h3>
      <div className="py-4 d-flex justify-content-around flex-wrap w-100 carddiv">
        {cardValue.map((e) => {
          return (
            <div
              className="m-2 card-specialist d-flex align-items-center"
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex align-items-center p-3 card-div-img">
                <img src={e.img} width="70" />
                <div className="card-div px-3">
                  <h4>{e.title}</h4>
                  <p>{e.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
