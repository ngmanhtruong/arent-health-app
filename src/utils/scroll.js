export const handleScrollTop = () => {
  const currentY = window.pageYOffset;
  const step = Math.round((0 - currentY) / 20);

  const scroll = setInterval(() => {
    if (window.pageYOffset === 0) {
      clearInterval(scroll);
      return;
    }
    window.scrollBy(0, step);
  }, 20);
}