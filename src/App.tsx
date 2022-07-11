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
          className="nav__button"
          type="submit"
        >
          замовити послугу
        </button>
      </nav>

      <p className="header__cartoon-sign header__cartoon-sign--first">Дзвоню сам</p>
      <p className="header__cartoon-sign header__cartoon-sign--second">Приймаю дзвінки</p>
    </header>
  );
};
