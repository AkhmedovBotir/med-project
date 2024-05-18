import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./style.css";
export default function FAQ() {
  let faq = [
    {
      id: 1,
      title: "XMed bu klinikami?",
      sub: "Yo‘q, bu internet orqali – chat yoki videomuloqot orqali tibbiy xizmatlar va shifokorlar maslahatlarini masofadan yetkazib berish uchun platforma.",
    },
    {
      id: 2,
      title: "Onlayn tibbiy konsultatsiya nima?",
      sub: `Onlayn tibbiy konsultatsiya - bu Play Market yoki AppStore orqali telefoningizga yuklab olinadigan yangi xizmat. Xmed ilovasidan foydalanib, uyingizdan chiqmasdan turib, O'zbekiston va xorijiy mamlakatlardagi klinika shifokorlarining onlayn videokonsultatsiyasini olishingiz mumkin!
            Agar o'zingizni yomon his qilsangiz, shifokor kasallik haqida so'raydi va aniq tavsiyalar beradi: qanday analizlar topshirish, qaysi mutaxassis bilan bog'lanish, shifokorga tashrif buyurishdan oldin nimalarga tayyorlash kerak.
            Agar sizning qo'lingizda oldingi tekshiruv natijalari yoki boshqa tibbiy hujjatlar bo'lsa, shifokor ko’rib chiqib yordam beradi.`,
    },
    {
      id: 3,
      title: "Shifokordan qanday qilib onlayn konsultatsiya olish mumkin?",
      sub: "Shifokordan 2 xil yo’l bilan onlayn konsultatsiya olish mumkin: \n 1. Onlayn turgan shifokorlardan kerakligini tanlab, profilidagi (ikonka)ni bosasiz. So’ngra yangi ochilgan oynada “Chaqiruv” tugmasini bosasiz va shifokor bilan videoqo’ng’iroq orqali bog’lanasiz. 2. O’zingizga kerakli bo’lgan shifokorning profiliga kirasiz, qulay bo’lgan kun va vaqtni tanlaysiz, ochilgan sahifaga sizni bezovta qilayotgan kasallik bo’yicha qisqacha ma’lumot yozib “Yuborish” tugmasini bosasiz. Shifokor so’rovingizni qabul qilsa, sizga bu haqida sms xabarnoma keladi. Shifokor Sizga belgilangan vaqtda videoqo’ng’iroq qiladi. Buning uchun Siz shu vaqtda onlayn bo’lishingiz talab etiladi.",
    },
    {
      id: 4,
      title: "Dasturda qanday shifokorlar qatnashadi va maslahat beradi?",
      sub: "XMed O’zbekiston va chet davlatlaridagi klinikalarning eng tajribali shifokorlari bilan ishlaydi. Ularning barchasi bir nechta saralash bosqichlaridan va masofaviy konsultatsiya bo'yicha o'quv kursidan o'tadi",
    },
    {
      id: 5,
      title:
        "XMed orqali shifokorlardan onlayn konsultatsiya olish narxi qancha va to’lov qanday amalga oshiriladi?",
      sub: "Har bir shifokorning profilida konsultatsiyaning 1 daqiqa narxi ko’rsatib o’tilgan. Siz dasturga ulanganingizda o’zingiz uchun ochilgan Xmed onlayn diskont kartasini PayMe, Click, Paynet to’lov tizimlari orqali to’ldirib, shifokor bilan gaplashgan daqiqalaringiz uchun pul to’laysiz. Muhim: Agar Siz konsultatsiya uchun to’lovni o’zingiz uchun ochilgan Xmed onlayn diskont kartasi orqali emas, dasturga ulagan shaxsiy plastik kartochkangiz orqali amalga oshirsangiz, sizdan 10 daqiqa uchun to’lov olinadi.",
    },
    {
      id: 6,
      title: "Platforma qaysi hududlarda ishlaydi?",
      sub: "Dunyoning istalgan burchagidan murojaat qilishingiz mumkin, buning uchun sizga Internetga kirish va onlayn konsultatsiya uchun to'lov qilish kerak.",
    },
  ];

  return (
    <Container className="py-5">
      <h3 className="text-center">FAQ</h3>
      <div className="faq d-flex justify-content-center py-3">
        <Accordion defaultActiveKey={faq[0].id} className="w-100">
          {faq.map((res) => {
            return (
              <Accordion.Item eventKey={res.id}>
                <Accordion.Header>{res.title}</Accordion.Header>
                <Accordion.Body className="py-4 fw-bold">
                  <p>{res.sub}</p>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </Container>
  );
}
