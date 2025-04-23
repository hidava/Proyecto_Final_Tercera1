console.log("Cargando Acordión");

const dataAccordion = [
    {
        title: "Yoga Virtual",
        desc: "¿Buscas un espacio para desconectar del estrés diario y reconectar contigo mismo? ¡Únete a nuestras clases de yoga!",
        desc1:"🧘‍♀️ Relajarte y Rejuvenecer: A través de posturas y técnicas de respiración, liberarás tensiones y encontrarás un profundo estado de calma.",
    },
    {
        title: "Meditación",
        desc: "🌟 Transforma tu Vida a Través del Yoga y la Meditación 🌟",
        desc1:"¿Buscas un espacio para reconectar contigo mismo? Te invitamos a nuestras clases de meditación, donde podrás descubrir el poder transformador de estas prácticas."
    },
    {
        title: "Pilates",
        desc: "🌈 Un método de ejercicio que se centra en fortalecer el núcleo, mejorar la postura y aumentar la flexibilidad, todo mientras se promueve la conexión mente-cuerpo.",
        desc1:"A través de una serie de ejercicios que estiran y fortalecen los músculos, Pilates ayuda a aumentar la flexibilidad y la movilidad, reduciendo el riesgo de lesiones."
    },

];

(function () {
    let ACCORDION = {
        init: function () {
            let _self = this;
            this.insertData(_self);
            this.eventhandler(_self);
        },

        insertData: function (_self) {
            dataAccordion.map(function (item, index) {
                document
                .querySelector(".main-accordion-container")
                .insertAdjacentHTML("beforeend", _self.tplAccordionItem(item));
            });
        },

        eventhandler: function (_self) {
            let arrayRefs = document.querySelectorAll('.accordion-title');
            for (let x = 0; x < arrayRefs.length; x++) {
                arrayRefs[x].addEventListener('click', function (event) {
                   // console.log('Evento: ', event);
                    _self.showTab(event.target);

                });
            }
        },

        tplAccordionItem: function (item) {
            return `<div class='accordion-item'>
                    <div class= 'accordion-title'><p>${item.title}</p></div>
                    <div class= 'accordion-desc'><p>${item.desc}</p></div>
                    <div class= 'accordion-desc'><p>${item.desc1}</p></div>
                     
                </div>`;

        },

        showTab: function (refItem) {
            let activeTab = document.querySelector("tab-active");
            if (activeTab) {
                activeTab.classList.remove("tab-active");
            }
            console.log("Show Tab: ", refItem);
            refItem.parentElement.classList.toggle("tab-active");

        },

    };

    ACCORDION.init();

})();