import { PreguntasRespuestas } from './databasem';

const db = PreguntasRespuestas;
let ContadorPregunta = 0;
let puntos = 0;

export function dibujarPreguntasRespuestasM(elemento: HTMLDivElement){//primer llave 
	
	if (ContadorPregunta<db.length){  //segunda llave 

			elemento.innerHTML = `<h1>${db[ContadorPregunta].pregunta}</h1>`;

			const ul = document.createElement('ul');

			db[ContadorPregunta].respuestas.forEach((r) => {   //tercer  llave y parentesis

			const li = document.createElement('li');
			const btn = document.createElement('button');
			btn.value = String(r.correcta);
			btn.textContent = r.respuesta;  // cargamos  un boton, aca cargamos una lista
			//li.textContent=r.respuesta;   //cargamos la lista, pero el boton queda desfasado al lado

			btn.addEventListener('click', () => {  //cuarta llave y  parentesis
				if (r.correcta) {
									 ++puntos;
									 console.log(r.correcta);
				//					puntos += 1;
							}
							
	     	dibujarPreguntasRespuestasM(elemento);}) //cuarta llave y parentesis, llamada recursiva
                            
			li.appendChild(btn);
			//li.textContent=r.respuesta; sacar, aca no va.
			ul.appendChild(li);
	                                                });//tercera llave parentesis

			elemento.appendChild(ul);

			++ContadorPregunta;                  }//segunda llave

	else {elemento.innerHTML = `<h1>COMPLETADO!!! 🎆 🔥  </h1> <h3>puntos: ${puntos} / ${db.length}  </h3>`;}


                                                             } //primera  llave
 

//import { PreguntasRespuestas } from './database';
//let ContadorPregunta = 0;
//let puntos = 0;
//const db = PreguntasRespuestas;

//export function dibujarPreguntasRespuestas(elemento: HTMLDivElement) {
//	if (ContadorPregunta < db.length) {  // aca era db.length -1
//		elemento.innerHTML = `<h1>${db[ContadorPregunta].pregunta}</h1>`;

//		const ul = document.createElement('ul');

//		db[ContadorPregunta].respuestas.forEach((r) => {
//			const li = document.createElement('li');
//			const btn = document.createElement('button');
//			btn.value = String(r.correcta);
//			btn.classList.add('botonclick');
//			btn.textContent = r.respuesta;
//			btn.addEventListener('click', () => {
//				console.log(r.correcta);
//				if (r.correcta) {
//					// ++puntos;
//					puntos += 1;
//				                 }
//				dibujarPreguntasRespuestas(elemento);
//			                                            });
//			li.appendChild(btn);
//			ul.appendChild(li);
//		});

//		elemento.appendChild(ul);

//		++ContadorPregunta;
//	                                                        } 
//    else {
//		elemento.innerHTML = `<h1>COMPLETADO!!! 🎆 🔥  </h1> <h3>puntos: ${puntos} / ${db.length}  </h3>`;
//	}
//                                                                     }
