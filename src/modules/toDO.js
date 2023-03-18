import modal from './modal';
import UI from './UI';
import store from './storage';

const toDo = (() => {
  const module = {};
  module.toDoArr = [];
  module.projectArr = [];

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
    module.toDoArr.push(toDo2);
    store().module.storeToDo(toDo2);
    module.saveProject(toDo2.proj);
  };

  module.checkToDoProj = (project) => {
    const projectToDoTasks = module.toDoArr.filter(
      (toDoTask) => toDoTask.proj === project,
    );
    UI.module.appendProjectElements(projectToDoTasks);
  };

  module.saveProject = (proj) => {
    module.projectArr.push(proj);
  };

  return { module };
})();

export default toDo;
