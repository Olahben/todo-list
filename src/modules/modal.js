import toDo from './toDO';
import UI from './UI';

const modal = (() => {
  const module = {};

  module.loadModal = () => {
    const toDoModal = document.createElement('div');
    toDoModal.classList.add('modal');

    const workspace = document.querySelector('#workspace');
    console.log(workspace);

    const modalForm = document.createElement('form');
    modalForm.innerHTML = `
    <div class="title form-element">
  <label for="title">*Title:</label><br>
  <input type="text" name="title" id="title" minlength="2" maxlength="24" required><br>
</div>

<div class="descr form-element">
  <label for="descr">Description</label><br>
  <input type="text" name="descr" id="descr" maxlength="70"><br>
</div>

<div class="due-date form-element">
  <label for="dueDate">Due Date</label><br>
  <input type="date" name="dueDate" id="dueDate" required><br>
</div>

<div class="priority form-element">
  <label for="priority">priority</label><br>
  <input type="text" name="priority" id="priority" minlength="1" maxlength="30" required><br>
</div>

<div class="project form-element">
  <label for="project">Which project?</label><br>
  <input type="text" name="project" id="project" minlength="2" maxlength="22" required><br>
</div>
<span class="errorText"></span>
<button class="submit" type="submit">Submit</button>`;

    toDoModal.append(modalForm);
    workspace.append(toDoModal);
    const errorText = document.querySelector('.errorText');
    errorText.textContent = '';
  };
  module.closeModal = (event) => {
    event.preventDefault();
    const toDoModal = document.querySelector('.modal');
    toDoModal.style.display = 'none';
  };

  module.getFormInfo = () => {
    const title = document.querySelector('#title').value;
    const descr = document.querySelector('#descr').value;
    const dueDate = document.querySelector('#dueDate').value;
    const priority = document.querySelector('#priority').value;
    const project = document.querySelector('#project').value;

    return {
      title,
      descr,
      dueDate,
      priority,
      project,
    };
  };

  module.removeFormInfo = () => {
    document.querySelector('form').reset();
  };

  module.validateForm = (event) => {
    const errorText = document.querySelector('.errorText');
    if (module.getFormInfo().title.length < 2) {
      errorText.textContent =
        'You have to provide a title with 3 characters or more.';
      event.preventDefault();
      return 1;
    }
    if (module.getFormInfo().title.length > 24) {
      errorText.textContent =
        'You have to keep your title under 24 characters.';
      event.preventDefault();
      return 1;
    }
    if (module.getFormInfo().descr.length > 70) {
      errorText.textContent =
        'You have to keep your description under 70 characters.';
      event.preventDefault();
      return 1;
    }
    if (module.getFormInfo().dueDate === '') {
      errorText.textContent = 'You have provide a due-date.';
      event.preventDefault();
      return 1;
    }
    if (module.getFormInfo().priority.length < 1) {
      errorText.textContent =
        'You have to provide a priority with 1 or more characters.';
      event.preventDefault();
      return 1;
    }
    if (module.getFormInfo().priority.length > 30) {
      errorText.textContent =
        'You have to provide a priority under 30 characters.';
      event.preventDefault();
      return 1;
    }
    if (module.getFormInfo().project.length < 2) {
      errorText.textContent =
        'You have to provide a project name which is more than 2 characters. ';
      event.preventDefault();
      return 1;
    }
    if (module.getFormInfo().project.length > 22) {
      errorText.textContent =
        'You have to provide a project name that is under 22 characters';
      event.preventDefault();
      return 1;
    }
    UI.module.createProject(module.getFormInfo().project);
    const newProject = module.getFormInfo().project;
    const newProjectClean = newProject.replace(/ /g, '-');
    UI.module.appendToDo(
      module.getFormInfo().title,
      document.querySelector(`ul.${newProjectClean}`),
    );
    module.closeModal(event);
    module.removeFormInfo();
  };

  return { module };
})();

export default modal;
