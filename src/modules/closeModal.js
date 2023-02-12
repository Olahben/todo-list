const closeModal = () => {
  const modal = document.querySelector('.modal');
  const submit = document.querySelector('.submit');

  submit.addEventListener('click', () => {
    modal.style.display = 'none';
  });
};

export default closeModal;
