import React from 'react';
import hotel from '../images/services/usluga/hotel.jpg';
import supermarket from '../images/services/usluga/supermarket.jpg';
import cafe from '../images/services/usluga/cafe.jpg';
import products from '../images/services/usluga/products.jpg';
import turfirm from '../images/services/usluga/turfirma.jpg';
import medicine from '../images/services/usluga/medicine.jpg';
import technology from '../images/services/usluga/salon.jpg';
import '../css/Services.css';

export default function Usluga() {
  const cardItems = [
    {
      img: hotel,
      header: 'Гостиницы и отели',
      description:
        'Изысканный дизайн, высокий класс сервиса и благородные ароматы указывают клиентам на уровень отеля',
    },
    {
      img: supermarket,
      header: 'Супермаркеты и ТРК',
      description:
        'Каждый отдел может пахнуть ярко и соблазнительно, увеличивая время пребывания и средний чек',
    },
    {
      img: cafe,
      header: 'Кафе, бары, рестораны',
      description:
        'Соблазнительные, аппетитные и уютные ароматы не оставят Ваших посетителей равнодушными',
    },
    {
      img: products,
      header: 'Продуктовые магазины',
      description:
        'Ароматизация отделов увеличивает рост продаж по статистике на 25 - 32%, побуждая покупателей остаться подольше',
    },
    {
      img: turfirm,
      header: 'Турфирмы',
      description:
        'Манящие ароматы экзотических фруктов напомнят Вашим клиентам о приятном отдыхе и создадут незабываемое впечатление о компании',
    },
    {
      img: medicine,
      header: 'Медицинские центры',
      description:
        'Ароматизация медицинских центров и аптек - это спокойствие, доверие и комфорт посетителей',
    },
    {
      img: technology,
      header: 'Салоны цифровой техники',
      description:
        'Неповторимая атмосфера остается в памяти клиентов и повышает удовольствие от покупок',
    },
  ];
  return (
    <div className="servicesCards">
      {cardItems.map((item) => {
        return (
          <div className="servicesCard">
            <img className="servicesBodyImg" src={item.img} alt="" />
            <div className="card-body">
              <h1 className="servicesBodyHeader">{item.header}</h1>
              <p className="servicesBodyDescription">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
