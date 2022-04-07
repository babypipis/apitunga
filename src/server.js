const express = require('express');
const crypto = require('crypto');
const { resolve } = require('path');

const app = express();

function generateDate() {
	const hour = String(Math.floor(Math.random() * 23));
	const minute = String(Math.floor(Math.random() * 59));

	return `${hour}:${minute}`;
}

function createPrograms() {
	const programs = {};

	for (let item of ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']) {
		programs[item] = [1, 2, 3, 4, 5].map(item => {
			return {
				id: crypto.randomUUID(),
				hour: generateDate(),
				name: Math.random().toString(36).substring(2),
			};
		});
	}

	return programs;
}

app.use('/static', express.static(resolve(__dirname, '../static')));
app.get('/podcasts', (req, res) => {
	return res.json([
		{
			id: crypto.randomUUID(),
			name: 'Progama Muxima',
			thumb: 'https://doceimg.s3.amazonaws.com/radio_tunga_ne/muxima.jpeg',
			urls: [
				{ name: '64kbps AAC', uri: 'https://radiotungane.ao/radio/8030/radio' },
				{ name: '48kbps AAC', uri: 'https://radiotungane.ao/radio/8030/mobile' },
			],
			programs: {
				Dom: [
					{
						id: crypto.randomUUID(),
						hour: '00:00 - 23:59',
						name: 'Música',
					},
				],
				Seg: [
					{
						id: crypto.randomUUID(),
						hour: '00:00 - 23:59',
						name: 'Música',
					},
				],
				Ter: [
					{
						id: crypto.randomUUID(),
						hour: '00:00 - 23:59',
						name: 'Música',
					},
				],
				Qua: [
					{
						id: crypto.randomUUID(),
						hour: '00:00 - 23:59',
						name: 'Música',
					},
				],
				Qui: [
					{
						id: crypto.randomUUID(),
						hour: '00:00 - 23:59',
						name: 'Música',
					},
				],
				Sex: [
					{
						id: crypto.randomUUID(),
						hour: '00:00 - 23:59',
						name: 'Música',
					},
				],
				Sab: [
					{
						id: crypto.randomUUID(),
						hour: '00:00 - 23:59',
						name: 'Música',
					},
				],
			},
		},
		{
			id: crypto.randomUUID(),
			name: 'Maine Voice',
			thumb: 'https://doceimg.s3.amazonaws.com/radio_tunga_ne/main.jpeg',
			urls: [
				{ name: '64kbps AAC', uri: 'https://radiotungane.ao/radio/8000/radio' },
				{ name: '48kbps AAC', uri: 'https://radiotungane.ao/radio/8000/mobile' },
			],
			programs: {
				Dom: [
					{
						id: crypto.randomUUID(),
						hour: '00:00 - 08:00',
						name: 'Música',
					},
					{
						id: crypto.randomUUID(),
						hour: '08:00 - 10:00',
						name: 'K7 dos anos 60/90o',
					},
					{
						id: crypto.randomUUID(),
						hour: '10:00 - 11:00',
						name: 'Liga pra rádio',
					},
					{
						id: crypto.randomUUID(),
						hour: '11:00 - 12:00',
						name: 'Conselhos da Bijú',
					},
					{
						id: crypto.randomUUID(),
						hour: '12:00 - 13:00',
						name: 'Música',
					},
					{
						id: crypto.randomUUID(),
						hour: '13:00 - 15:00',
						name: 'Conversa na rádio ',
					},
					{
						id: crypto.randomUUID(),
						hour: '15:00 - 22:00',
						name: 'Música',
					},
				],
				Seg: [
					{
						id: crypto.randomUUID(),
						hour: '00:00 - 18:15',
						name: 'Relax',
					},
					{
						id: crypto.randomUUID(),
						hour: '18:15 - 18:45',
						name: 'Juventude Maine',
					},
					{
						id: crypto.randomUUID(),
						hour: '18:45 - 19:00',
						name: 'Notícias',
					},
					{
						id: crypto.randomUUID(),
						hour: '19:00 - 20:00',
						name: 'FDMA',
					},
					{
						id: crypto.randomUUID(),
						hour: '20:00',
						name: 'Roda do Semba',
					},
					{
						id: crypto.randomUUID(),
						hour: '21:00 - 00:00',
						name: 'Estação da Música ',
					},
				],
				Ter: [
					{
						id: crypto.randomUUID(),
						hour: '00:00 -18:45',
						name: 'Música',
					},
					{
						id: crypto.randomUUID(),
						hour: '18:45: 19:00',
						name: 'Publicidades',
					},
					{
						id: crypto.randomUUID(),
						hour: '19:00 - 20:00',
						name: 'Notícia',
					},
					{
						id: crypto.randomUUID(),
						hour: '20:00 - 21:00',
						name: 'Carta na Mesa',
					},
					{
						id: crypto.randomUUID(),
						hour: '21:00 - 00:00',
						name: 'Música',
					},
				],
				Qua: [
					{
						id: crypto.randomUUID(),
						hour: '00:00 - 15:15',
						name: 'Música',
					},
					{
						id: crypto.randomUUID(),
						hour: '15:15: -17:15',
						name: 'Aprenda Inglês',
					},
					{
						id: crypto.randomUUID(),
						hour: '17:15 - 18:15',
						name: 'Música',
					},
					{
						id: crypto.randomUUID(),
						hour: '18:15 - 18:45',
						name: 'Diáspora',
					},
					{
						id: crypto.randomUUID(),
						hour: '18:45 - 19:00 ',
						name: 'Notícia',
					},
					{
						id: crypto.randomUUID(),
						hour: '19:00 - 20:00',
						name: 'Cotidiano',
					},
					{
						id: crypto.randomUUID(),
						hour: '20:00 - 21:00',
						name: 'CotidiaMúsicano',
					},
					{
						id: crypto.randomUUID(),
						hour: '21:00 - 00:00',
						name: 'Jornada Desportiva',
					},
				],

				Qui: [
					{
						id: crypto.randomUUID(),
						hour: '00:00 - 19:15',
						name: 'Música',
					},
					{
						id: crypto.randomUUID(),
						hour: '15:15 - 18:45',
						name: 'Candandos/Mainers',
					},
					{
						id: crypto.randomUUID(),
						hour: '16:15: 19:00',
						name: 'Notícia',
					},
					{
						id: crypto.randomUUID(),
						hour: '19:00 - 20:00',
						name: 'Clube do Rei',
					},
					{
						id: crypto.randomUUID(),
						hour: '20:00 - 21:00',
						name: 'Comédias',
					},
					{
						id: crypto.randomUUID(),
						hour: '21:00 - 000',
						name: 'Notícia',
					},
				],
				Sex: [
					{
						id: crypto.randomUUID(),
						hour: '00:00',
						name: 'Música',
					},
					{
						id: crypto.randomUUID(),
						hour: '15:15',
						name: 'Vaga de emprego',
					},
					{
						id: crypto.randomUUID(),
						hour: '16:15',
						name: 'Aprenda Inglês',
					},
					{
						id: crypto.randomUUID(),
						hour: '17:15',
						name: 'Música',
					},
					{
						id: crypto.randomUUID(),
						hour: '18:15',
						name: 'Diáspora',
					},
					{
						id: crypto.randomUUID(),
						hour: '18:45',
						name: 'Notícia',
					},
					{
						id: crypto.randomUUID(),
						hour: '19:00',
						name: 'Cotidiano',
					},
					{
						id: crypto.randomUUID(),
						hour: '2:00',
						name: 'Música',
					},
					{
						id: crypto.randomUUID(),
						hour: '21:00',
						name: 'Jornada Desportiva',
					},
				],
				Sab: [
					{
						id: crypto.randomUUID(),
						hour: '00:00 - 09: 30',
						name: 'Música',
					},
					{
						id: crypto.randomUUID(),
						hour: '09:30 - 10:00',
						name: 'Conexão Saúde',
					},
					{
						id: crypto.randomUUID(),
						hour: '10:00 - 13:00',
						name: 'Comando Total',
					},
					{
						id: crypto.randomUUID(),
						hour: '13:00 - 14:00',
						name: 'Música',
					},
					{
						id: crypto.randomUUID(),
						hour: '10:00 - 15:00',
						name: 'Reggae',
					},
					{
						id: crypto.randomUUID(),
						hour: '15:00 - 16:00',
						name: 'Recordações',
					},
					{
						id: crypto.randomUUID(),
						hour: '16:00 - 18:00',
						name: 'FIDMA',
					},
					{
						id: crypto.randomUUID(),
						hour: '18:00 - 20:00',
						name: 'A conversa com a Beatriz',
					},
					{
						id: crypto.randomUUID(),
						hour: '20:00 - 20:00',
						name: 'Música',
					},
				],
			},
		},
		{
			id: crypto.randomUUID(),
			name: 'Promo Music Angola',
			thumb: 'https://doceimg.s3.amazonaws.com/radio_tunga_ne/promo.jpeg',
			urls: [
				{ name: '64kbps AAC', uri: 'https://radiotungane.ao/radio/8020/radio' },
				{ name: '48kbps AAC', uri: 'https://radiotungane.ao/radio/8020/mobile' },
			],
			programs: {
				Dom: [
					{
						id: crypto.randomUUID(),
						hour: '00:00 - 23:59',
						name: 'Música',
					},
				],
				Seg: [
					{
						id: crypto.randomUUID(),
						hour: '00:00 - 23:59',
						name: 'Música',
					},
				],
				Ter: [
					{
						id: crypto.randomUUID(),
						hour: '00:00 - 23:59',
						name: 'Música',
					},
				],
				Qua: [
					{
						id: crypto.randomUUID(),
						hour: '00:00 - 23:59',
						name: 'Música',
					},
				],
				Qui: [
					{
						id: crypto.randomUUID(),
						hour: '00:00 - 23:59',
						name: 'Música',
					},
				],
				Sex: [
					{
						id: crypto.randomUUID(),
						hour: '00:00 - 23:59',
						name: 'Música',
					},
				],
				Sab: [
					{
						id: crypto.randomUUID(),
						hour: '00:00 - 23:59',
						name: 'Música',
					},
				],
			},
		},
	]);
});

app.listen(process.env.PORT || 3333);
