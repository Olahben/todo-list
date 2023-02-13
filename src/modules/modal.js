const modal = {
  loadModal: () => {
    const toDoModal = document.createElement('div');
    toDoModal.classList.add('modal');

    const workspace = document.querySelector('#workspace');
    console.log(workspace);

    const modalForm = document.createElement('form');
    modalForm.innerHTML = `
  <div class="title form-element">
  <label for="title">Title</label><br>
  <input type="text" name="title" id="title"><br>
</div>

<div class="descr form-element">
  <label for="descr">Description</label><br>
  <input type="text" name="descr" id="descr"><br>
</div>

<div class="due-date form-element">
  <label for="dueDate">Due Date</label><br>
  <input type="date" name="dueDate" id="dueDate"><br>
</div>

<div class="priority form-element">
  <label for="priority">priority</label><br>
  <input type="text" name="priority" id="priority"><br>
</div>

<div class="project form-element">
  <label for="project">Which project?</label><br>
  <input type="text" name="project" id="project"><br>
</div>
<button class="submit" type="submit">Submit</button>`;

    toDoModal.append(modalForm);
    workspace.append(toDoModal);
  },
  closeModal(event) {
    event.preventDefault();
    const toDoModal = document.querySelector('.modal');
    toDoModal.style.display = 'none';
  },
  getFormInfo() {
    const title = document.querySelector('#title').textContent;
    const descr = document.querySelector('#descr').textContent;
    const dueDate = document.querySelector('#dueDate').value;
    const priority = document.querySelector('#priority').textContent;
    const project = document.querySelector('#priority').textContent;
  },
};

export default modal;
