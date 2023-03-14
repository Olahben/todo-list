import toDo from './toDO';
import modal from './modal';

const UI = (() => {
  const module = {};
  const projectArr = [];
  let projectOpenCounter = false;
  let projectVisible = false;
  module.createToDo = () => {};

  module.addEventListenerToBtn = () => {
    document.querySelector('.add-to-do').addEventListener('click', () => {
      modal.module.loadModal();
      const modalForm = document.querySelector('.modal');
      modalForm.style.display = 'block';

      document.querySelector('.submit').addEventListener('click', (event) => {
        modal.module.getFormInfo();
        modal.module.validateForm(event);
      });
    });
  };

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
    <i class='bx bx-up-arrow-alt'></i>
    <ul class="sub-menu ${projectTitle}"></ul>`;
    const arrow = project.children[1];
    console.log(arrow);
    arrow.addEventListener('click', (event) => {
      module.toggleSidebarDropdown(event);
      toDo.module.checkToDoProj(event.target.parentElement.children[0].textContent);
      module.removeWorkspaceContent();
    });

    sidebar.append(project);
  };

  module.appendToDo = (title, project) => {
    const toDoTitle = title.replace(/\s/g, '');
    const toDoLi = document.createElement('li');
    toDoLi.innerHTML = `
    ${toDoTitle}`;
    project.append(toDoLi);
  };

  module.toggleSidebarDropdown = (event) => {
    event.target.parentElement.classList.toggle('showMenu');
  };

  module.removeWorkspaceContent = () => {
    const workspace = document.querySelector('#workspace');
    if (workspace.childNodes[1].textContent === 'Close project') {
      return;
    }
    if (projectOpenCounter) {
      workspace.removeChild(workspace.childNodes[1]);
      return;
    }
    workspace.removeChild(workspace.childNodes[0]);
    projectOpenCounter = true;
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
    module.addEventListenerToBtn();
    projectVisible = false;
  };

  let indexCounter = 0;
  module.deleteToDo = (event) => {
    indexCounter = 0;
    event.target.parentElement.remove();
    const toDoTitle = event.target.parentElement.childNodes[0].textContent;
    const toDoProj = event.target.parentElement.proj;
    const toDoTasks = document.querySelectorAll(`.${toDoProj} .sub-menu li`);
    toDoTasks.forEach((task) => {
      if (task.textContent.replace(/\s/g, '') === toDoTitle) {
        task.remove();
      }
    });

    const { toDoArr } = toDo.module;
    toDoArr.forEach((toDoObj) => {
      indexCounter++;
      if (toDoObj.title === toDoTitle && toDoObj.proj === toDoProj) {
        toDoArr.splice(indexCounter - 1, 1);
      }
    });
  };

  module.getCardInputs = (event) => {
    const submitChangesBtn = event.target;
    const title =
      submitChangesBtn.previousSibling.previousSibling.previousSibling
        .previousSibling.previousSibling.previousSibling;
    const date =
      submitChangesBtn.previousSibling.previousSibling.previousSibling
        .previousSibling.previousSibling;
    const descr =
      submitChangesBtn.previousSibling.previousSibling.previousSibling
        .previousSibling;
    const priority =
      submitChangesBtn.previousSibling.previousSibling.previousSibling;
    return {
      title,
      date,
      descr,
      priority,
    };
  };

  module.submitCardChanges = (event) => {
    const submitChangesBtn = event.target;
    const inputArr = [];
    const { title } = module.getCardInputs(event);
    const { date } = module.getCardInputs(event);
    const { descr } = module.getCardInputs(event);
    const { priority } = module.getCardInputs(event);
    inputArr.push(title, date, descr, priority);

    inputArr.forEach((input) => {
      input.setAttribute('readonly', 'readonly');
    });

    console.log(submitChangesBtn.parentElement.title);
    console.log(submitChangesBtn.parentElement.proj);
    toDo.module.toDoArr.forEach((toDoTask) => {
      if (
        toDoTask.title === submitChangesBtn.parentElement.title &&
        toDoTask.proj === submitChangesBtn.parentElement.proj
      ) {
        toDoTask.title = title.value;
        toDoTask.date = date.value;
        toDoTask.descr = descr.value;
        toDoTask.prio = priority.value;
        submitChangesBtn.parentElement.title = title.value;
        console.log(toDoTask);
      }
    });
  };

  module.resetCardInputs = (event) => {
    const { title } = module.getCardInputs(event);
    title.style.border = '0px solid white';
    const { date } = module.getCardInputs(event);
    date.style.border = '0px solid white';
    const { descr } = module.getCardInputs(event);
    descr.style.border = '0px solid white';
    const { priority } = module.getCardInputs(event);
    priority.style.border = '0px solid white';
  };

  module.validateCardChanges = (event) => {
    module.resetCardInputs(event);
    const { title } = module.getCardInputs(event);
    const { date } = module.getCardInputs(event);
    const { descr } = module.getCardInputs(event);
    const { priority } = module.getCardInputs(event);

    if (title.value.length < 2) {
      console.log(title.value.length);
      title.style.border = 'solid 1px red';
      return 1;
    }
    if (title.value.length > 24) {
      title.style.border = 'solid 1px red';
      return 1;
    }
    if (descr.value.length > 70) {
      descr.style.border = 'solid 1px red';
      return 1;
    }
    if (date.value === '') {
      date.style.border = 'solid 1px red';
      return 1;
    }
    if (priority.value.length < 1) {
      priority.style.border = 'solid 1px red';
      return 1;
    }
    if (priority.value.length > 30) {
      priority.style.border = 'solid 1px red';
      return 1;
    }
    module.submitCardChanges(event);
  };

  module.makeCardInfoEditable = (event) => {
    event.target.removeAttribute('readonly');
  };

  module.appendProjectElements = (arr) => {
    if (projectVisible) {
      return 1;
    }
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
      const cardTitle = document.createElement('input');
      cardTitle.setAttribute('readonly', 'readonly');
      cardTitle.value = toDoTask.title;
      cardTitle.addEventListener('click', (event) => {
        module.makeCardInfoEditable(event);
      });

      card.proj = toDoTask.proj;
      card.title = toDoTask.title;

      const cardDescr = document.createElement('input');
      cardDescr.setAttribute('readonly', 'readonly');
      cardDescr.value = toDoTask.descr;
      cardDescr.addEventListener('click', (event) => {
        module.makeCardInfoEditable(event);
      });

      const cardDate = document.createElement('input');
      cardDate.setAttribute('readonly', 'readonly');
      cardDate.value = `${toDoTask.date}`;
      cardDate.addEventListener('click', (event) => {
        module.makeCardInfoEditable(event);
      });

      const cardPrio = document.createElement('input');
      cardPrio.setAttribute('readonly', 'readonly');
      cardPrio.value = toDoTask.prio;
      cardPrio.addEventListener('click', (event) => {
        module.makeCardInfoEditable(event);
      });

      const showDetails = document.createElement('button');
      showDetails.textContent = 'Show details';
      showDetails.addEventListener('click', (event) => {
        module.showCardDetails(event);
      });

      const deleteToDo = document.createElement('button');
      deleteToDo.textContent = 'Delete';
      deleteToDo.addEventListener('click', (event) => {
        module.deleteToDo(event);
      });

      const submitChanges = document.createElement('button');
      submitChanges.textContent = 'Submit changes';
      // submitChanges.style.display = 'none';
      submitChanges.addEventListener('click', (event) => {
        module.validateCardChanges(event);
      });

      card.append(
        cardTitle,
        cardDate,
        cardDescr,
        cardPrio,
        showDetails,
        deleteToDo,
        submitChanges,
      );
      projectToDosContainer.append(card);
    });
    workspace.append(projectSettings, projectToDosContainer);
    workspace.style.cssText = `
    display: grid;
    grid-template-rows: 12%;
    `;
    projectVisible = true;
  };

  return { module };
})();

export default UI;
