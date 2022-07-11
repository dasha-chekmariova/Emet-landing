import React from 'react';
import './App.scss';
import logo from './img/Logo.svg';

export const App: React.FC = () => {
  return (
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
  );
};
