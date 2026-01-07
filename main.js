import { texts, openingHours, menuImages } from './data.js';
import { renderGallery } from './gallery.js';

export function renderContent(lang) {
	document.getElementById('main-title').textContent = texts[lang].mainTitle;
	document.getElementById('about-title').innerHTML = texts[lang].aboutTitle;
	document.getElementById('about-desc').textContent = texts[lang].aboutDesc;
	document.getElementById('concept-title').textContent =
		texts[lang].conceptTitle;
	document.getElementById('concept-desc').textContent = texts[lang].conceptDesc;
	document.getElementById('experience-title').textContent =
		texts[lang].experienceTitle;
	document.getElementById('experience-desc').textContent =
		texts[lang].experienceDesc;
	document.getElementById('location-title').textContent =
		texts[lang].locationTitle;
	document.getElementById('menu-section-title').textContent =
		texts[lang].menuTitle;
	document.getElementById('reservations').textContent =
		texts[lang].reservations;

	const imgs = document.querySelectorAll('.menu-images img');
	menuImages[lang].forEach((src, index) => {
		if (imgs[index]) imgs[index].src = src;
	});
	//odpalenie Galerii
	renderGallery(lang);
	// godziny otwarcia
	const container = document.querySelector('.opening-hours');
	container.innerHTML = `
		<h2>${texts[lang].openingHoursTitle}</h2>
		${openingHours[lang].map((h) => `<p>${h}</p>`).join('')}
	`;
	// generowanie menu
	const menuContainer = document.querySelector('.menu-images');
	menuContainer.innerHTML = ''; // wyczyść poprzednie obrazki

	const images = menuImages[lang];

	// ustaw klasę zależnie od ilości zdjęć
	if (images.length === 1) {
		menuContainer.classList.remove('multi');
		menuContainer.classList.add('one');
	} else {
		menuContainer.classList.remove('one');
		menuContainer.classList.add('multi');
	}

	// wrzucamy zdjęcia
	images.forEach((src) => {
		const card = document.createElement('div');
		card.className = 'menu-card';

		const img = document.createElement('img');
		img.src = src;
		img.alt = texts[lang].menuTitle;

		card.appendChild(img);
		menuContainer.appendChild(card);
	});
}
