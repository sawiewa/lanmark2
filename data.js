//obrazki do galerii zdjęc, jak dodasz nowy obiekt to pojawi się kolejny obrazek
export const galleryData = [
	{
		img: 'images/img2.jpeg',
		descPL: '',
		descEN: '',
	},
	{
		img: 'images/img3.jpeg',
		descPL: '',
		descEN: '',
	},

	{
		img: 'images/img5.jpg',
		descPL: '',
		descEN: '',
	},
	{
		img: 'images/img_drink.jpg',
		alt: '',
		descPL: '', // tu mozesz wpisywać opisy obrazków
		descEN: '',
	},
	{
		img: 'images/img6.jpg',
		descPL: '',
		descEN: '',
	},
];
// teksty
export const texts = {
	pl: {
		mainTitle: 'The Landmark Supper Club', // tytuł na górze strony
		aboutTitle:
			'The Landmark Supper Club to wspólny grill, wspólny stół i dobrze prowadzony wieczór.<br>' +
			'Dbamy o rytm, serwis i atmosferę.<br>' +
			'Ty skupiasz się na jedzeniu i ludziach.',
		aboutDesc: 'Cook it yourself to zasada. ',
		conceptTitle: 'Każdy dokłada ręce i współtworzy smak. ',
		conceptDesc:
			'Zapewniamy miejsce, właściwy ogień i wysokiej jakości produkty. ',
		experienceTitle: 'Gotowanie staje się częścią wieczoru. ',
		experienceDesc:
			'To format dla tych, którzy cenią dobrą kuchnię, uważny serwis i wspólny czas przy jednym stole.',
		menuTitle: 'Menu',
		locationTitle: 'Lokalizacja',
		openingHoursTitle: 'Godziny otwarcia',
		reservations: 'Przyjmujemy rezerwacje dla większych grup.',
	},
	en: {
		mainTitle: 'The Landmark Supper Club',
		aboutTitle: 'Enjoy Late Night Dinner and Drinks',
		aboutDesc: 'Steaks, Beer, Cocktails and more',
		menuTitle: 'Menu',
		locationTitle: 'Location',
		openingHoursTitle: 'Opening Hours',
		reservations: 'We accept reservations for larger groups.',
	},
};
//sekcja godzin otwarcia klubu
export const openingHours = {
	pl: ['Poniedziałek – Niedziela: 18:00 – 02:00'],
	en: ['Monday – Sunday: 6:00 PM – 2:00 AM'],
};

//pobieranie zdjęć Menu w zależności od języka, jak chcesz dodać nowe zdjęcie to dołóż tutaj ścieżkę do zdjęcia, po przeciku i się pojawi kolejne zdjecie
export const menuImages = {
	pl: [
		'images/TLMSC MENU V2 PL.jpg',
		'images/TLMSC-DRINK-MENU-v1-PL.jpg',
		'images/TLMSC-Intro-PL_1.jpg',
	],
	en: [
		'images/TLMSC MENU V2 EN.jpg',
		'images/TLMSC-DRINK-MENU-v2-EN.jpg',
		'images/TLMSC-Intro-Page-v1_1.jpg',
	],
};
