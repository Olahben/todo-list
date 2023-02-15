const UI = (() => {
  const module = {};

  module.createToDo = () => {};

  module.createProject = (title) => {
    const sidebar = document.querySelector('#sidebar');
    const project = document.createElement('div');
    project.classList.add(`${title}`);
    project.classList.add('project-sidebar');
    project.innerHTML = `
    ${title}
    <i class='bx bx-right-arrow-alt'></i>
    <ul class="sub-menu ${title}"></ul>`;

    sidebar.append(project);
  };

  module.appendToDo = (title, project) => {
    const toDoLi = document.createElement('li');
    toDoLi.innerHTML = `
    ${title}`;
    project.append(toDoLi);
  };

  module.removeDropDown = (project) => {
    const subMenu = project.children[1];
    subMenu.style.display = 'none';
  };

  module.showDropDown = (project) => {
    const subMenu = project.children[1];
    subMenu.style.display = 'block';
  };

  return { module };
})();

export default UI;
