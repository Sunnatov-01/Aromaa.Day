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
      <Header />
    </div>
  );
}
