import React from 'react';
import wedding from '../images/services/meropriatia/wedding.jpg';
import party from '../images/services/meropriatia/corporative.jfif';
import presentations from '../images/services/meropriatia/presentations.jfif';
import kidsParty from '../images/services/meropriatia/party.jpeg';
import vistavki from '../images/services/meropriatia/vistavki.png';
import '../css/Services.css';

export default function Meropriyatiya() {
  const cardItems = [
    {
      img: wedding,
      header: 'Свадьбы',
      description:
        'Ароматизируя помещение в котором проходит свадебный банкет, вы можете вызвать приятные воспоминания у гостей',
    },
    {
      img: party,
      header: 'Корпоративные праздники',
      description:
        'Придает легкость, наполняет тело свежестью и хорошим зарядом энергии, и поднимает настроение',
    },
    {
      img: presentations,
      header: 'Презентации',
      description:
        'Запахи влияют на восприятие нами окружающей среды и стимулируют нейроактивность мозга',
    },
    {
      img: kidsParty,
      header: 'Детские праздники',
      description:
        'Доставляет веселья, увеличивает настроение, приносит радости, море эмоций помогая окунуться в мир детства',
    },
    {
      img: vistavki,
      header: 'Выставки',
      description:
        'Целенаправленная ароматизация воздуха стимулирует рост продаж и благоприятно влияет на клиента',
    },
  ];
  return (
    <div className='servicesCards'>
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
