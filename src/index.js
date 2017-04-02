const animate = require('./animate');
const load = require('./load');
const tracker = require('./tracker');

function animateSequence(data = []) {
  if (data.length) {

  }
}

((root) => {
  root.mabijs = root.mabijs || {};
  root.mabijs = {
    animate,
    tracker,
    load,
  };
})(window);
