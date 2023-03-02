import modal from './modal';
import UI from './UI';

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
      modal.module.getFormInfo().project.replace(/\s/g, ''),
    );
    toDoArr.push(toDo2);
  };

  module.checkToDoProj = (project) => {
    const projectToDoTasks = toDoArr.filter((toDoTask) => toDoTask.proj === project);
    UI.module.appendProjectToDos(projectToDoTasks);
  };

  module.createProject = (title) => {};

  module.deleteToDo = (title) => {};

  module.changePrio = (title, prio) => {};

  module.completeToDo = (title) => {};

  return { module };
})();

export default toDo;
