import toDo from './toDO';

const store = () => {
  const module = {};

  module.storeToDo = () => {
    localStorage.setItem('toDoArr', JSON.stringify(toDo.module.toDoArr));
    const toDoTaskStored = JSON.parse(localStorage.getItem('toDoArr'));
    console.log(toDoTaskStored);
  };

  return { module };
};

export default store;
