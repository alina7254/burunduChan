import React from "react";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={` overflow-auto fixed z-40 h-screen bg-primary transition-transform duration-300 ${
        isOpen ? "transform translate-x-0" : "transform -translate-x-full"
      }`}
      style={{ width: "250px", top: 70, left: 0,}}
    >
      <div id="dropdownList">
        <table className="table bg-primary table-pin-rows p-4">
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
              <td className="text-nowrap text-white">/dom/ - Домострой</td>
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
              <td className="text-nowrap text-white">/em/ - Другие страны</td>
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
              <td className="text-nowrap text-white">/izd/ - Графомания</td>
            </tr>
            <tr>
              <td className="text-nowrap text-white">/int/ - International</td>
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
              <td className="text-nowrap text-white">/out/ - Активный отдых</td>
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
              <td className="text-nowrap text-white">/ra/ - Радиотехника</td>
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
              <td className="text-nowrap text-white">/se/ - Самообразование</td>
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
              <td className="text-nowrap text-white">/un/ - Образование</td>
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
  );
};
export default Sidebar;
