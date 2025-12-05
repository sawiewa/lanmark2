// Pobieramy wszystkie obrazki menu
const menuImages = document.querySelectorAll('.menu-card img');

// Tworzymy element modala
const modal = document.createElement('div');
modal.classList.add('menu-modal');
document.body.appendChild(modal);

const modalImg = document.createElement('img');
modal.appendChild(modalImg);

// Kliknięcie na obrazek otwiera modal
menuImages.forEach((img) => {
	img.addEventListener('click', () => {
		modalImg.src = img.src;
		modal.classList.add('show');
	});
});

// Kliknięcie na tło modala zamyka go
modal.addEventListener('click', () => {
	modal.classList.remove('show');
});
