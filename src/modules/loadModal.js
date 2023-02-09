const loadModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const workspace = document.querySelector('#workspace');
  console.log(workspace);

  const modalForm = document.createElement('form');
  modalForm.innerHTML = `
  <label for="title">Title</label><br>
  <input type="text" name="title" id="title"><br>

  <label for="descr">Description</label><br>
  <input type="text" name="descr" id="descr"><br>

  <label for="dueDate">Due Date</label><br>
  <input type="date" name="dueDate" id="dueDate"><br>

  <label for="priority">priority</label><br>
  <input type="text" name="priority" id="priority"><br>

  <label for="project">Which project do you want to add this task to?</label><br>
  <input type="text" name="project" id="project"><br>`;

  modal.append(modalForm);
  workspace.append(modal);
};

export default loadModal;