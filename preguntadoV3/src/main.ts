import { dibujarPreguntasRespuestasLista } from './preguntandoLista/preguntandolista';

import './style.css';

const divApp = document.querySelector<HTMLDivElement>('#app')!;

dibujarPreguntasRespuestasLista(divApp);