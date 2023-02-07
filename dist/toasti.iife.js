var toasti = (function (exports) {
  'use strict';

  var toLowerCase = function toLowerCase(input) {
    return input.toLocaleLowerCase();
  };
  var toUpperCase = function toUpperCase(input) {
    return input.toUpperCase();
  };

  exports.toLowerCase = toLowerCase;
  exports.toUpperCase = toUpperCase;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
