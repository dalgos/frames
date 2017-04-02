const noop = () => {};
module.exports = ({urls = [], callback = noop} = {}) => {

  const completed = [];

  if (urls.length) {
    urls.forEach((url, idx) => {
      const img = document.createElement('img');
      img.addEventListener('load', () => {
        completed[idx] = true;
        checkComplete();
      });
      img.src = url;
    });
  }

  function checkComplete() {
    if (urls.length === completed.length) {
      completed.forEach((isComplete, idx) => {
        if (isComplete && idx === completed.length) {
          callback();
        } else {
          return false;
        }
      });
    }
  }
};
