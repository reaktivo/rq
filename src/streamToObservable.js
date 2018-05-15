const { Observable } = require("rxjs");

// Adapted from https://github.com/Reactive-Extensions/rx-node/blob/87589c07be626c32c842bdafa782fca5924e749c/index.js#L52
module.exports = function streamToObservable(
  stream = process.stdin,
  finishEventName = "end",
  dataEventName = "data"
) {
  stream.pause();

  return new Observable(observer => {
    function dataHandler(data) {
      observer.next(data);
    }

    function errorHandler(err) {
      observer.error(err);
    }

    function endHandler() {
      observer.complete();
    }

    stream.addListener(dataEventName, dataHandler);
    stream.addListener("error", errorHandler);
    stream.addListener(finishEventName, endHandler);

    stream.resume();

    return () => {
      stream.removeListener(dataEventName, dataHandler);
      stream.removeListener("error", errorHandler);
      stream.removeListener(finishEventName, endHandler);
    };
  });
};
