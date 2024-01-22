var now = new Date();
var hours = now.getHours();
if (hours >= 20 || hours < 6) {
  var star1 = document.createElement('i');
  star1.classList.add('fas', 'fa-star');
  star1.style.top = Math.floor(Math.random() * 100) + '%';
  star1.style.left = Math.floor(Math.random() * 100) + '%';
  document.querySelector('.blurred-content').appendChild(star1);

  var star2 = document.createElement('i');
  star2.classList.add('fas', 'fa-star');
  star2.style.top = Math.floor(Math.random() * 100) + '%';
  star2.style.left = Math.floor(Math.random() * 100) + '%';
  document.querySelector('.blurred-content').appendChild(star2);
}