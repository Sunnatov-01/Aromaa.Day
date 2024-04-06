import React from 'react';
import Header from '../components/Header';
import Climat from '../images/Parfumes/climat.jpg';
import Laventi from '../images/Parfumes/laventi.jpg';
import Orchid from '../images/Parfumes/orchid.webp';
import PurOud from '../images/Parfumes/PurOud.webp';
import Levie from '../images/Parfumes/Levie.avif';
import Japtatami from '../images/Parfumes/Japtatami.webp';
import Byredo from '../images/Parfumes/Byredo.png';
import Vevman from '../images/Parfumes/Vevman.webp';
import Klavdia from '../images/Parfumes/Klavdia.jpg';
import Woud from '../images/Parfumes/Woud.jpg';
import Elixir from '../images/Parfumes/Elixir.jpg';
import Jador from '../images/Parfumes/Jador.webp';
import '../css/Aromates.css';
import Footer from '../components/Footer';

export default function Aromates() {
  const aromates = [
    {
      name: 'Climat',
      a: '-Цветочный',
      b: '-Свежий, приятный',
      c: '-Манящий',
      img: Climat,
    },
    {
      name: 'Laventi',
      a: '-Праздник, Древесный',
      b: '-Свежий',
      c: '-Оживляющий',
      img: Laventi,
    },
    {
      name: 'Orchid',
      a: '-Цветочный',
      b: '-Мандарин, Цитрусы, Бергамот',
      c: '-Освежающий, Расслабляющий',
      img: Orchid,
    },
    {
      name: 'PurOud',
      a: '-древесные, пряные',
      b: '-Чувственный',
      c: '-Освежающий, Расслабляющий',
      img: PurOud,
    },
    {
      name: 'Levie',
      a: '-Древесный ',
      b: '-Приятный, Теплый',
      c: '-Манящий, Оживляющий',
      img: Levie,
    },
    {
      name: 'Jap tatami ',
      a: '-Цветочный ',
      b: '-Теплый',
      c: '-Поднимающий настроение',
      img: Japtatami,
    },
    {
      name: 'Byredo',
      a: '-Восточный древесный ',
      b: '-Приятный,Экзотический',
      c: '-Восстанавливающий силы, Освежающий',
      img: Byredo,
    },
    {
      name: 'Vevman',
      a: '-Ароматический ',
      b: '-Свежий',
      c: '-Манящий, Освежающий',
      img: Vevman,
    },
    {
      name: 'Klavdia',
      a: '-Восточный, цветочный ',
      b: '-Яркий и теплый',
      c: '-Манящий, Поднимающий настроение',
      img: Klavdia,
    },
    {
      name: 'Woud',
      a: '- Восточный, древесный',
      b: '- Теплый, Чувственный, Роскошный, Экзотический',
      c: '- Восстанавливающий силы, Освежающий, Поднимающий',
      img: Woud,
    },
    {
      name: 'Elixir',
      a: '- Цветочный',
      b: '- Чувственный, Чистый',
      c: '- Манящий, Освежающий',
      img: Elixir,
    },
    {
      name: 'Jador',
      a: '- Цветочный, Фруктовый',
      b: '- Чувственный, Роскошный ',
      c: '- Чистый Восстанавливающий силы, Оживляюший',
      img: Jador,
    },
  ];
  return (
    <div>
      <div className="aromatesMainDiv">
        <Header />
        <div className="aromatesMainDivTexts">
          <p className="aromatesMainDivAroma">Ароматы</p>
          <p className="aromatesMainDivP">Ваши клиенты будут в восторге:</p>
          <p className="aromatesMainDivP">-Самый большой каталог ароматов - более 1500</p>
          <p className="aromatesMainDivP">-Профессиональная помощи в подборе ароматов</p>
          <p className="aromatesMainDivP">-Ароматы исключительно высшего качества!</p>
        </div>
      </div>
      <div className="aromatesBody">
        <p className="aromatesBodyHeader">Ваш бренд запомнят навсегда</p>
        <p className="aromatesBodyP">
          Создание хорошо различимых и притягательных ароматов — это искусство. В основе наших
          ароматических масел лежат сложные специальные композиции, и мы используем только
          высококачественные ингредиенты для создания ароматов. ScentAir может разработать аромат,
          подходящий именно для Вашего бренда, — от обычных до нестандартных и даже индивидуальных
          композиций. Ниже приведен лишь краткий список ароматов, предлагаемых компанией Aroma Day.
        </p>
        <div className="aromates">
          {aromates.map((item, index) => {
            return (
              <div className="aromatesCards">
                <img className='cardImg' src={item.img} alt="" />
                <h2 className='aromatesBodyH2'>{item.name}</h2>
                <p className='aromatesBodyP2'>{item.a}</p>
                <p className='aromatesBodyP2'>{item.b}</p>
                <p className='aromatesBodyP2'>{item.c}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
