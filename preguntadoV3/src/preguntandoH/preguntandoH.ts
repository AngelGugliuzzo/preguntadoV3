import { dibujarPreguntasRespuestasLista } from '../preguntandoLista/preguntandolista';
import { PreguntasRespuestas } from './databaseH';

const db = PreguntasRespuestas;
let ContadorPregunta = 0;
let puntos = 0;

export function dibujarPreguntasRespuestasH(elemento: HTMLDivElement){//primer llave 
	
	if (ContadorPregunta<db.length){  //segunda llave 

			elemento.innerHTML = `<h1>${db[ContadorPregunta].pregunta}</h1>`;

			const ul = document.createElement('ul');

			db[ContadorPregunta].respuestas.forEach((r) => {   //tercer  llave y parentesis

			const li = document.createElement('li');
			const btn = document.createElement('button');
			btn.value = String(r.correcta);
			btn.textContent = r.respuesta;  // cargamos  un boton, aca cargamos una lista
			

			btn.addEventListener('click', () => {  //cuarta llave y  parentesis
				if (r.correcta) {
									 ++puntos;
				//					puntos += 1;
							}
							
	     	dibujarPreguntasRespuestasH(elemento);}) //cuarta llave y parentesis, llamada recursiva
                            
			li.appendChild(btn);
			ul.appendChild(li);
	                                                });//tercera llave parentesis

			elemento.appendChild(ul);

			++ContadorPregunta;                  }//segunda llave

	else {elemento.innerHTML = `<h1>COMPLETADO!!! 🎆 🔥  </h1> <h3>puntos: ${puntos} / ${db.length}  </h3>`;
	
		  const btn = document.createElement('button');
		  btn.innerHTML="Retornar al Principio";
		  elemento.appendChild(btn);  
	      btn.addEventListener('click', (event) => { event.preventDefault();
			                                         dibujarPreguntasRespuestasLista(elemento)})//aca esta en la ultima pagina										
         } //llave del ultimo else

		 //const btn = document.createElement('button');
		 // btn.innerHTML="Retornar al Principio";
		 // elemento.appendChild(btn);  
	     // btn.addEventListener('click', (event) => { event.preventDefault();
			                                        // dibujarPreguntasRespuestasLista(elemento)})

		//aca esta en todas las paginas, porque esta fuera del else										

                                                             } //primera  llave
 

// ¡¡¡¡¡¡¡¡¡¡¡¡el boton para volver al comienzo no anda!!!!!!!!!!!!
