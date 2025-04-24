// Imprime un mensaje en la consola indicando que se está cargando el icono de hamburguesa
console.log('Cargando hamburger-icon');

// Inicia una función autoejecutable para encapsular el código 
(function () {
    // Define un objeto principal que contiene métodos para inicializar y manejar eventos
    const MAIN_OBJ = {
        // Método de inicialización que se llama al inicio
        init: function () {
            // Llama al método que configura los manejadores de eventos
            this.eventhandlers();
        },

        // Método que configura los manejadores de eventos
        eventhandlers: function () {
            // Selecciona el elemento con la clase 'hamburger-icon' y le añade un evento 'click'
            document.querySelector('.hamburger-icon').addEventListener('click', function () {
                // Al hacer clic, alterna la clase 'menu-open' en el elemento con la clase 'menu-container'
                document.querySelector('.menu-container').classList.toggle('menu-open');
            });
        }
    };

    // Llama al método init para iniciar la configuración del objeto
    MAIN_OBJ.init();
})();