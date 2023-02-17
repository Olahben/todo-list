import toDo from './toDO';

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

    toDo.module.createToDo(title, descr, dueDate, priority, project);
    console.log(
      toDo.module.createToDo(title, descr, dueDate, priority, project),
    );
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

  module.validateForm = () => {
    console.log(module.getFormInfo().title.length <= 2);
  };

  return { module };
})();

export default modal;
