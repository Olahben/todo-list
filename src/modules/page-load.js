const pageLoad = () => {
  const content = document.querySelector('#content');

  const sidebar = document.createElement('div');
  sidebar.setAttribute('id', 'sidebar');

  content.append(sidebar);
};

export default pageLoad;
