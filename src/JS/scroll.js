const scrollContainer = document.querySelector('.scroll-container');
const scrollHandle = document.querySelector('.scroll-handle');
const cardContainer = document.querySelector('.card-container');

scrollHandle.addEventListener('mousedown', (e) => {
  e.preventDefault();

  const initialX = e.clientX;
  const initialScrollLeft = cardContainer.scrollLeft;

  document.onmousemove = (e) => {
    const deltaX = e.clientX - initialX;
    cardContainer.scrollLeft = initialScrollLeft - deltaX;
  };

  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;
  };
});
