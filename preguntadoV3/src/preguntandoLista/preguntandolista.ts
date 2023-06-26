import { Eleccion } from './databaseLista';
import { dibujarPreguntasRespuestasM } from '../preguntandodbm/preguntandom';
import { dibujarPreguntasRespuestasH } from '../preguntandoH/preguntandoH';
import { dibujarPreguntasRespuestas } from '../preguntandodb/preguntando';

const db = Eleccion;
let ContadorPregunta = 0;
//let puntos = 0;

export function dibujarPreguntasRespuestasLista(elemento: HTMLDivElement){//primer llave 
	
	if (ContadorPregunta<db.length){  //segunda llave 

			elemento.innerHTML = `<h1>${db[ContadorPregunta].pregunta}</h1>`;

			const ul = document.createElement('ul');

			db[ContadorPregunta].respuestas.forEach((r) => {   //tercer  llave y parentesis

			const li = document.createElement('li');
			const btn = document.createElement('button');
			btn.value = String(r.correcta);
			btn.textContent = r.respuesta;  // cargamos  un boton, aca cargamos una lista
			

			btn.addEventListener('click', () => {  //cuarta llave y  parentesis

				if (r.correcta===0) {dibujarPreguntasRespuestasM(elemento);}
				else if (r.correcta===1) {dibujarPreguntasRespuestas(elemento);}
					  else dibujarPreguntasRespuestasH(elemento);
							
	     	dibujarPreguntasRespuestasLista(elemento);}) //cuarta llave y parentesis, llamada recursiva
                            
			li.appendChild(btn);
			
			ul.appendChild(li);
	                                                });//tercera llave parentesis

			elemento.appendChild(ul);

			++ContadorPregunta;                  }//segunda llave

	//else {elemento.innerHTML = `<h1>COMPLETADO!!! 🎆 🔥  </h1> <h3>puntos: ${puntos} / ${db.length}  </h3>`;}


                                                             } //primera  llave
 

