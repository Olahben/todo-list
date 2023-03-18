import toDo from './toDO';

const store = () => {
  const module = {};

  module.storeToDo = () => {
    localStorage.setItem('toDoArr', JSON.stringify(toDo.module.toDoArr));
    const toDoTaskStored = JSON.parse(localStorage.getItem('toDoArr'));
  };

  module.storeProject = () => {
    localStorage.setItem('projectArr', JSON.stringify(toDo.module.projectArr));
    const projectsStored = JSON.parse(localStorage.getItem('projectArr'));
  };

  return { module };
};

export default store;
