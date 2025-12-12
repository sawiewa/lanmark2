//obrazki do galerii zdjęc, jak dodasz nowy obiekt to pojawi się kolejny obrazek
export const galleryData = [
	{
		img: 'images/img_drink.jpg',
		alt: '',
		descPL: '', // tu mozesz wpisywać opisy obrazków
		descEN: '',
	},
	{
		img: 'images/img3.jpg',
		descPL: '',
		descEN: '',
	},
	{
		img: 'images/img5.jpg',
		descPL: '',
		descEN: '',
	},
];
// teksty
export const texts = {
	pl: {
		mainTitle: 'The Landmark Supper Club', // tytuł na górze strony
		aboutTitle: 'Zapraszamy na kolację i drinki późnym wieczorem',
		aboutDesc: 'Steki, piwo, koktajle i wiele więcej',
		menuTitle: 'Menu',
		locationTitle: 'Lokalizacja',
		openingHoursTitle: 'Godziny otwarcia',
	},
	en: {
		mainTitle: 'The Landmark Supper Club',
		aboutTitle: 'Enjoy Late Night Dinner and Drinks',
		aboutDesc: 'Steaks, Beer, Cocktails and more',
		menuTitle: 'Menu',
		locationTitle: 'Location',
		openingHoursTitle: 'Opening Hours',
	},
};
//sekcja godzin otwarcia klubu
export const openingHours = {
	pl: ['Poniedziałek – Niedziela: 18:00 – 02:00'],
	en: ['Monday – Sunday: 6:00 PM – 2:00 AM'],
};

//pobieranie zdjęć Menu w zależności od języka, jak chcesz dodać nowe zdjęcie to dołóż tutaj ścieżkę do zdjęcia, po przeciku i się pojawi kolejne zdjecie
export const menuImages = {
	pl: ['images/MENU_PL.jpg'],
	en: ['images/MENU_EN.jpg'],
};
