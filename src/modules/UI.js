import toDo from './toDO';

const UI = (() => {
  const module = {};
  const projectArr = [];

  module.createToDo = () => {};

  module.createProject = (title) => {
    let invalid = false;
    projectArr.forEach((proj) => {
      if (proj === title) {
        invalid = true;
        return 1;
      }
    });

    if (invalid) {
      return 1;
    }

    projectArr.push(title);

    const projectTitle = title.replace(/\s/g, '');
    const sidebar = document.querySelector('#sidebar');
    const project = document.createElement('div');
    project.classList.add(projectTitle);
    project.classList.add('project-sidebar');
    project.innerHTML = `
    <span>${projectTitle}</span>
    <i class='bx bx-right-arrow-alt'></i>
    <ul class="sub-menu ${projectTitle}"></ul>`;
    project.addEventListener('click', (event) => {
      module.toggleSidebarDropdown(event);
      module.removeWorkspaceContent();
      toDo.module.checkToDoProj(event.target.children[0].textContent);
    });

    sidebar.append(project);
  };

  module.appendToDo = (title, project) => {
    const toDoTitle = title.replace(/\s/g, '');
    const toDoLi = document.createElement('li');
    toDoLi.innerHTML = `
    ${toDoTitle}`;
    console.log(project);
    project.append(toDoLi);
  };

  module.toggleSidebarDropdown = (event) => {
    event.target.classList.toggle('showMenu');
  };

  module.removeWorkspaceContent = () => {
    const workspace = document.querySelector('#workspace');
    workspace.removeChild(workspace.childNodes[0]);
  };

  module.appendProjectToDos = (arr) => {
    const workspace = document.querySelector('#workspace');
    const projectToDosContainer = document.createElement('div');
    projectToDosContainer.classList.add('project-to-dos');

    arr.forEach((toDoTask) => {
      const card = document.createElement('div');
      card.classList.add('to-do-card');
      card.classList.add(`${toDoTask.title}-card`);
      const cardTitle = document.createElement('span');
      cardTitle.textContent = toDoTask.title;

      const cardDescr = document.createElement('span');
      cardDescr.textContent = toDoTask.descr;

      const cardDate = document.createElement('span');
      cardDate.textContent = `You have to complete this task before ${toDoTask.date}`;

      const cardPrio = document.createElement('span');
      cardPrio.textContent = `Priority: ${toDoTask.prio}`;

      const showDetails = document.createElement('button');
      showDetails.textContent = 'Show details';
      showDetails.addEventListener('click', () => {
      });

      card.append(cardTitle, cardDate, cardDescr, cardPrio);
      projectToDosContainer.append(card);
    });
    workspace.appendChild(projectToDosContainer);
  };

  return { module };
})();

export default UI;
