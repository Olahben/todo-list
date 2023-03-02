import modal from './modal';

const toDo = (() => {
  const module = {};
  const toDoArr = [];

  module.createToDo = (title, descr, date, prio, proj) => ({
    title,
    descr,
    date,
    prio,
    proj,
  });

  module.saveToDo = () => {
    const toDo2 = module.createToDo(
      modal.module.getFormInfo().title,
      modal.module.getFormInfo().descr,
      modal.module.getFormInfo().dueDate,
      modal.module.getFormInfo().priority,
      modal.module.getFormInfo().project,
    );
    toDoArr.push(toDo2.proj.replace(/ /g, '-'));
  };

  module.checkToDoProj = (project) => {
    const projectToDoTasks = toDoArr.filter((toDoTask) => toDoTask === project);
  };

  module.createProject = (title) => {};

  module.deleteToDo = (title) => {};

  module.changePrio = (title, prio) => {};

  module.completeToDo = (title) => {};

  return { module };
})();

export default toDo;
