// Adds support for Promise to socket.io-client
// eslint-disable-next-line func-names
exports.promise = function (socket) {
  return function request(type, data = {}) {
    return new Promise((resolve) => {
      socket.emit(type, data, resolve);
    });
  };
};
