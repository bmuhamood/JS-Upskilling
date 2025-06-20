const heartButtons = document.querySelectorAll('.favorite-icon');

heartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('filled')) {
      button.classList.remove('filled');
      button.innerHTML = '&#9825;';
    } else {
      button.classList.add('filled');
      button.innerHTML = '&#10084;';
    }
  });
});
