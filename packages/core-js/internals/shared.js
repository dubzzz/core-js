var global = require('../internals/global');
var setGlobal = require('../internals/set-global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
};
