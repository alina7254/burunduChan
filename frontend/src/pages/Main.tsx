import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/burunduk7.png";
import img2 from "../assets/burunduk5.png";

function MyComponent() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [text, setText] = useState("");

  const handleClick = () => {
    navigate("/b");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const doAddTags = (startTag: string, endTag: string, textareaId: string) => {
    const textarea = document.getElementById(textareaId) as HTMLTextAreaElement;
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    const selectedText = textarea.value.substring(startPos, endPos);
    const replacement = `${startTag}${selectedText}${endTag}`;
    setText(text.substring(0, startPos) + replacement + text.substring(endPos));
  };

  const handleSpoiler = () => {
    const textarea = document.getElementById(
      "textareaId"
    ) as HTMLTextAreaElement;
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    const selectedText = textarea.value.substring(startPos, endPos);
    const replacement = `[spoiler]${selectedText}[/spoiler]`;
    setText(text.substring(0, startPos) + replacement + text.substring(endPos));
  };

  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="flex flex-row bg-primary w-full p-4">
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

            <h1 className="font-semibold subpixel-antialiased tracking-wide btn btn-link press-start-2p-regular text-md text-white lg:text-2xl no-underline hover:no-underline">
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
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-center">
              <div
                className="hero min-h-screen"
                style={{ backgroundImage: `url(${img1})` }}
              >
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-balance text-white">
                  <div className="max-w-md">
                    <h1 className="uppercase tracking-wide copy-h1-alt flex justify-center mb-2 text-balance text-nowrap text-primary text-center text-3xl  press-start-2p-regular">
                      Настоящий анон перебьется,
                    </h1>
                    <p className="leading-relaxed tracking-normal mb-4 text-wrap text-justify text-pretty">
                      {" "}
                      он уйдет из городов в поля, в леса. Будет собирать грибы,
                      ягоды, орехи — анон готов в минуту больших печалей
                      превратиться в анон-бурундук, анон-хомяк, он будет
                      запасать на зиму всякие корешки, всякие луковки.” -
                      Неизвестный
                    </p>
                    <div className="flex flex-row space-x-2">
                      <div className="flex flex-col">
                        <label
                          htmlFor="my_modal_6"
                          className="btn btn-primary btn-wide press-start-2p-regular text-center tracking-wide"
                        >
                          СОЗДАТЬ ТРЕД
                        </label>

                        <input
                          type="checkbox"
                          id="my_modal_6"
                          className="modal-toggle"
                        />
                        <div className="modal" role="dialog">
                          <div className="modal-box">
                            <h1 className="m-2 text-2xl font-bold press-start-2p-regular leading-none text-primary">
                              СОЗДАТЬ ТРЕД
                            </h1>
                            <p className="p-2">
                              <label className="form-control w-full max-w-xs m-2">
                                <label
                                  id="large"
                                  className="block mb-2 text-secondary"
                                >
                                  Название треда
                                </label>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered w-full max-w-xs"
                                />
                              </label>
                              <form className="m-2 w-full">
                                <label
                                  id="large"
                                  className="block mb-2 text-secondary"
                                >
                                  Раздел
                                </label>
                                <select
                                  id="large"
                                  className="block w-full px-4 py-3 text-secondary bg-base-200"
                                >
                                  <option selected>Выберете раздел</option>
                                  <option value="US">/a/</option>
                                  <option value="CA">/ai/</option>
                                  <option value="FR">/b/</option>
                                  <option value="DE">/bo/</option>
                                </select>
                              </form>

                              <form>
                                <div className="w-full m-2 bg-base-200">
                                  <div className="flex items-center justify-between px-3 py-3">
                                    <div className="flex flex-wrap items-center divide-white sm:divide-x sm:rtl:divide-x-reverse">
                                      <div className="flex items-center justify-between w-full">
                                        <div className="form-control">
                                          <label className="label cursor-pointer">
                                            <input
                                              type="checkbox"
                                              defaultChecked
                                              className="checkbox checkbox-secondary checkbox-sm mr-1"
                                            />
                                            <span className="label-text text-xs">
                                              ОП треда
                                            </span>
                                          </label>
                                        </div>
                                        <div className="form-control">
                                          <label className="label cursor-pointer">
                                            <input
                                              type="checkbox"
                                              defaultChecked
                                              className="checkbox checkbox-secondary checkbox-sm mr-1"
                                            />
                                            <span className="label-text text-xs">
                                              Sage
                                            </span>
                                          </label>
                                        </div>
                                        <div className="flex flex-wrap space-x-1">
                                          <button
                                            className="postform__mu postform__mu_type_b btn btn-outline btn-xs"
                                            type="button"
                                            onClick={() =>
                                              doAddTags(
                                                "[b]",
                                                "[/b]",
                                                "textareaId"
                                              )
                                            }
                                          >
                                            <span>B</span>
                                          </button>
                                          <button
                                            className="postform__mu postform__mu_type_i btn btn-outline btn-xs"
                                            type="button"
                                            onClick={() =>
                                              doAddTags(
                                                "[i]",
                                                "[/i]",
                                                "textareaId"
                                              )
                                            }
                                          >
                                            <span>I</span>
                                          </button>
                                          <button
                                            className="postform__mu postform__mu_type_q btn btn-outline btn-xs"
                                            type="button"
                                            onClick={() =>
                                              doAddTags(
                                                "&gt;",
                                                "",
                                                "textareaId"
                                              )
                                            }
                                          >
                                            <span>&gt;</span>
                                          </button>
                                          <button
                                            className="postform__mu postform__mu_type_u btn btn-outline btn-xs"
                                            type="button"
                                            onClick={() =>
                                              doAddTags(
                                                "[u]",
                                                "[/u]",
                                                "textareaId"
                                              )
                                            }
                                          >
                                            <span className="underline">U</span>
                                          </button>
                                          <button
                                            className="postform__mu postform__mu_type_o btn btn-outline btn-xs"
                                            type="button"
                                            onClick={() =>
                                              doAddTags(
                                                "[o]",
                                                "[/o]",
                                                "textareaId"
                                              )
                                            }
                                          >
                                            <span className="overline">O</span>
                                          </button>
                                          <button
                                            className="postform__mu postform__mu_type_sp btn btn-outline btn-xs relative"
                                            type="button"
                                            onClick={handleSpoiler}
                                          >
                                            <span className="absolute flex items-center justify-center hover:opacity-100 opacity-0">
                                              ??
                                            </span>
                                          </button>
                                          <button
                                            className="postform__mu postform__mu_type_s btn btn-outline btn-xs"
                                            type="button"
                                            onClick={() =>
                                              doAddTags(
                                                "[s]",
                                                "[/s]",
                                                "textareaId"
                                              )
                                            }
                                          >
                                            <span>S</span>
                                          </button>
                                          <button
                                            className="postform__mu btn btn-outline btn-xs"
                                            type="button"
                                            onClick={() =>
                                              doAddTags(
                                                "[sup]",
                                                "[/sup]",
                                                "textareaId"
                                              )
                                            }
                                          >
                                            <span>
                                              A<sup>a</sup>
                                            </span>
                                          </button>
                                          <button
                                            className="postform__mu btn btn-outline btn-xs"
                                            type="button"
                                            onClick={() =>
                                              doAddTags(
                                                "[sub]",
                                                "[/sub]",
                                                "textareaId"
                                              )
                                            }
                                          >
                                            <span>
                                              A<sub>a</sub>
                                            </span>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="px-4 py-2 bg-base-200">
                                    <label id="editor" className="sr-only">
                                      Publish post
                                    </label>
                                    <textarea
                                      className="block w-full px-2 py-2 text-sm text-secondary bg-white"
                                      placeholder="Введите текст..."
                                      id="textareaId"
                                      value={text}
                                      onChange={(e) => setText(e.target.value)}
                                    ></textarea>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center w-full m-2">
                                  <label
                                    id="dropzone-file"
                                    className="flex flex-col items-center justify-center w-full"
                                  >
                                    <div className="flex flex-col items-center justify-center pt-5 pb-5 bg-base-200 w-full">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                                        />
                                      </svg>

                                      <p className="m-2 text-sm text-secondary">
                                        НАЖМИТЕ, ЧТОБЫ ЗАГРУЗИТЬ ИЛИ ПЕРЕТАЩИТЕ
                                        ФАЙЛ
                                      </p>
                                    </div>
                                    <input
                                      id="dropzone-file"
                                      type="file"
                                      className="hidden"
                                    />
                                  </label>
                                </div>
                              </form>
                            </p>
                            <div className="modal-action">
                              <button
                                type="submit"
                                className="textarea textarea-primary inline-flex items-center text-sm press-start-2p-regular text-white bg-primary"
                              >
                                ПОСТ
                              </button>
                              <label
                                htmlFor="my_modal_6"
                                className="btn btn-primary btn-outline press-start-2p-regular text-center"
                              >
                                ОТМЕНИТЬ
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={handleClick}
                        className="btn btn-primary btn-outline btn-wide press-start-2p-regular text-center tracking-wide"
                      >
                        НА ГЛАВНУЮ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col m-4">
              <div className="chat chat-bubble flex flex-col bg-base-100">
                <div className="chat-header text-sm text-base-content">
                  Аноним 18/04/2024 Чтв 14:55:29 №123456789
                </div>
              </div>
              <div className="flex flex-row">
                <img
                  src={img2}
                  alt="бурундук.жпг"
                  className="flex w-1/4 ml-4"
                ></img>
                <span className="flex flex-col text-base-content ml-4">
                  <blockquote className="leading-relaxed subpixel-antialiased tracking-wide press-start-2p-regular text-xs lg:text-sm text-primary uppercase">
                    <p>День анона-бурундука</p>
                  </blockquote>{" "}
                  “Настоящий анон перебьется, он уйдет из городов в поля, в
                  леса. Будет собирать грибы, ягоды, орехи — анон готов в минуту
                  больших печалей превратиться в анон-бурундук, анон-хомяк, он
                  будет запасать на зиму всякие корешки, всякие луковки.” -
                  Неизвестный
                </span>
              </div>

              <div className="chat-footer">
                <button className="btn btn-link no-underline">Ответить</button>
              </div>
            </div>
            <div className="chat chat-bubble flex flex-col ml-8 max-w-prose bg-base-200 relative">
              <div className="chat-header text-xm text-base-content">
                <span className="flex flex-row justify-between">
                  Аноним 18/04/2024 Чтв 14:55:29 №123456789
                </span>
              </div>
              <p className="flex flex-col text-secondary ml-4">
                <button className="btn btn-link text-primary no-underline w-4 ml-6 my-2">
                  {">>20224045"}
                </button>
                Что ж
              </p>
              <div className="chat-footer flex justify-start">
                <button className="btn btn-link no-underline">Ответить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
