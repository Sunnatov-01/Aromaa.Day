import React from 'react';
import offices from '../images/services/companies/office.png';
import shoes from '../images/services/companies/shoes.jpg';
import clothes from '../images/services/companies/clothes.jpg';
import banks from '../images/services/companies/bank.jpg';
import autosalon from '../images/services/companies/autosalon.jpg';
import barber from '../images/services/companies/barber.jfif';
import fitness from '../images/services/companies/fitness.jpg';
import '../css/Services.css';

export default function Companies() {
  const cardItems = [
    {
      img: offices,
      header: 'Офисы и жилые помещения',
      description:
        'Теплые, свежие и цитрусовые ароматы создают уют, наполняют энергией и устраняют неприятные запахи',
    },
    {
      img: shoes,
      header: 'Магазины обуви',
      description:
        'Ароматизация магазина обуви подчеркивает имидж и оставляет приятные впечатления',
    },
    {
      img: clothes,
      header: 'Магазины одежды',
      description:
        'Утонченные парфюмированные ароматы подчеркнут имидж и увеличат спрос на продукцию магазина',
    },
    {
      img: banks,
      header: 'Банки',
      description: 'Аромамаркетинг выделяет среди конкурентов и повышает лояльность',
    },
    {
      img: autosalon,
      header: 'Автосалоны',
      description: 'Ароматизация подчеркивает статус, повышает уверенность к покупке',
    },
    {
      img: barber,
      header: 'Салоны красоты',
      description:
        'Ароматизация салонов красоты и спа -салонов создает имидж и атмосферу для увеличения постоянных клиентов',
    },
    {
      img: fitness,
      header: 'Фитнесс центры',
      description:
        'Проблема плохих запахов в фитнес центрах, вызывающая негатив по отношению к руководству, решение - ароматизацией помещения',
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
