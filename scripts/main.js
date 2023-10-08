/*Alejandro Ruiz Prieto
https://github.com/Alesso-ai/Proyecto_Calculadora.git
*/

document.addEventListener("DOMContentLoaded", function () {
  const pantalla = document.getElementById("pantalla");
  const botones = document.querySelectorAll(".btn");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const botonApretado = boton.textContent;

      // Para apretar la C en la calculadora y borrar que no salga la C --> return
      if (botonApretado === "CE") {
        pantalla.textContent = "0";
        return;
      }

      // Para apretar la ← borra el ultimo digito
      if (botonApretado === "←") {
        if (pantalla.textContent.length > 1) {
          pantalla.textContent = pantalla.textContent.slice(0, -1);
          return;
        } else {
          pantalla.textContent = "0";
          return;
        }
      }

      // Cambiar símbolo de división para hacer la operación
      if (botonApretado === "÷") {
        pantalla.textContent += "/";
        return;
      }

      // Función para evaluar conjunto de operaciones matemáticas
      if (botonApretado === "=") {
        try {
          let resultado = parseFloat(eval(pantalla.textContent));
          pantalla.textContent = resultado;
        } catch {
          pantalla.textContent = "Error";
        }
        return;
      }

      // Agregar funcionalidad para sacar el resto
      if (botonApretado === "%") {
        pantalla.textContent /= 100;
        return;
      }

      // Agregar funcionalidad para elevar un número
      if (botonApretado === "x²") {
        pantalla.textContent = Math.pow(pantalla.textContent, 2);
        return;
      }

      // Agregar funcionalidad para sacar la raíz cuadrada
      if (botonApretado === "√x") {
        pantalla.textContent = Math.sqrt(pantalla.textContent);
        return;
      }

      // Agregar funcionalidad para sacar 1 partido del número
      if (botonApretado === "1/X") {
        pantalla.textContent = 1 / pantalla.textContent;
        return;
      }

      // Reemplace el "0" inicial con el botón apretado si la pantalla muestra "0" o "Error"
      if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
        pantalla.textContent = botonApretado;
      } else {
        pantalla.textContent += botonApretado;
      }
    });
  });
});
