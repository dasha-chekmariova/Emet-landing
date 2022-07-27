/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Media from 'react-media';

import { ListOfEmet } from './listOfEmet';

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
import elips1 from './img/Ellipse 1.svg';
import elips3 from './img/Ellipse 3.svg';
import emetImg from './img/emet-block.png';
import audio from './img/audio.png';
import alex from './img/pexel-Alex.png';
import message from './img/message.png';

import headphones from './img/headphones.svg';
import list from './img/list.svg';
import loudspeaker from './img/loudspeaker.svg';
import phone from './img/phone.svg';
import smile from './img/smile.svg';
import { BenefitsDes } from './BenefitsDes';
import { Benefits } from './Benefits';
import { SolvingProblem } from './solvingProblem';
import { SolvingProblemM } from './SolvingProblemM';

export const Finish: React.FC<{}> = () => {
  return (
    <>
      <>
        <Media queries={{
          small: '(max-width: 599px)',
          medium: '(min-width: 1200px) and (max-width: 1500px)',
          large: '(min-width: 1500px)',
        }}
        >
          {matches => (
            <>
              <header className="header">
                <nav className="nav">

                  <img
                    className="nav__logo"
                    src={logo}
                    alt="logo"
                  />
                  <div className="nav__link">
                    {matches.large && (
                      <>
                        <p className="nav__item">що це</p>
                        <p className="nav__item">для кого</p>
                        <p className="nav__item">переваги</p>
                        <p className="nav__item">можливості</p>
                        <p className="nav__item nav__item--active">уточнити деталі</p>
                      </>
                    )}

                    {matches.medium && (
                      <>
                        <p className="nav__item">Що це</p>
                        <p className="nav__item">Для кого</p>
                        <p className="nav__item">Переваги</p>
                        <p className="nav__item">Можливості</p>
                      </>
                    )}
                  </div>

                  <button
                    className="nav__button button"
                    type="submit"
                  >
                    замовити послугу
                  </button>
                </nav>

                {matches.large && (
                  <>
                    <p className="header__cartoon-sign header__cartoon-sign--first">Дзвоню сам</p>
                    <p className="header__cartoon-sign header__cartoon-sign--second">Приймаю дзвінки</p>
                  </>
                )}

                <div className="header__main-info">
                  <h2 className="header__subtitle">EMET - РОБОТ-ОПЕРАТОР. КОМУНІКАЦІЇ НОВОГО ПОКОЛІННЯ</h2>
                  <h1 className="header__title">Emet поговорить із клієнтом, автоматично зафіксує інформацію, сформує звіт та передасть відповідальному співробітнику на обробку у готовому вигляді</h1>

                  {matches.medium && (
                    <img className="header__img" src={alex} alt="Alex" />
                  )}

                  <button
                    className="button button--width header__button"
                    type="submit"
                  >
                    замовити послугу
                  </button>
                </div>

                {matches.large && <p className="header__cartoon-sign header__cartoon-sign--third">Слухаю й аналізую інші дзвінки</p>}

              </header>
              <main className="main">

                {matches.large && (
                  <>
                    <h2 className="main__title emet__subtitle">як використовувати</h2>
                    {matches.large && (
                      <img
                        className="main__title-img"
                        src={elips3}
                        alt="point"
                      />
                    )}
                  </>
                )}
                <div className="emet">

                  {matches.medium && (
                    <>
                      <h2 className="main__title emet__subtitle">як використовувати</h2>
                      {matches.large && (
                        <img
                          className="main__title-img"
                          src={elips3}
                          alt="point"
                        />
                      )}
                    </>
                  )}
                  {matches.large && (
                    <img
                      className="emet__image"
                      src={emetImg}
                      alt="Emet robot"
                    />
                  )}
                  <p className="emet__title">система EMET дозволяє повністю імітувати людину у телефонних розмовах</p>
                  {matches.large && <ListOfEmet />}
                  {matches.medium && (
                    <ListOfEmet />
                  )}
                </div>

                <div className="audio-example">
                  <p className="main__title audio-example__subtitle">приклад застосування Emet</p>
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
                  <h2 className="main__title aplication__subtitle">області застосування EMET</h2>
                  {matches.large && (
                    <img
                      className="main__title-img"
                      src={elips1}
                      alt="point"
                    />
                  )}

                  <h2 className="aplication__title">
                    <span className="aplication__title--5A31F5">ЕМЕТ </span>
                    . Система-робот із високим рівнем «людяності» з легкістю
                    <span className="aplication__title--77C8D0"> розвантажить або замінить </span>
                    операторів Call-центру
                    допоможе вам
                    <span className="aplication__title--5A31F5"> проконтролювати та проаналізувати </span>
                    роботу операторів
                  </h2>
                  <div className="aplication__grid">
                    <div className="aplication__block aplication__block--1">
                      <div className="aplication__card">
                        <img
                          className="aplication__img"
                          src={phone}
                          alt="phone"
                        />
                        <h3 className="aplication__card-title">ПРИЙМАННЯ ЗАМОВЛЕНЬ або ПРОДАЖІ</h3>
                        <p className="aplication__card-subtitle">Ви можете автоматизувати холодні дзвінки або отримання замовлень, доручивши додзвон та первинну пропозицію ЕМЕТУ</p>
                      </div>

                      <div className="aplication__card">
                        <img
                          className="aplication__img"
                          src={headphones}
                          alt="headphones"
                        />
                        <h3 className="aplication__card-title">АКТУАЛІЗАЦІЯ ДАНИХ І ДОВІДКА, ПІДТРИМКА КЛІЄНТІВ</h3>
                        <p className="aplication__card-subtitle">Ці завдання вирішуються за допомогою розпізнавання голосу. У будь-якому часовому поясі робота завжди виконана «на відмінно». База відповідей доступна до розвантаження у зручному форматі</p>
                      </div>

                      <div className="aplication__card">
                        <img
                          className="aplication__img"
                          src={list}
                          alt="list"
                        />
                        <h3 className="aplication__card-title">КОНТРОЛЬ І АНАЛІЗ РОБОТИ ЖИВИХ ОПЕРАТОРІВ</h3>
                        <p className="aplication__card-subtitle">В Call-центр, відділі продажу, технічній підтримці, відділі контролю якості чи службі безпеки</p>
                      </div>

                    </div>
                    <div className="aplication__block aplication__block--2">

                      <div className="aplication__card">
                        <img
                          className="aplication__img"
                          src={loudspeaker}
                          alt="loudspeakers"
                        />
                        <h3 className="aplication__card-title">ІНФОРМУВАННЯ або ЗАЛУЧЕННЯ</h3>
                        <p className="aplication__card-subtitle">Сповіщення про заборгованість, інформування про нові продукти або зміну в розкладі роботи – та робота з якою робот справляється найкраще</p>
                      </div>

                      <div className="aplication__card">
                        <img
                          className="aplication__img"
                          src={message}
                          alt="message"
                        />
                        <h3 className="aplication__card-title">РОЗПІЗНАННЯ МОВИ</h3>
                        <p className="aplication__card-subtitle">Система постійно оцінює великий діапазон стану бесіди, веде розмову, майже не відрізняється від людини</p>
                      </div>

                      <div className="aplication__card">
                        <img
                          className="aplication__img"
                          src={smile}
                          alt="smile"
                        />
                        <h3 className="aplication__card-title">ОПИТУВАННЯ й АНКЕТУВАННЯ</h3>
                        <p className="aplication__card-subtitle">Відмінний інструмент для продуктивної, індивідуальної, і, якщо необхідно, знеособленої роботи з клієнтом</p>
                      </div>
                    </div>
                  </div>
                </div>

                {matches.large && <BenefitsDes />}
                {matches.medium && <Benefits />}

                {matches.large && <SolvingProblem />}
                {matches.medium && <SolvingProblemM />}
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
          )}
        </Media>
      </>
    </>
  );
};
