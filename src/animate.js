const noop = require('./noop');
module.exports = ({ width = 280, height = 498, maxSequence = 125, sec = 50, column = 35, element = document.getElementById('_frames'), complete = noop } = {}) => {
  let curSeq = 0;
  let row = 0;
  let timer;

  const play = () => {
    stop();
    show();
    timer = setInterval(() => {
      if (curSeq < maxSequence - 1) {
        curSeq ++;
      } else {
        clearInterval(timer);
        complete();
        return false;
      }
      row = Math.floor(curSeq/column);
      element.style.backgroundPositionX = ((curSeq - row * column) * width * -1) + 'px';
      element.style.backgroundPositionY = (row * height * -1) + 'px';
    }, sec);
    return self;
  };

  const stop = () => {
    clearInterval(timer);
    curSeq = row = 0;
    return self;
  };

  const hide = () => {
    stop();
    element.style.display = 'none';
    return self;
  };

  const show = () => {
    element.style.display = 'block';
    return self;
  };

  const self = {
    play,
    stop,
    hide,
    show,
  };

  return self;
};
