(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/**
 * * Created by lee on 2019/1/29
 */

var Store = function () {
    function Store() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Store);

        this.key = props.key || '_sd';
    }

    createClass(Store, [{
        key: 'read',
        value: function read() {
            return localStorage.getItem(this.key);
        }
    }, {
        key: 'write',
        value: function write(str) {
            return localStorage.setItem(this.key, str);
        }
    }]);
    return Store;
}();

var store = new Store();

/**
 * * Created by lee on 2019/1/29
 */

var options = { theme: 'simple' };
var defualt = `Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
`;

var input = document.getElementById('textarea');
input.addEventListener('keyup', onChange);

var v = store.read() || defualt;
input.value = v;
draw(v);

function onChange() {
    var v = input.value;
    store.write(v);
    draw(input.value);
}

function draw(v) {
    try {
        var diagram = Diagram.parse(v);
        document.getElementById('output').innerHTML = '';
        diagram.drawSVG('output', options);
    } catch (e) {}
}

})));
