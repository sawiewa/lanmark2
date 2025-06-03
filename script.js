const galleryData = [
	{
		img: './img2.jpg',
		descPL: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		descEN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		img: './img3.jpg',
		descPL: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		descEN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		img: './img4.jpg',
		descPL: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		descEN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		img: './img5.jpg',
		descPL: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		descEN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
];

function renderGallery(lang) {
	document.getElementById('gallery-title').textContent =
		lang === 'pl' ? 'Galeria' : 'Gallery';
	const galleryList = document.getElementById('gallery-list');
	galleryList.innerHTML = '';
	galleryData.forEach((item) => {
		const div = document.createElement('div');
		div.className = 'gallery-item';
		div.innerHTML = `
        <img src="${item.img}" class="gallery-img" alt="Bar" />
        <div class="gallery-desc">${
					lang === 'pl' ? item.descPL : item.descEN
				}</div>
      `;
		galleryList.appendChild(div);
	});
}

const data = {
	pl: {
		mainTitle: 'Lorem Ipsum',
		mainDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		drinksTitle: 'Lorem Ipsum Koktajle',
		drinks: [
			{
				title: 'Lorem Sunrise',
				desc: 'Lorem ipsum dolor sit amet, consectetur.',
			},
			{
				title: 'Dolor Żar',
				desc: 'Sed do eiusmod tempor incididunt ut labore.',
			},
			{
				title: 'Ipsum Negroni',
				desc: 'Ut enim ad minim veniam, quis nostrud exercitation.',
			},
			{
				title: 'Amet Mojito',
				desc: 'Duis aute irure dolor in reprehenderit in voluptate.',
			},
		],
		cta: 'Lorem ipsum',
		aboutTitle: 'O nas',
		aboutDesc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	en: {
		mainTitle: 'Lorem Ipsum',
		mainDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		drinksTitle: 'Lorem Ipsum Cocktails',
		drinks: [
			{
				title: 'Lorem Sunrise',
				desc: 'Lorem ipsum dolor sit amet, consectetur.',
			},
			{
				title: 'Dolor Heat',
				desc: 'Sed do eiusmod tempor incididunt ut labore.',
			},
			{
				title: 'Ipsum Negroni',
				desc: 'Ut enim ad minim veniam, quis nostrud exercitation.',
			},
			{
				title: 'Amet Mojito',
				desc: 'Duis aute irure dolor in reprehenderit in voluptate.',
			},
		],
		cta: 'Lorem ipsum',
		aboutTitle: 'About Us',
		aboutDesc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
};

let currentLang = 'pl';

function renderContent(lang) {
	document.getElementById('main-title').textContent = data[lang].mainTitle;
	document.getElementById('main-desc').textContent = data[lang].mainDesc;
	document.getElementById('drinks-title').textContent = data[lang].drinksTitle;
	document.getElementById('about-title').textContent = data[lang].aboutTitle;
	document.getElementById('about-desc').textContent = data[lang].aboutDesc;
	document.getElementById('cta-btn').textContent = data[lang].cta;

	// Drinks
	const drinksList = document.getElementById('drinks-list');
	drinksList.innerHTML = '';
	data[lang].drinks.forEach((drink) => {
		const card = document.createElement('div');
		card.className = 'drink-card';
		card.innerHTML = `<div class="drink-title">${drink.title}</div>
                        <div class="drink-desc">${drink.desc}</div>`;
		drinksList.appendChild(card);
	});
	// Wywołanie galerii!
	renderGallery(lang);
}

// Obsługa przełączania języka
document.getElementById('pl').addEventListener('click', () => {
	currentLang = 'pl';
	renderContent('pl');
	document.getElementById('pl').classList.add('active');
	document.getElementById('en').classList.remove('active');
	document.documentElement.lang = 'pl';
});
document.getElementById('en').addEventListener('click', () => {
	currentLang = 'en';
	renderContent('en');
	document.getElementById('en').classList.add('active');
	document.getElementById('pl').classList.remove('active');
	document.documentElement.lang = 'en';
});

// CTA - przykładowa akcja
document.getElementById('cta-btn').addEventListener('click', () => {
	if (currentLang === 'pl') {
		alert('Rezerwacje telefonicznie: 123 456 789');
	} else {
		alert('Reservations by phone: 123 456 789');
	}
});

// Inicjalizacja
renderContent(currentLang);
