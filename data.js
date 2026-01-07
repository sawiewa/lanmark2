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
		aboutTitle: 'The Landmark Supper Club',
		aboutDesc:
			'to wspólny grill, wspólny stół i dobrze prowadzony wieczór. Dbamy o rytm, serwis i atmosferę. Ty skupiasz się na jedzeniu i ludziach.',
		conceptTitle: 'Cook it yourself to zasada.',
		conceptDesc:
			'Każdy dokłada ręce i współtworzy smak. Zapewniamy miejsce, właściwy ogień i wysokiej jakości produkty. Gotowanie staje się częścią wieczoru.',
		experienceTitle:
			'To format dla tych, którzy cenią dobrą kuchnię, uważny serwis i wspólny czas przy jednym stole.',
		menuTitle: 'Menu',
		locationTitle: 'Lokalizacja',
		openingHoursTitle: 'Godziny otwarcia',
		reservations: 'Przyjmujemy rezerwacje dla większych grup.',
	},
	en: {
		mainTitle: 'The Landmark Supper Club',
		aboutTitle: 'The Landmark Supper Club',
		aboutDesc:
			'is a shared grill, shared table, and well-conducted evening. We take care of the rhythm, service, and atmosphere. You focus on the food and people',
		conceptTitle: 'Cook it yourself is the principle.',
		conceptDesc:
			'Everyone lends a hand and co-creates the flavor. We provide the space, proper fire, and high-quality ingredients. Cooking becomes part of the evening.',
		experienceTitle:
			'This format is for those who value good cuisine, attentive service, and shared time at one table.',
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
	pl: ['images/TLMSC MENU V2 PL.jpg', 'images/TLMSC-DRINK-MENU-v1-PL.jpg'],
	en: ['images/TLMSC MENU V2 EN.jpg', 'images/TLMSC-DRINK-MENU-v2-EN.jpg'],
};
