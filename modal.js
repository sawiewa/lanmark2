const modal = document.createElement('div');
modal.classList.add('menu-modal');
document.body.appendChild(modal);

const modalImg = document.createElement('img');
modal.appendChild(modalImg);

document.querySelector('.menu-images').addEventListener('click', (e) => {
	// Kliknięty element musi być IMG
	if (e.target.tagName === 'IMG') {
		modalImg.src = e.target.src;
		modal.classList.add('show');
	}
});

modal.addEventListener('click', () => {
	modal.classList.remove('show');
});
