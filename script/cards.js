console.log('Cargando Cards')

const dataCards = [

    {
        "title": "Ejercicios de respiración",
        "url_image": "./img/respira.png",
        "desc": "La respiración consciente es una herramienta poderosa para manejar la ansiedad. Aquí te presento algunas técnicas efectivas:",
        "cta": "Mostrar más...",
        "link": "https://www.bupasalud.com/salud/ejercicios-de-respiraci%C3%B3n-para-la-ansiedad"

    },

    {
        "title": "Recordatorios de autocuidado",
        "url_image": "./img/abrazo.png",
        "desc": "El autocuidado es fundamental para la salud mental y puede ser una herramienta clave en la prevención del suicidio.",
        "cta": "Mostrar más...",
        "link": "https://centropsicalma.com/2024/04/05/autolesiones-y-autocuidado/"

    },

];

(function () {

    let CARD = {
        init: function () {
            let _self = this;
            this.insertData(_self);
        },

        insertData: function (_self) {
            dataCards.map(function (item, index) {
                document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
            });
        },

        tplCardItem: function (item, index) {
            return (`<div class='card-item id='card-number-${index}'>
                <img src='${item.url_image}'>
                <div class= 'card-info'>
                   <p class='card-title'>${item.title}</p>
                   <p class='card-desc'>${item.desc}</p>
                   <a class= 'card-cta' target='blank' href='${item.link}'>${item.cta}</a>
                </div>

                
                </div>`)
        },
    }

    CARD.init();

})();