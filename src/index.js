const toDo = (() => {
  const module = {};

  module.createToDo = (title, descr, date, prio, proj) => ({
    title,
    descr,
    date,
    prio,
  });

  module.createProject = (title) => {};

  module.deleteToDo = (title) => {};

  return { module };
})();

console.log(toDo.module.createToDo('Ola', 'dds', 'dd', 'ddd'));
