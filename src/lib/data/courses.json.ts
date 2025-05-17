const loremIpsum =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const courses = {
	verticali: {
		title: 'Verticali',
		subtitle: "Padroneggia l'arte di stare in verticale",
		description: loremIpsum,
		duration: '3 Mesi',
		price: 35,
		image: '/images/images/park-session-3.jpeg',
		features: [
			'Progressioni tecniche personalizzate',
			'Focus sulla forza e il controllo',
			'Esercizi di mobilità specifici',
			'Tecniche di allineamento avanzate'
		],
		requirements: ['Nessuna esperienza richiesta', 'Buona mobilità delle spalle consigliata'],
		schedule: 'Lezioni settimanali di 90 minuti',
		videos: ['/videos/videos/indoor-session-1.mp4', '/videos/videos/indoor-session-2.mp4'],
		images: ['/images/images/park-session-1.jpeg', '/images/images/park-session-2.jpeg']
	},
	movement: {
		title: 'Movement',
		subtitle: 'Esplora il movimento naturale',
		description: loremIpsum,
		duration: '3 Mesi',
		price: 35,
		image: '/images/images/park-session-4.jpeg',
		features: [
			'Fondamenti di movimento naturale',
			'Tecniche di parkour base',
			'Elementi di break dance',
			'Sviluppo della creatività nel movimento'
		],
		requirements: ['Adatto a tutti i livelli', 'Desiderio di esplorare nuovi movimenti'],
		schedule: 'Lezioni bisettimanali di 60 minuti',
		videos: ['/videos/videos/indoor-session-3.mp4', '/videos/videos/indoor-session-4.mp4'],
		images: ['/images/images/park-session-3.jpeg', '/images/images/park-session-4.jpeg']
	},
	parkour: {
		title: 'Parkour',
		subtitle: 'Muoviti con sicurezza in ogni ambiente',
		description: loremIpsum,
		duration: '3 Mesi',
		price: 35,
		image: '/images/images/park-session-1.jpeg',
		features: [
			'Tecniche di base del parkour',
			'Valutazione del rischio',
			'Condizionamento specifico',
			'Progressioni per salti e atterraggi'
		],
		requirements: ['Livello base di fitness', 'Voglia di sfidare i propri limiti'],
		schedule: 'Lezioni settimanali di 90 minuti',
		videos: ['/videos/videos/indoor-session-1.mp4', '/videos/videos/indoor-session-4.mp4'],
		images: ['/images/images/park-session-1.jpeg', '/images/images/park-session-4.jpeg']
	},
	custom: {
		title: 'Custom',
		subtitle: 'Allenamento su misura per i tuoi obiettivi',
		description: loremIpsum,
		duration: 'Personalizzabile',
		price: 45,
		image: '/images/images/park-session-2.jpeg',
		features: [
			'Valutazione iniziale approfondita',
			'Programma completamente personalizzato',
			'Monitoraggio costante dei progressi',
			'Supporto continuo'
		],
		requirements: ['Nessun requisito specifico', 'Determinazione a raggiungere i propri obiettivi'],
		schedule: 'Orari flessibili in base alle tue esigenze',
		videos: ['/videos/videos/indoor-session-2.mp4', '/videos/videos/indoor-session-3.mp4'],
		images: ['/images/images/park-session-2.jpeg', '/images/images/park-session-3.jpeg']
	}
};
