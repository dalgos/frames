const noop = require('./noop');
module.exports = ({ element = document.body, left = noop, right = noop } = {}) => {

  let beforePoint = [0, 0];
  let afterPoint = [0, 0];

  function eventHandler(evt) {
    if (evt.type === 'mouseenter') {
      beforePoint = [evt.pageX, evt.pageY];
    } else if (evt.type === 'mouseleave') {
      afterPoint = [evt.pageX, evt.pageY];
      beforePoint[0] < afterPoint[0] ? right() : left();
    }
  }

  element.addEventListener('mouseenter', eventHandler);
  element.addEventListener('mouseleave', eventHandler);

};
