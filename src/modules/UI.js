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

    const projectTitle = title.replace(/ /g, '-');
    const sidebar = document.querySelector('#sidebar');
    const project = document.createElement('div');
    project.classList.add(projectTitle);
    project.classList.add('project-sidebar');
    project.innerHTML = `
    ${projectTitle}
    <i class='bx bx-right-arrow-alt'></i>
    <ul class="sub-menu ${projectTitle}"></ul>`;

    sidebar.append(project);
  };

  module.appendToDo = (title, project) => {
    const toDoTitle = title.replace(/ /g, '-');
    const toDoLi = document.createElement('li');
    toDoLi.innerHTML = `
    ${toDoTitle}`;
    console.log(project);
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

  module.toggleSidebarDropdown = () => {
    const projects = document.querySelectorAll('.project-sidebar');
    projects.forEach((project) => {
      project.addEventListener('click', (event) => {
        if (event.target.children[1].style.display === 'none') {
          module.showDropDown(event.target);
        } else {
          module.removeDropDown(event.target);
        }
      });
    });
  };

  return { module };
})();

export default UI;
