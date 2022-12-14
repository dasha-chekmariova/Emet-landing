import React from 'react';
import './blocks/benefitsM.scss';

import robot from './img/robot.png';

export const Benefits: React.FC = () => (
  <div className="benefitsM">
    <h3 className="benefitsM__title">Безперечні переваги ЕМЕТА перед живими операторами</h3>

    <div className="benefitsM__block">
      <div className="benefitsM__card benefitsM__card--1">
        <div className="benefitsM__card-title">ДОБРА ПАМ’ЯТЬ</div>
        <div className="benefitsM__card-subtitle">пам’ятає все, що було сказано у розмові та будує свої відповіді виходячи з отриманих даних</div>
      </div>

      <div className="benefitsM__card benefitsM__card--2">
        <div className="benefitsM__card-title">ВСЕ СХОПЛЕНО</div>
        <div className="benefitsM__card-subtitle">фіксує всю інформацію, отриману від клієнта</div>
      </div>

      <div className="benefitsM__card benefitsM__card--3">
        <div className="benefitsM__card-title">РОЗУМНА СИСТЕМА</div>
        <div className="benefitsM__card-subtitle">навчається при кожному дзвінку, з кожним разом стає ще розумнішим</div>
      </div>

      <div className="benefitsM__card benefitsM__card--4">
        <div className="benefitsM__card-title">СВОБОДА ПОЛЬОТУ</div>
        <div className="benefitsM__card-subtitle">приймає та здійснює необмежену кількість дзвінків</div>
      </div>

      <div className="benefitsM__card benefitsM__card--5">
        <div className="benefitsM__card-title">ГЕТЬ ШАБЛОННІСТЬ</div>
        <div className="benefitsM__card-subtitle">веде нелінійний діалог, відповідаючи на запитання клієнтів</div>
      </div>

      <div className="benefitsM__card benefitsM__card--6">
        <div className="benefitsM__card-title">ВИНОСЛИВА РОБОЧА КОНЯЧКА</div>
        <div className="benefitsM__card-subtitle">може повністю взяти на себе вхідні та вихідні дзвінки</div>
      </div>

      <img className="benefitsM__image-robot" src={robot} alt="robot" />
    </div>
  </div>
);
