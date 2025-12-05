import { galleryData } from './data.js';

export function renderGallery(lang) {
	document.getElementById('gallery-title').textContent =
		lang === 'pl' ? 'Galeria' : 'Gallery';

	const galleryList = document.getElementById('gallery-list');
	galleryList.innerHTML = '';

	galleryData.forEach((item) => {
		const desc = lang === 'pl' ? item.descPL : item.descEN;

		const div = document.createElement('div');
		div.className = 'gallery-item';

		div.innerHTML = `
      <img src="${item.img}" class="gallery-img" alt="Bar" />
      ${
				desc && desc.trim() !== ''
					? `<div class="gallery-desc">${desc}</div>`
					: ''
			}
    `;

		galleryList.appendChild(div);
	});
}
