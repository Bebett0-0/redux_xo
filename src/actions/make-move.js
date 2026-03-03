export const MAKE_MOVE = (index) => {
  // функция для создания действия (action) при совершении хода игрока, принимает индекс клетки, по которой был сделан ход
  return {
    type: "MAKE_MOVE",
    payload: index,
  };
};
