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

  module.showCardDetails = (event) => {
    const toDoCardChildren = event.target.parentElement.children;
    toDoCardChildren.item(2).style.display = 'inline';
    toDoCardChildren.item(3).style.display = 'inline';
    toDoCardChildren.item(4).style.display = 'none';
  };

  module.closeProject = () => {
    const settings = document.querySelector('.settings');
    const projectToDosContainer = settings.nextSibling;
    const workspace = document.querySelector('#workspace');
    settings.remove();
    projectToDosContainer.remove();
    workspace.style.cssText -= `
    grid-template-columns: 12%;
    `;
    const createToDo = document.createElement('button');
    createToDo.classList.add('add-to-do');
    createToDo.textContent = 'Create ToDo';
    workspace.append(createToDo);
  };

  module.appendProjectElements = (arr) => {
    const workspace = document.querySelector('#workspace');
    const projectToDosContainer = document.createElement('div');
    projectToDosContainer.classList.add('project-to-dos');

    const projectSettings = document.createElement('div');
    projectSettings.classList.add('settings');
    const close = document.createElement('button');
    close.textContent = 'Close project';
    close.classList.add('red-btn');
    close.addEventListener('click', () => {
      module.closeProject();
    });
    projectSettings.append(close);

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
      showDetails.addEventListener('click', (event) => {
        module.showCardDetails(event);
      });

      card.append(cardTitle, cardDate, cardDescr, cardPrio, showDetails);
      projectToDosContainer.append(card);
    });
    workspace.append(projectSettings, projectToDosContainer);
    workspace.style.cssText = `
    display: grid;
    grid-template-rows: 12%;
    `;
  };

  return { module };
})();

export default UI;
