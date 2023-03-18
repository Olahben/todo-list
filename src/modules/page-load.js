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
  console.log(projectsStored);
  console.log(toDoTasksStored);

  projectsStored.forEach((project) => {
    console.log(project);
    UI.module.createProject(project);
  });

  toDoTasksStored.forEach((toDoTask) => {
    toDo.module.toDoArr.push(toDoTask);
  });
};

export default pageLoad;
