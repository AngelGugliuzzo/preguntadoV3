import { IPreguntaRespuesta } from './preguntado.interface';

export const PreguntasRespuestas: IPreguntaRespuesta[] = [
	{
		pregunta:
			'¿Cuál de las siguientes opciones es un método utilizado para agregar un elemento al final de un array en JavaScript?',
		respuestas: [
			{ respuesta: 'push()', correcta: true },
			{ respuesta: 'pop()', correcta: false },
			{ respuesta: 'shift()', correcta: false },
			{ respuesta: 'unshift()', correcta: false },
		],
	},
	{
		pregunta:
			'¿Cuál de las siguientes opciones se utiliza para detener la ejecución de un bucle en JavaScript?',
		respuestas: [
			{ respuesta: 'continue', correcta: false },
			{ respuesta: 'break', correcta: true },
			{ respuesta: 'return', correcta: false },
			{ respuesta: 'exit', correcta: false },
		],
	},
	{
		pregunta:
			'¿Cuál de las siguientes opciones se utiliza para comprobar si una variable es de tipo número en JavaScript?',
		respuestas: [
			{ respuesta: 'isNumber()', correcta: false },
			{ respuesta: 'isNaN()', correcta: false },
			{ respuesta: 'parseInt()', correcta: false },
			{ respuesta: 'typeof', correcta: true },
		],
	},
	{
		pregunta:
			'¿Cuál de las siguientes opciones se utiliza para convertir una cadena en minúsculas en JavaScript?',
		respuestas: [
			{ respuesta: 'substring()', correcta: false },
			{ respuesta: 'trim()', correcta: false },
			{ respuesta: 'toLowerCase()', correcta: false },
			{ respuesta: 'toUpperCase()', correcta: false },
		],
	},
	{
		pregunta:
			'¿Cuál de las siguientes opciones se utiliza para obtener el número máximo de un conjunto de valores en JavaScript?',
		respuestas: [
			{ respuesta: 'max()', correcta: false },
			{ respuesta: 'Math.max()', correcta: true },
			{ respuesta: 'maximum()', correcta: false },
			{ respuesta: 'Math.maximum()', correcta: false },
		],
	},
];