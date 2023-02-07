const pageLoad = () => {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');

  content.style.cssText = `
  display: grid;
  grid-template-columns: 20vw;`;
};

export default pageLoad;
