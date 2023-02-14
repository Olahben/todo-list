const UI = (() => {
  const module = {};

  module.createToDo = () => {};

  module.createProject = (title) => {
    const sidebar = document.querySelector('#sidebar');
    const project = document.createElement('div');
    project.classList.add(`${title}`);
    project.classList.add('project');
    project.innerHTML = `
    ${title}
    <i class='bx bx-right-arrow-alt'></i>`;

    sidebar.append(project);
  };

  return { module };
})();

export default UI;
