import { renderContent } from './main.js';
let currentLang = 'pl';

function switchLanguage(lang) {
	currentLang = lang;
	renderContent(lang);
	document.getElementById('pl').classList.toggle('active', lang === 'pl');
	document.getElementById('en').classList.toggle('active', lang === 'en');
	document.documentElement.lang = lang;
}

document
	.getElementById('pl')
	.addEventListener('click', () => switchLanguage('pl'));
document
	.getElementById('en')
	.addEventListener('click', () => switchLanguage('en'));

// Inicjalizacja
renderContent(currentLang);
