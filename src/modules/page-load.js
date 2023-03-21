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

  if (projectsStored !== null || toDoTasksStored !== null) {
    projectsStored.forEach((project) => {
      console.log(project);
      UI.module.createProject(project);
    });
  } else {
    return 1;
  }

  toDoTasksStored.forEach((toDoTask) => {
    toDo.module.toDoArr.push(toDoTask);
  });

  toDoTasksStored.forEach((toDoTask) => {
    console.log(toDoTask);
    const toDoTaskProj = document.querySelector(`ul.${toDoTask.proj}`);
    UI.module.appendToDo(toDoTask.title, toDoTaskProj);
  });
};

export default pageLoad;
