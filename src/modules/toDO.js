const toDo = (() => {
  const module = {};

  module.createToDo = (title, descr, date, prio, proj) => ({
    title,
    descr,
    date,
    prio,
    proj,
  });

  module.createProject = (title) => {};

  module.deleteToDo = (title) => {};

  module.changePrio = (title, prio) => {};

  module.completeToDo = (title) => {};

  return { module };
})();

export default toDo;
