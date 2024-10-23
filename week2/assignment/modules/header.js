const handleHeaderScroll = () => {
  const header = document.querySelector('header');

  const isScroll = () => {
    if (window.scrollY > 0) {
      return true;
    } else {
      return false;
    }
  };

  window.addEventListener('scroll', () => {
    if (isScroll()) {
      header.classList.add('on');
    } else {
      header.classList.remove('on');
    }
    window.scrollY;
  });
};

export default handleHeaderScroll;
