import pageLoad from './modules/page-load';
import './style.css';
import loadModal from './modules/loadModal';

pageLoad();
document.querySelector('.add-to-do').addEventListener('click', () => {
  loadModal();
  const modal = document.querySelector('.modal');
  modal.style.display = 'block';
});
