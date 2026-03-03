import styles from "./Field.module.css";

export const Field = ({ value, onClick }) => {
  // компонент Field, который представляет собой отдельную клетку игрового поля, принимает два пропса: value (значение клетки, может быть "X", "O" или null) и onClick (функция, которая будет вызываться при клике на эту клетку)
  return (
    <button className={styles.field} onClick={onClick}>
      {value === "X" ? "X" : value === "O" ? "O" : ""}
    </button>
  );
};
