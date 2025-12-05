import { data, openingHours } from './data.js';
import { renderGallery } from './gallery.js';

export function renderContent(lang) {
	document.getElementById('main-title').textContent = data[lang].mainTitle;
	document.getElementById('main-desc').textContent = data[lang].mainDesc;
	// document.getElementById('drinks-title').textContent = data[lang].drinksTitle;
	document.getElementById('about-title').textContent = data[lang].aboutTitle;
	document.getElementById('about-desc').textContent = data[lang].aboutDesc;
	// document.getElementById('cta-btn').textContent = data[lang].cta;
	document.getElementById('location-title').textContent =
		data[lang].locationTitle;
	document.getElementById('menu-section-title').textContent =
		data[lang].menuTitle;
	//odpalenie Galerii
	renderGallery(lang);
	// godziny otwarcia
	const container = document.querySelector('.opening-hours');
	container.innerHTML = `
		<h3>${openingHours[lang].title}</h3>
		${openingHours[lang].hours.map((h) => `<p>${h}</p>`).join('')}
	`;
}
