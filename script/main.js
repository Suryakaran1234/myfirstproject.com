// const karnal = document.querySelector('#karnal');
// const karnal = document.getElementById('karnal'); // alternate method of doing the same thing
// const jaipur = document.querySelector('#jaipur');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const cityImages = document.querySelectorAll('.city-images');

function openModal() {
  backdrop.style.display = 'block';
  modal.style.display = 'block';
}

function closeModal() {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
}

// karnal.addEventListener('click', openModal);
// backdrop.onclick = closeModal;
// jaipur.onclick = openModal;
// backdrop.onclick = closeModal;

for (let i = 0; i < cityImages.length; i++) {
  cityImages[i].addEventListener('click', openModal);
}

backdrop.addEventListener('click', closeModal);  