window.addEventListener('load', () => {
  $('#responsive').lightSlider({
    item: 4,
    loop: false,
    slideMove: 4,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 600,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          item: 3,
          slideMove: 3,
          slideMargin: 6,
        }
      },
      {
        breakpoint: 480,
        settings: {
          item: 3,
          slideMove: 3
        }
      },
      {
        breakpoint: 320,
        settings: {
          item: 3,
          slideMove: 3
        }
      }
    ]
  });  

  const data = {
    internetBanks: [
      { id: 'BCP', name: 'BCP', figcaption: '', url: 'assets/images/logo-bcp.svg', detail: ['Selecciona la opción Pago de servicios > EMPRESAS>PAGOEFECTIVO > SOLES.' ]},
      { id: 'BBVA', name: 'BBVA', figcaption: '', url: 'assets/images/logo-bbva.svg', detail: ['Selecciona la opción Pago de servicios > De Instituciones y Empresas > Busca por nombre > PAGOEFECTIVO > PAGOEFECTIVOSOLES.']},
      { id: 'Interbank', name: 'Interbank', figcaption: '', url: 'assets/images/logo-interbank.svg', detail: ['Selecciona la opción Pago a Instituciones o Empresa > Empresa: PAGOEFECTIVO > Servicio: PAGOEFECTIVO' ]},
      { id: 'Scotiabank', name: 'Scotiabank', figcaption: '', url: 'assets/images/logo-scotia.svg', detail: ['Selecciona la opción Pagos > Otras Instituciones > Otros > Busca por Empresa/Servicio: PAGOEFECTIVO > Selecciona: PAGOEFECTIVO SOLES']},
      { id: 'Banbif', name: 'Banbif', figcaption: '', url: 'assets/images/logo-banbif.svg', detail: ['Selecciona la opción Pago de servicios > Busca por Empresa y escribe PAGOEFECTIVO > Selecciona la empresa PAGOEFECTIVO']}
    ],
    cashBanks: [
      {
        id: 'BCP', figcaption: 'Agentes y Bodegas Agencias', url: 'assets/images/logo-bcp.svg', detail: ['Agentes BCP: Brinda el código de empresa 02186.', 'Agencias BCP: Costo adicional: S/.1.00.'] },
      { id: 'BBVA', figcaption: 'Agentes y Bodegas Agencias', url: 'assets/images/logo-bbva.svg', detail: [] },
      { id: 'Interbank', figcaption: 'Agentes y Bodegas Agencias', url: 'assets/images/logo-interbank.svg', detail: ['Agentes Interbank: Brinda el siguiente código 2735001', 'Agencias Market de Interbank: Costo adicional S/. 2.00.'] },
      { id: 'Banbif', figcaption: 'Agencias', url: 'assets/images/logo-banbif.svg',  detail: [] },
      { id: 'Fullcarga', figcaption: 'Agentes y Bodegas', url: 'assets/images/logo-fullcarga.png', detail: ['Encuentra a FullCarga en Bodegas, Farmacias, cabinas de Internet y Locutorios.'] },
      { id: 'Scotiabank', figcaption: 'Agentes y Bodegas Agencias' , url: 'assets/images/logo-scotia.svg', detail: [] },
      { id: 'WesternUnion', figcaption: 'Agentes y Bodegas', url: 'assets/images/logo-wu.svg', detail: [] },
      { id: 'Kasnet', figcaption: 'Agentes y Bodegas', url: 'assets/images/logo-kasnet.png', detail: [] },
    ]
  };

  data.internetBanks.map(element => {
    let itemSlider = `<li class="nav-item px-2 icon-bank" data-name="${element.name}">
                            <img src="${element.url}" alt=${element.id} class="icon-payment-slider my-2">
                        </li>`;
    $('#payment-internet').append(itemSlider);
  });

  data.cashBanks.map(element => {
    let itemCarrousel = `<li id=${element.id} class="item-carrousel">
                          <img src=${element.url} alt=${element.id}>
                           <p class="text-center">${element.figcaption}</p>
                        </li>`;
    $('#responsive').append(itemCarrousel);
  });
  
  $('#responsive').on('click', 'li', function() {
    // FIXME: refactorizado! - Esto agrega imágenes de bancos en slider
    $(this).find('img').removeClass('active-bank').addClass('active-bank');
    $(this).siblings().find('img').removeClass('active-bank');
    // TODO: mostrar texto de cada imagen
    data.cashBanks.map(element => {
      console.log(element);
      let details = `<li>
                      ${element.detail}
                    </li>`;              
      // $('#instructions').find('li').remove();
      $('#instructions').find('ul').append(details);
      // $('#instructions').find('p').text('');;
    });
  });
});
