import React from 'react';
import elips1 from './img/Ellipse 1.svg';

export const SolvingProblem: React.FC = () => (
  <div className="solvingProblem">
    <h2 className="main__title solvingProblem__subtitle">які проблеми вирішує</h2>
    <img
      className="main__title-img"
      src={elips1}
      alt="point"
    />

    <div className="solvingProblem__row">
      <div className="solvingProblem__block">
        <h4 className="solvingProblem__title">Пошук проблемних діалогів</h4>
        <p className="solvingProblem__info">Знаходьте проблеми за ключовими словами або відхилення кількісних параметрів від норми</p>
      </div>

      <div className="solvingProblem__block">
        <h4 className="solvingProblem__title">Аналіз роботи операторів</h4>
        <p className="solvingProblem__info">Контролюйте операторів, у розмовах із якими клієнти зазнають складнощів</p>
      </div>

      <div className="solvingProblem__block">
        <h4 className="solvingProblem__title">Пошук точок зростання</h4>
        <p className="solvingProblem__info">Клієнти самі розповідають про свої проблеми та побажання</p>
      </div>

      <div className="solvingProblem__block">
        <h4 className="solvingProblem__title">Підвищення дисципліни</h4>
        <p className="solvingProblem__info">Оператори починають працювати краще, коли знають, що дзвінки аналізуються</p>
      </div>

      <div className="solvingProblem__block">
        <h4 className="solvingProblem__title">Зниження непрофільного навантаження</h4>
        <p className="solvingProblem__info">Аналізуйте причини затягнутих розмов, систематизуйте теми звернень</p>
      </div>

      <div className="solvingProblem__block">
        <h4 className="solvingProblem__title">Скорочення кількості повторних звернень</h4>
        <p className="solvingProblem__info">Розширюйте скрипти операторів та базу знань компанії на основі даних із діалогів</p>
      </div>

      <div className="solvingProblem__block">
        <h4 className="solvingProblem__title">Захист від витоків інформації</h4>
        <p className="solvingProblem__info">Знаходьте загрози відведення клієнтів за ключовими словами: «Відправлю номер», «Запишіть номер», «Перезвоню з мобільного» і т.д.</p>
      </div>
    </div>

    <h2 className="main__title techBenefits__subtitle">технічні переваги</h2>
    <img
      className="main__title-img"
      src={elips1}
      alt="point"
    />

    <div className="techBenefits__flex">
      <div className="techBenefits">
        <div className="techBenefits__block--first">МАСШТАБОВАНІСТЬ</div>
        <div className="techBenefits__block--second">навчається при кожному дзвінку, з кожним разом стає ще розумнішим</div>
        <div className="techBenefits__helpBlock"></div>
      </div>

      <div className="techBenefits">
        <div className="techBenefits__block--first">НЕЙРОННІ МЕРЕЖІ</div>
        <div className="techBenefits__block--second">може повністю взяти на себе вхідні та вихідні дзвінки</div>
        <div className="techBenefits__helpBlock"></div>
      </div>

      <div className="techBenefits">
        <div className="techBenefits__block--first">ГНУЧКА ЗВІТНІСТЬ </div>
        <div className="techBenefits__block--second">приймає та здійснює необмежену кількість дзвінків</div>
        <div className="techBenefits__helpBlock"></div>
      </div>

      <div className="techBenefits">
        <div className="techBenefits__block--first">ІНТЕГРАЦІЯ </div>
        <div className="techBenefits__block--second">з більшістю корпоративних систем</div>
        <div className="techBenefits__helpBlock"></div>
      </div>
    </div>

  </div>
);
