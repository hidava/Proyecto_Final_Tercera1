document.addEventListener('DOMContentLoaded', () => {
    console.log('Cargando Carrusel');

    const puntos = document.querySelectorAll('.punto'); 
    const grande = document.querySelector('.grande'); 
    let indiceActual = 0;

    function actualizarCarrusel() { 
        const ancho = grande.clientWidth; 
        grande.style.transform = `translateX(${-indiceActual * ancho}px)`; // Asegúrate de usar comillas invertidas

        // Llama a la función para actualizar los puntos
        actualizarPuntos();
    }

    function actualizarPuntos() {
        puntos.forEach((punto, index) => {
            punto.classList.toggle('activo', index === indiceActual);
        });
    }

    puntos.forEach((punto, index) => { 
        punto.addEventListener('click', () => { 
            indiceActual = index; 
            actualizarCarrusel(); // Llama a actualizarCarrusel para mover el carrusel
        }); 
    });

    // Desplazamiento automático cada 3 segundos
    setInterval(() => { 
        indiceActual = (indiceActual + 1) % puntos.length; 
        actualizarCarrusel(); 
    }, 3000);
});

