// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log('Cargando Carrusel'); // Mensaje en la consola para indicar que el carrusel está cargando

    // Selecciona todos los elementos con la clase 'punto' (los indicadores del carrusel)
    const puntos = document.querySelectorAll('.punto'); 
    // Selecciona el contenedor principal del carrusel
    const grande = document.querySelector('.grande'); 
    let indiceActual = 0; // Inicializa el índice actual en 0

    // Función para actualizar la posición del carrusel
    function actualizarCarrusel() { 
        const ancho = grande.clientWidth; // Obtiene el ancho del contenedor del carrusel
        // Mueve el contenedor 'grande' a la izquierda según el índice actual
        grande.style.transform = `translateX(${-indiceActual * ancho}px)`; // Asegúrate de usar comillas invertidas

        // Llama a la función para actualizar los puntos
        actualizarPuntos();
    }

    // Función para actualizar el estado de los puntos (indicadores)
    function actualizarPuntos() {
        // Recorre cada punto y actualiza su estado
        puntos.forEach((punto, index) => {
            // Agrega la clase 'activo' al punto que corresponde al índice actual
            punto.classList.toggle('activo', index === indiceActual);
        });
    }

    // Recorre cada punto y agrega un evento de clic
    puntos.forEach((punto, index) => { 
        punto.addEventListener('click', () => { 
            indiceActual = index; // Actualiza el índice actual al índice del punto clicado
            actualizarCarrusel(); // Llama a actualizarCarrusel para mover el carrusel
        }); 
    });

    // Desplazamiento automático cada 3 segundos
    setInterval(() => { 
        indiceActual = (indiceActual + 1) % puntos.length; // Incrementa el índice actual y lo reinicia si supera el número de puntos
        actualizarCarrusel(); // Llama a actualizarCarrusel para mover el carrusel
    }, 3000); // Intervalo de 3000 milisegundos (3 segundos)
});
