const Enzyme = require('enzyme');
let Adapter =require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });
Enzyme.configure({ disableLifecycleMethods: true });

global.requestAnimationFrame = function (callback) {
    setTimeout(callback, 0);
};

require.extensions['.css'] = function () {
    return null;
};
require.extensions['.png'] = function () {
    return null;
};
require.extensions['.jpg'] = function () {
    return null;
};

/* Register babel so that it will transpile ES6 to ES5 before our tests run. */
require('babel-register')();
