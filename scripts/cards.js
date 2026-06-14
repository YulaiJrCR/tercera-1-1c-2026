console.log('Cargando Cards...');

const dataCards = [{
  "title": "Concha de seramica",
  "url_image": "../img/variados 3.jpeg",
  "desc": "Concha hecha de seramica de yeso ceramico para guardar joyeria.",
  "cta": "Mostrar imagen",
  "link": "../img/variados 3.jpeg"
},
{
  "title": "El buho durmiente",
  "url_image": "../img/animales 3.jpeg",
  "desc": "Vaso de yeso ceramico de un buho que toma un descanso",
  "cta": "Mostrar imagen",
  "link": "../img/animales 3.jpeg"
},
{
  "title": "Angel de ceramica",
  "url_image": "../img/angeles 2.jpeg",
  "desc": " Dulce angel de ceramica que sostiene un ramo de flores entregado con amor.",
  "cta": "Mostrar imagen",
  "link": "../img/angeles 2.jpeg"
},
{
  "title": "Base en forma de hoja",
  "url_image": "../img/variados 4.jpeg",
  "desc": "Base de yeso ceramico pintada de diversos colores",
  "cta": "Mostrar imagen",
  "link": "../img/variados 4.jpeg"
},
{
  "title": "Candela de arena ceramica",
  "url_image": "../img/candelas 1.jpeg",
  "desc": "Candela con forma de coco tropical con una flor decorativa",
  "cta": "Mostrar imagen",
  "link": "../img/candelas 1.jpeg"
},
{
  "title": "Maseta para suculentas",
  "url_image": "../img/animales 5.jpeg",
  "desc": "Un perezoso hecho de yeso seramico que se levanto con un corte de pelo peculiar",
  "cta": "Mostrar imagen",
  "link": "../img/animales 5.jpeg"
}];

(function () {
  let CARD = {
    init: function () {
      //console.log('card module was loaded');
      let _self = this;

      //llamanos las funciones
      this.insertData(_self);
      //this.eventHandler(_self);
    },

    eventHandler: function (_self) {
      let arrayRefs = document.querySelectorAll('.accordion-title');

      for (let x = 0; x < arrayRefs.length; x++) {
        arrayRefs[x].addEventListener('click', function (event) {
          console.log('event', event);
          _self.showTab(event.target);
        });
      }
    },

    insertData: function (_self) {
      let container = document.querySelector('.card-list');
      if (!container) return;
      dataCards.map(function (item, index) {
        container.insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
      });
    },

    tplCardItem: function (item, index) {
      let src = item.url_image || '';
      let link = item.link || '';

      if (!/^https?:\/\//i.test(src)) {
        if (src.startsWith('../') && !window.location.pathname.includes('/vistas/')) {
          src = src.replace(/^\.\.\//, '');
        } else if (!src.startsWith('/') && !src.startsWith('../') && window.location.pathname.includes('/vistas/')) {
          src = '../' + src;
        }
        // local images: prevent caching by adding a timestamp
        src += (src.indexOf('?') === -1 ? '?' : '&') + 'v=' + Date.now();
      }

      if (!/^https?:\/\//i.test(link) && !link.startsWith('/')) {
        if (link.startsWith('../') && !window.location.pathname.includes('/vistas/')) {
          link = link.replace(/^\.\.\//, '');
        } else if (!link.startsWith('../') && window.location.pathname.includes('/vistas/')) {
          link = '../' + link;
        }
      }

      return (`<div class='card-item' id="card-number-${index}">
            <img src="${src}"/>
            <div class="card-info">
              <p class='card-title'>${item.title}</p>
              <p class='card-desc'>${item.desc}</p>
              <div class="boton-cta">
              <a class='card-cta' target="blank" href="${link}">${item.cta}</a>
              </div>
            </div>
          </div>`)
    },
  }

  CARD.init();
})();