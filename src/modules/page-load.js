import UI from './UI';

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
  const toDoTaskStored = JSON.parse(localStorage.getItem('toDoArr'));
  console.log(projectsStored);
  console.log(toDoTaskStored);

  projectsStored.forEach((project) => {
    console.log(project);
    UI.module.createProject(project);
  });
};

export default pageLoad;
