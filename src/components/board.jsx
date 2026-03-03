import { useSelector, useDispatch } from "react-redux"; // импортируем хуки useSelector и useDispatch из библиотеки react-redux, которые позволяют нам взаимодействовать с состоянием Redux и отправлять действия (actions) для обновления этого состояния
import { Field } from "./field"; // импортируем компонент Field, который представляет собой отдельную клетку игрового поля
import { MAKE_MOVE } from "../actions/make-move"; // импортируем действие MAKE_MOVE, которое будет использоваться для совершения хода игрока
import { RESET } from "../actions/reset"; // импортируем действие RESET, которое будет использоваться для сброса игры к начальному состоянию
import styles from "./Board.module.css";

export const Board = () => {
  // компонент Board, который представляет собой игровое поле и логику игры
  const dispatch = useDispatch(); // получаем функцию dispatch из хука useDispatch, которая позволяет нам отправлять действия (actions) для обновления состояния Redux
  const { field, xIsNext, winner } = useSelector((state) => state); // используем хук useSelector для доступа к состоянию Redux и извлекаем из него необходимые данные: field (текущее состояние игрового поля), xIsNext (кто ходит следующим) и winner (победитель игры)

  const handleClick = (index) => {
    // функция для обработки клика по клетке игрового поля, принимает индекс клетки, по которой был клик
    if (winner || field[index]) return; // если уже есть победитель или клетка, по которой был клик, уже занята, то функция просто возвращает без выполнения дальнейших действий, чтобы предотвратить некорректные ходы
    dispatch(MAKE_MOVE(index)); // если клетка свободна и нет победителя, отправляем действие MAKE_MOVE с индексом клетки, чтобы обновить состояние игрового поля и совершить ход игрока
  };

  const status = winner // если есть победитель, отображаем сообщение о победе, иначе отображаем информацию о том, кто ходит следующим
    ? `Winner: ${winner}`
    : `Next: ${xIsNext ? "X" : "O"}`;

  return (
    <div className={styles.game}>
      <div className={styles.status}>{status}</div>
      <div className={styles.board}>
        {field.map((v, i) => (
          <Field key={i} value={v} onClick={() => handleClick(i)} />
        ))}
        {/* проходим по каждому элементу массива field (который представляет
        собой игровое поле) и для каждого элемента создаем компонент Field,
        передавая ему значение клетки (v) и функцию onClick, которая будет
        вызываться при клике на эту клетку и передавать индекс клетки (i) в
        функцию handleClick для обработки хода игрока */}
      </div>
      <button className={styles.reset} onClick={() => dispatch(RESET())}>
        Reset Game
      </button>
    </div>
  );
};
