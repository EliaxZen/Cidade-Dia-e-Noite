const chk = document.querySelector('#chk');

chk.addEventListener('change', () => {
  document.querySelector(':root').classList.toggle('dark');
  document.querySelector('.sky').classList.toggle('dark');


});
