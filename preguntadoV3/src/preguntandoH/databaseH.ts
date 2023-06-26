import { IPreguntaRespuesta } from './preguntadom.interface';

export const PreguntasRespuestas: IPreguntaRespuesta[] = [
	{
		pregunta: '¿En que año Colon descubrio America?',
		respuestas: [
			{ respuesta: '1910', correcta: false },
			{ respuesta: '475', correcta: false },
			{ respuesta: '1492', correcta: true },
			{ respuesta: '1810', correcta: false },
		],
	},
	{
		pregunta: '¿En que año llego el hombre a la luna?',
		respuestas: [
			{ respuesta: '1970', correcta: false },
			{ respuesta: '1955', correcta: false },
			{ respuesta: '2010', correcta: false },
			{ respuesta: '1969', correcta: true },
		],
	},
	{
		pregunta: '¿Quien fue Neron?',
		respuestas: [
			{ respuesta: 'Presidente de Uganda', correcta:false },
			{ respuesta: 'Emperador romano', correcta: true },
			{ respuesta: 'Gerente de Ford', correcta: false },
			{ respuesta: 'Navegante español', correcta: false },
		],
	},
	{
		pregunta: '¿En que año se declaro la independencia Argentina?',
		respuestas: [
			{ respuesta: '1915', correcta: false},
			{ respuesta: '1792', correcta: false },
			{ respuesta: '1945', correcta: false },
			{ respuesta: '1816', correcta: true },
		],
	},
	{
		pregunta: '¿En que año fue la revolucion francesa?',
		respuestas: [
			{ respuesta: '2015', correcta: false},
			{ respuesta: '1792', correcta: true },
			{ respuesta: '1596', correcta: false },
			{ respuesta: '1916', correcta: false },
		],
	},
];
	