import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = ({ handleClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="flex flex-row bg-primary w-screen p-4">
          <div className="flex flex-row justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 20 23"
              className="w-10 h-19"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>

            <h1 
          onClick={handleClick}
            className="btn font-semibold subpixel-antialiased tracking-wide btn btn-link press-start-2p-regular text-md text-white lg:text-2xl no-underline hover:no-underline">
              БУРУНДУ.ЧАН
            </h1>
          </div>
          <div className="flex flex-row justify-end flex-grow">
            <button
              id="toggleButton"
              className="block  mr-4"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-white"
              >
                {isDropdownOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                )}
              </svg>
            </button>

            <button className="md:hidden mr-4" onClick={toggleSearch}>
              <FaSearch className="w-5 h-5 text-white" />
            </button>
            <div className="form-control flex justify-end mr-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="поиск"
                  className={`input input-bordered w-24 md:w-auto ${isSearchOpen ? "block" : "hidden"} md:block`}
                />
              </div>
            </div>

            <div className="dropdown dropdown-bottom dropdown-end flex justify-end mr-4">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost text-white text-xs sm:text-sm md:text-base lg:text-md tracking-wide press-start-2p-regular"
              >
                ИНФО
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu shadow p-2 bg-base-200 text-secondary tracking-wide"
              >
                <li>
                  <label htmlFor="rules_modal" className="btn text-nowrap">
                    /п/равила
                  </label>
                </li>

                <li>
                  <label htmlFor="stats_modal" className="btn text-nowrap">
                    /с/татистика
                  </label>
                </li>
              </ul>
              <input
                type="checkbox"
                id="rules_modal"
                className="modal-toggle"
              />
              <div className="modal" role="dialog">
                <div className="modal-box">
                  <h1 className="text-lg font-bold">Общие правила</h1>
                  <ul className="p-4 list list-decimal">
                    <li>
                      Не нарушайте законы России и страны, в которой Вы
                      находитесь в данный момент. Детская порнография и ее
                      имитация, в т.ч. и рисованная, наркотики, терроризм,
                      суицид запрещены, даже если они разрешены вашими местными
                      законами.
                    </li>{" "}
                    <li>
                      Бурунду.чан является сайтом для лиц старше 18-ти лет.
                      Посещая его, вы подтверждаете свое совершеннолетие.
                    </li>
                    <li>
                      Деанонимизация, публикация персональных данных и
                      агрессивное преследование (травля) не приветствуются.
                      Набеги на внутренние разделы Бурунду.чан запрещены.
                    </li>
                  </ul>
                </div>
                <label className="modal-backdrop" htmlFor="rules_modal">
                  Close
                </label>
              </div>

              <input
                type="checkbox"
                id="stats_modal"
                className="modal-toggle"
              />
              <div className="modal" role="dialog">
                <div className="modal-box">
                  <h1 className="font-bold text-lg">Статистика</h1>
                  <p className="py-4">Статистика</p>
                  <div className="modal-action">
                    <label htmlFor="stats_modal" className="btn">
                      Close!
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown flex justify-end mr-4">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost text-white text-xs sm:text-sm md:text-base lg:text-md press-start-2p-regular"
              >
                ТЕМЫ
                <svg
                  width="12px"
                  height="12px"
                  className="h-2 w-2 fill-current opacity-60 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2048 2048"
                >
                  <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-200 text-secondary"
              >
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Default"
                    value="default"
                  />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Sunset"
                    value="sunset"
                  />
                </li>

                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Emerald"
                    value="emerald"
                  />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Dim"
                    value="dim"
                  />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Cyberpunk"
                    value="cyberpunk"
                  />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Synthwave"
                    value="synthwave"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div id="dropdownList" className="">
            <div
              id="dropdownContent"
              className={`flex flex-col border-r border-t border-solid border-base-200 overflow-auto h-full w-full ${isDropdownOpen ? "" : "hidden"}`}
            >
              <table className="table bg-primary table-pin-rows">
                <thead>
                  <tr>
                    <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                      A
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-nowrap text-white">
                      /ai/ - Искусственный интеллект
                    </td>
                  </tr>
                  <tr>
                    <td className="text-nowrap text-white">/a/ - Аниме</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                      B
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-nowrap text-white">/b/ - Бред</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap text-white">/bo/ - Книги</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                      C
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-nowrap text-white">
                      /c/ - Комиксы и мультфильмы
                    </td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                      D
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-nowrap text-white">/diy/ - Хобби</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap text-white">/di/ - Столовая</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap text-white">
                      /dom/ - Домострой
                    </td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                      E
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-nowrap text-white">
                      /em/ - Другие страны
                    </td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                      F
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-nowrap text-white">/fs/ - Фэнтези</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap text-white">
                      /fl/ - Иностранные языки
                    </td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                      G
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-nowrap text-white">/gd/ - Геймдев</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                      H
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-nowrap text-white">
                      /hw/ - Железо и техника
                    </td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                      I
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-nowrap text-white">
                      /izd/ - Графомания
                    </td>
                  </tr>
                  <tr>
                    <td className="text-nowrap text-white">
                      /int/ - International
                    </td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                      M
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-nowrap text-white">/mov/ - Фильмы</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap text-white">/ma/ - Манга</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap text-white">/me/ - Медицина</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap text-white">/mu/ - Музыка</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap text-white">/mg/ - Магия</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                      N
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-nowrap text-white">
                      /ne/ - Животные и природа
                    </td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                      O
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-nowrap text-white">
                      /out/ - Активный отдых
                    </td>
                  </tr>
                  <tr>
                    <td className="text-nowrap text-white">/o/ - Рисовач</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                      P
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-nowrap text-white">
                      /pr/ - Программирование
                    </td>
                  </tr>
                  <tr>
                    <td className="text-nowrap text-white">
                      /psy/ - Психология и психиатрия
                    </td>
                  </tr>
                  <tr>
                    <td className="text-nowrap text-white">/ph/ - Философия</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                      R
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-nowrap text-white">/re/ - Религия</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap text-white">
                      /ra/ - Радиотехника
                    </td>
                  </tr>
                  <tr>
                    <td className="text-nowrap text-white">/r/ - Просьбы</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                      S
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-nowrap text-white">/sp/ - Спорт</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap text-white">
                      /sn/ - Паранормальные явления
                    </td>
                  </tr>
                  <tr>
                    <td className="text-nowrap text-white">
                      /se/ - Самообразование
                    </td>
                  </tr>
                  <tr>
                    <td className="text-nowrap text-white">/sci/ - Наука</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                      T
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-nowrap text-white">/tv/ - Сериалы</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                      U
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-nowrap text-white">
                      /un/ - Образование
                    </td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                      V
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-nowrap text-white">/vg/ - Видеоигры</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                      W
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-nowrap text-white">/wrk/ - Работа</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                      Z
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-nowrap text-white">
                      /zog/ - Теории заговора
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
