export interface IEleccion {
	pregunta: string;
	respuestas: IRespuesta[];
}

export interface IRespuesta {
	respuesta: string;
	correcta: number;
}

