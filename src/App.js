import React from "react";
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros ex alumnos sobre FreeCodeCamp:</h1>
      <Testimonio
      nombre='Shawn Wang'
      pais='Singapur'
      imagen='Emma'
      cargo='Ingeniero de software'
      empresa='Amazon'
      testimonio='Es aterrador cambiar de carrera. Sólo me ganó la confianza de que podía codificar trabajando a través de los cientos de horas de lecciones gratuitas en el CodeCamp gratuito. En un año tuve un trabajo de seis cifras como ingeniero de software. FreeCodeCamp cambió mi vida.' />
      <Testimonio
      nombre='Sarah Chima'
      pais='Nigeria'
      imagen='Sarah'
      cargo='Ingeniero de software'
      empresa='ChatDesk'
      testimonio='FreeCodeCamp era la puerta de entrada a mi carrera como desarrollador de software. El currículum bien estructurado llevó mi conocimiento de codificación de un nivel inicial total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de devo en una compañía increíble.' />
      <Testimonio
      nombre='Emma Bostian'
      pais='Suecia'
      imagen='Shawn'
      cargo='Ingeniero de software'
      empresa='Spotify'
      testimonio='Siempre he luchado con el aprendizaje de JavaScript. He tomado muchos cursos, pero el curso gratuito de CodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir mi trabajo de ensueño como ingeniero de software en Spotify.' />
      </div>
    </div>
  );
}

export default App;
