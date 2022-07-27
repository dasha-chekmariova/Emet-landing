import React from 'react';

import check from './img/check.svg';

export const ListOfEmet: React.FC = () => (
  <>
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
  </>
);
