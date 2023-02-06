const toDo = (() => {
  const module = {};

  module.createToDo = (title, descr, date, prio) => {
    console.log(title);
  };

  return { module };
})();

toDo.module.createToDo('Ola', 'dds', 'dd', 'ddd');
