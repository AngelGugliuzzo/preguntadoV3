import { IPreguntaRespuesta } from './preguntadom.interface';

export const PreguntasRespuestas: IPreguntaRespuesta[] = [
	{
		pregunta: '¿cuanto es 7x8',
		respuestas: [
			{ respuesta: '32', correcta: false },
			{ respuesta: '25', correcta: false },
			{ respuesta: '56', correcta: true },
			{ respuesta: '72', correcta: false },
		],
	},
	{
		pregunta: '¿cuanto es 5x5?',
		respuestas: [
			{ respuesta: '33', correcta: false },
			{ respuesta: '41', correcta: false },
			{ respuesta: '25', correcta: true },
			{ respuesta: '41', correcta: false },
		],
	},
	{
		pregunta: '¿cuanto es 2x3?',
		respuestas: [
			{ respuesta: '7', correcta:false },
			{ respuesta: '6', correcta: true },
			{ respuesta: '41', correcta: false },
			{ respuesta: '22', correcta: false },
		],
	},
	{
		pregunta: '¿cuanto es 5x4?',
		respuestas: [
			{ respuesta: '7', correcta: false},
			{ respuesta: '17', correcta: false },
			{ respuesta: '41', correcta: false },
			{ respuesta: '20', correcta: true },
		],
	},
	{
		pregunta: '¿cuanto es 9x9?',
		respuestas: [
			{ respuesta: '7', correcta: false},
			{ respuesta: '81', correcta: true },
			{ respuesta: '41', correcta: false },
			{ respuesta: '20', correcta: false },
		],
	},
];
	