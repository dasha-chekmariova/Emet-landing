/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './App.scss';
import './blocks/header.scss';
import './blocks/navigation.scss';
import './blocks/main.scss';
import './blocks/emet.scss';
import './blocks/audio.scss';
import './blocks/aplication.scss';
import './blocks/benefits.scss';
import './blocks/solvingProblem.scss';
import './blocks/techBenefits.scss';
import './blocks/orderButtons.scss';
import './blocks/form.scss';
import './blocks/footer.scss';

import logo from './img/Logo.svg';
import elips3 from './img/Ellipse 3.svg';
import elips1 from './img/Ellipse 1.svg';
import emetImg from './img/emet-block.png';
import check from './img/check.svg';
import audio from './img/audio.png';

import group from './img/Group 39.svg';
import headphones from './img/headphones.svg';
import list from './img/list.svg';
import loudspeaker from './img/loudspeaker.svg';
import phone from './img/phone.svg';
import smile from './img/smile.svg';

export const App: React.FC = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">

          <img
            className="nav__logo"
            src={logo}
            alt="logo"
          />
          <div className="nav__link">
            <p className="nav__item">що це</p>
            <p className="nav__item">для кого</p>
            <p className="nav__item">переваги</p>
            <p className="nav__item">можливості</p>
            <p className="nav__item nav__item--active">уточнити деталі</p>
          </div>

          <button
            className="nav__button button"
            type="submit"
          >
            замовити послугу
          </button>
        </nav>

        <p className="header__cartoon-sign header__cartoon-sign--first">Дзвоню сам</p>
        <p className="header__cartoon-sign header__cartoon-sign--second">Приймаю дзвінки</p>

        <div className="header__main-info">
          <h2 className="header__subtitle">EMET - РОБОТ-ОПЕРАТОР. КОМУНІКАЦІЇ НОВОГО ПОКОЛІННЯ</h2>
          <h1 className="header__title">Emet поговорить із клієнтом, автоматично зафіксує інформацію, сформує звіт та передасть відповідальному співробітнику на обробку у готовому вигляді</h1>

          <button
            className="button button--width"
            type="submit"
          >
            замовити послугу
          </button>
        </div>

        <p className="header__cartoon-sign header__cartoon-sign--third">Слухаю й аналізую інші дзвінки</p>
      </header>
      <main className="main">
        <h2 className="main__title">як використовувати</h2>
        <img
          className="main__title-img"
          src={elips3}
          alt="point"
        />

        <div className="emet">
          <img
            className="emet__image"
            src={emetImg}
            alt="Emet robot"
          />
          <p className="emet__title">система EMET дозволяє повністю імітувати людину у телефонних розмовах</p>

          <div className="emet-list emet-list--1">
            <img
              className="emet__check"
              src={check}
              alt="check"
            />
            <p className="emet__textList">Робот звільняє операторів для складніших завдань </p>
          </div>

          <div className="emet-list emet-list--2">
            <img
              className="emet__check"
              src={check}
              alt="check"
            />
            <p className="emet__textList">EMET миттєво масштабується під ваші потреби. На відміну від операторів, він не обідає/не хворіє/не ходить у відпустку, а найм та навчання йому не потрібно – все, що потрібно, він вже має </p>
          </div>

          <div className="emet-list emet-list--3">
            <img
              className="emet__check"
              src={check}
              alt="check"
            />
            <p className="emet__textList">Робот не робить помилок. Він завжди правильно відпрацює закладений у нього скрипт</p>
          </div>

          <div className="emet-list emet-list--4">
            <img
              className="emet__check"
              src={check}
              alt="check"
            />
            <p className="emet__textList">Не злиться і не нервує. 5 спроб або 10 – він виконає та повторить все, що потрібно</p>
          </div>

          <div className="emet-list emet-list--5">
            <img
              className="emet__check"
              src={check}
              alt="check"
            />
            <p className="emet__textList">
              EMET кмітливий – він може говорити цифри та дати, вулиці та імена та читати прізвища.
              А ще він вміє розуміти та запам’ятовувати відповіді!

            </p>
          </div>

          <div className="emet-list emet-list--6">
            <img
              className="emet__check"
              src={check}
              alt="check"
            />
            <p className="emet__textList">Завдяки точній транскрибації голосу в текст, ви зможете вирішити багато завдань бізнесу</p>
          </div>

        </div>

        <div className="audio-example">
          <p className="audio-example__subtitle">приклад застосування Emet</p>
          <h2 className="audio-example__title">
            клієнти, які спілкуються з EMET’ом,
            <span className="audio-example__title--highlights-1">
              {' не можуть відрізнити '}
            </span>
            його від
            <span className="audio-example__title--highlights-2">
              {' живого оператора '}
            </span>
          </h2>
          <img
            className="audio-example__image"
            src={audio}
            alt="audio robot emet"
          />
        </div>

        <div className="aplication">
          <h2 className="main__title">області застосування EMET</h2>
          <img
            className="main__title-img"
            src={elips1}
            alt="point"
          />

          <h2 className="aplication__title">
            <span className="aplication__title--5A31F5">ЕМЕТ </span>
            . Система-робот із високим рівнем «людяності» з легкістю
            <span className="aplication__title--77C8D0"> розвантажить або замінить </span>
            операторів Call-центру
            допоможе вам
            <span className="aplication__title--5A31F5"> проконтролювати та проаналізувати </span>
            роботу операторів
          </h2>

          <div className="aplication__block">
            <div className="aplication__card">
              <img src={phone} alt="phone" />
              <h3 className="aplication__card-title">ПРИЙМАННЯ ЗАМОВЛЕНЬ або ПРОДАЖІ</h3>
              <p className="aplication__card-subtitle">Ви можете автоматизувати холодні дзвінки або отримання замовлень, доручивши додзвон та первинну пропозицію ЕМЕТУ</p>
            </div>

            <div className="aplication__card">
              <img src={headphones} alt="headphones" />
              <h3 className="aplication__card-title">АКТУАЛІЗАЦІЯ ДАНИХ І ДОВІДКА, ПІДТРИМКА КЛІЄНТІВ</h3>
              <p className="aplication__card-subtitle">Ці завдання вирішуються за допомогою розпізнавання голосу. У будь-якому часовому поясі робота завжди виконана «на відмінно». База відповідей доступна до розвантаження у зручному форматі</p>
            </div>

            <div className="aplication__card">
              <img src={list} alt="list" />
              <h3 className="aplication__card-title">КОНТРОЛЬ І АНАЛІЗ РОБОТИ ЖИВИХ ОПЕРАТОРІВ</h3>
              <p className="aplication__card-subtitle">В Call-центр, відділі продажу, технічній підтримці, відділі контролю якості чи службі безпеки</p>
            </div>

          </div>
          <div className="aplication__block">

            <div className="aplication__card">
              <img src={loudspeaker} alt="loudspeakers" />
              <h3 className="aplication__card-title">ІНФОРМУВАННЯ або ЗАЛУЧЕННЯ</h3>
              <p className="aplication__card-subtitle">Сповіщення про заборгованість, інформування про нові продукти або зміну в розкладі роботи – та робота з якою робот справляється найкраще</p>
            </div>

            <img
              className="aplication__card--message"
              src={group}
              alt="message"
            />

            <div className="aplication__card">
              <img src={smile} alt="smile" />
              <h3 className="aplication__card-title">ОПИТУВАННЯ й АНКЕТУВАННЯ</h3>
              <p className="aplication__card-subtitle">Відмінний інструмент для продуктивної, індивідуальної, і, якщо необхідно, знеособленої роботи з клієнтом</p>
            </div>
          </div>
        </div>

        <div className="benefits">
          <h3 className="benefits__title">безперечні переваги ЕМЕТА перед живими операторами</h3>

          <div className="benefits__card-first">ДОБРА ПАМ’ЯТЬ</div>
          <div className="benefits__card-second">пам’ятає все, що було сказано у розмові та будує свої відповіді виходячи з отриманих даних</div>

        </div>

        <div className="solvingProblem">
          <h2 className="main__title">які проблеми вирішує</h2>
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

          <h2 className="main__title">технічні переваги</h2>
          <img
            className="main__title-img"
            src={elips1}
            alt="point"
          />

          <div className="techBenefits">
            <div className="techBenefits__block--first">МАСШТАБОВАНІСТЬ</div>
            <div className="techBenefits__block--second">навчається при кожному дзвінку, з кожним разом стає ще розумнішим</div>
          </div>
        </div>

        <div className="orderButtons">
          <button
            className="button button--width orderButtons--margin"
            type="submit"
          >
            замовити послугу
          </button>

          <button
            className="button button--width"
            type="submit"
          >
            уточнити деталі
          </button>
        </div>

        <div className="form">
          <p className="form__title">
            Ми будемо раді допомогти Вам
            <span className="form__title--5A31F5"> покращити </span>
            <span className="form__title--77C8D0"> бізнес </span>
          </p>
          <form className="form__block" action="#" method="post">
            <label className="form__text">Ім&apos;я</label>
            <input className="form__input" type="text" />

            <label className="form__text">Компанія</label>
            <input className="form__input" type="text" />

            <label className="form__text">Номер телефону</label>
            <input className="form__input" type="tel" />

            <label className="form__text">Email</label>
            <input className="form__input" type="email" />

            <label className="form__text">Ваше запитання</label>
            <textarea className="form__input form__input--textarea" name=""></textarea>

            <button
              type="submit"
              className="form__button"
            >
              відправити
            </button>
          </form>
        </div>
      </main>

      <footer className="footer">
        <img
          className="footer__logo"
          src={logo}
          alt="logo"
        />
      </footer>
    </>
  );
};
