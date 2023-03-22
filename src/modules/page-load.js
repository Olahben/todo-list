import UI from './UI';
import toDo from './toDO';

const pageLoad = () => {
  const content = document.querySelector('#content');

  const sidebar = document.createElement('div');
  sidebar.setAttribute('id', 'sidebar');

  const toDoContent = document.createElement('div');
  toDoContent.setAttribute('id', 'workspace');

  const createToDo = document.createElement('button');
  createToDo.classList.add('add-to-do');
  createToDo.textContent = 'Create ToDo';

  toDoContent.append(createToDo);
  content.append(sidebar, toDoContent);

  const projectsStored = JSON.parse(localStorage.getItem('projectArr'));
  const toDoTasksStored = JSON.parse(localStorage.getItem('toDoArr'));
  console.log(toDoTasksStored);
  console.log(projectsStored);

  if (projectsStored !== null || toDoTasksStored !== null) {
    toDoTasksStored.forEach((toDoTask) => {
      UI.module.createProject(toDoTask.proj);
    });
  } else {
    return 1;
  }

  if (projectsStored !== null || toDoTasksStored !== null) {
    toDoTasksStored.forEach((toDoTask) => {
      toDo.module.toDoArr.push(toDoTask);
    });
  } else {
    return 1;
  }

  if (projectsStored !== null || toDoTasksStored !== null) {
    toDoTasksStored.forEach((toDoTask) => {
      const toDoTaskProj = document.querySelector(`ul.${toDoTask.proj}`);
      UI.module.appendToDo(toDoTask.title, toDoTaskProj);
    });
  } else {
    return 1;
  }
};

export default pageLoad;
