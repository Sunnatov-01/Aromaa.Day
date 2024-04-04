import React from 'react';
import gift from '../images/services/game/podarki.jfif';
import clubs from '../images/services/game/club.jfif';
import bowling from '../images/services/game/bowling.jpg';
import '../css/Services.css';

export default function Games() {
  const cardItems = [
    {
      img: gift,
      header: 'Подарки и аксессуары',
      description:
        'Парфюмированные дорогие ароматы создают ощущение исключительного качества и ассортимента',
    },
    {
        img: clubs,
        header: 'Клубы',
        description: 'Яркие и позитивные ароматы для вечеринки оставляют массу впечатлений и эмоций',
    },
    {
        img: bowling,
        header: 'Боулинг, игровые автоматы',
        description: 'Ароматизация казино и залов игровых автоматов - это атмосфера азарта, роскоши и шика',
    },
  ];
  return <div className='servicesCards'>
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
</div>;
}
