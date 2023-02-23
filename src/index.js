import pageLoad from './modules/page-load';
import './style.css';
import modal from './modules/modal';
import UI from './modules/UI';

pageLoad();
document.querySelector('.add-to-do').addEventListener('click', () => {
  modal.module.loadModal();
  const modalForm = document.querySelector('.modal');
  modalForm.style.display = 'block';

  document.querySelector('.submit').addEventListener('click', (event) => {
    modal.module.getFormInfo();
    modal.module.validateForm(event);
  });
});

UI.module.createProject('fdijoiosdf');
UI.module.createProject('ooh');
