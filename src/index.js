import pageLoad from './modules/page-load';
import './style.css';
import modal from './modules/modal';
import UI from './modules/UI';

pageLoad();
document.querySelector('.add-to-do').addEventListener('click', () => {
  modal.loadModal();
  const modalForm = document.querySelector('.modal');
  modalForm.style.display = 'block';

  document.querySelector('.submit').addEventListener('click', (event) => {
    modal.getFormInfo();
    modal.validateForm();
    modal.closeModal(event);
    modal.removeFormInfo();
  });
});

UI.module.createProject('fdijoiosdf');
UI.module.createProject('ooh');

const projects = document.querySelectorAll('.project-sidebar');
projects.forEach((project) => {
  project.addEventListener('click', (event) => {
    if (event.target.children[1].style.display === 'none') {
      UI.module.showDropDown(event.target);
    } else {
      UI.module.removeDropDown(event.target);
    }
  });
});
