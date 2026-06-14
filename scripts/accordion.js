console.log('Cargando Accordion...');

const dataAccordion = [{
  "title": "¿De donde somos?",
  "desc": "Somos de SAN RAFAEL DE ALAJUELA."
},
{
  "title": "¿Haz donde hacemos envios?",
  "desc": "A todo el pais por medio de CORREOS DE COSTARICA."
},
{
  "title": "Si desea mas informacion o esta interesado en contactarnos al siguiente numero o Hotmail",
  "desc": "+506 8598-6063 , ruth.r.marin@hotmail.com",
}];


(function () {
    let ACCORDION = {
      init: function () {
        let _self = this;
        //llamanos las funciones
        this.insertData(_self);
        this.eventHandler(_self);
      },
  
      eventHandler: function (_self) {
        let arrayRefs = document.querySelectorAll('.accordion-title');
  
        for (let x = 0; x < arrayRefs.length; x++) {
          arrayRefs[x].addEventListener('click', function(event){
            console.log('event', event);
            _self.showTab(event.target);
          });
        }
      },

      showTab: function(refItem){
        const clicked = refItem.parentElement;
        const activeTab = document.querySelector('.tab-active');

        // Si se hizo clic en la misma pestaña activa, ciérrala
        if (activeTab && activeTab === clicked) {
          activeTab.classList.remove('tab-active');
          return;
        }

        // Si hay otra pestaña activa, ciérrala
        if (activeTab) {
          activeTab.classList.remove('tab-active');
        }

        // Abre la pestaña clicada
        clicked.classList.add('tab-active');
      },
  
      insertData: function (_self) {
        dataAccordion.map(function (item, index) {
          let container = document.querySelector('.main-accordion-container')
          if (container == null){
            console.warn("container es nulo")
            return
          }
          container.insertAdjacentHTML('beforeend', _self.tplAccordionItem(item));
        });
      },

      tplAccordionItem: function (item) {
        return(`<div class='accordion-item'>
        <p class='accordion-title'>${item.title}</p>
        <p class='accordion-desc'>${item.desc}</p>
      </div>`)},
    }
  
    ACCORDION.init();
  })();