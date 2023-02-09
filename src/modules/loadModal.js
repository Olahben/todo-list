const loadModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const workspace = document.querySelector('#workspace');
  workspace.append(modal);
};
