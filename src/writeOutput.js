module.exports = (observable, log = console.log) =>
  observable.subscribe(x => log(x));
