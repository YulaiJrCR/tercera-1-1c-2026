console.log('Cargando Cards...');

const dataCards = [{
  "title": "Juega solo o con amigos",
  "url_image": "../img/variados 1.jpeg",
  "desc": "No es necesario ser parte de un equipo, aunque no está de más un poco de ayuda.",
  "cta": "Mostrar imagen",
  "link": "../img/variados 1.jpeg"
},
{
  "title": "Diferentes modos de juego",
  "url_image": "../img/variados 2.jpeg",
  "desc": "Modo Clásico, Dominion, Snowdown y otros modos de juego, todo depende de tu tipo de estretegia y tus mejores habilidades.",
  "cta": "Mostrar imagen",
  "link": "../img/variados 2.jpeg"
},
{
  "title": "Participa en las eliminatorias regionales",
  "url_image": "../img/variados 3.jpeg",
  "desc": "Escala desde abajo, no es necesario enfrentarse a los mejores desde el promcipio, pero si debes ser el mejor para poder clasificar.",
  "cta": "Mostrar imagen",
  "link": "../img/variados 3.jpeg"
},
{
  "title": "Personaliza tus campeones favoritos con skins",
  "url_image": "../img/variados 4.jpeg",
  "desc": "Ser un campeón tiene sus beneficios, escoge y presume tus skins personalizados!",
  "cta": "Mostrar imagen",
  "link": "../img/variados 4.jpeg"
},
{
  "title": "Posicionate en los Ranking de la temporada",
  "url_image": "../img/variados 5.jpeg",
  "desc": "Más y más reconocimientos, si tú o tu equipo se convierte en los mejores, todos lo sabrán!",
  "cta": "Mostrar imagen",
  "link": "../img/variados 5.jpeg"
},
{
  "title": "Prueba la beta de TFT",
  "url_image": "../img/variados 6.jpeg",
  "desc": "¡Pase beta de TFT V.3 próximamente!",
  "cta": "Mostrar imagen",
  "link": "../img/variados 6.jpeg"
},
{
  "title": "Prueba la beta de TFT",
  "url_image": "../img/variados 7.jpeg",
  "desc": "¡Pase beta de TFT V.3 próximamente!",
  "cta": "Mostrar imagen",
  "link": "../img/variados 7.jpeg"
},
{
  "title": "Prueba la beta de TFT",
  "url_image": "../img/variados 8.jpeg",
  "desc": "¡Pase beta de TFT V.3 próximamente!",
  "cta": "Mostrar imagen",
  "link": "../img/variados 8.jpeg"
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
      if (!/^https?:\/\//i.test(src)) {
        if (!src.startsWith('/') && !src.startsWith('../') && window.location.pathname.includes('/vistas/')) {
          src = '../' + src;
        }
        // local images: prevent caching by adding a timestamp
        src += (src.indexOf('?') === -1 ? '?' : '&') + 'v=' + Date.now();
      }
      return (`<div class='card-item' id="card-number-${index}">
            <img src="${src}"/>
            <div class="card-info">
              <p class='card-title'>${item.title}</p>
              <p class='card-desc'>${item.desc}</p>
              <div class="boton-cta">
              <a class='card-cta' target="blank" href="${item.link}">${item.cta}</a>
              </div>
            </div>
          </div>`)
    },
  }

  CARD.init();
})();
show