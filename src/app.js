window.addEventListener('load', () => {
  // // function tab
  // $('.tabs-menu a').click(function(event) {
  //   event.preventDefault();
  //   $(this).parent().addClass('current');
  //   $(this).parent().siblings().removeClass('current');
  //   var tab = $(this).attr('href');
  //   // $('.tab-pane').not(tab).css('display', 'none');
  //   $('.tab-pane').removeClass('show active').addClass('show active');
  //   $('.tab-pane').not(tab).css('display', 'none');
  //   $('.tab-pane').siblings().addClass('show active');
  // });
  // slider payment-cash
  $('#responsive').lightSlider({
    item: 4,
    loop: false,
    slideMove: 4,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 600,
    responsive: [{
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
  // slider payment-internet
  $('#payment-internet').lightSlider({
    item: 5,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          item: 3,
          slideMargin: 6
        }
      }
    ]
  });
  // data of icon banks
  const data = {
    internetBanks: [{
      id: 'BCP',
      figcaption: '',
      url: 'assets/images/logo-bcp.svg',
      detail: ['Selecciona la opción Pago de servicios > EMPRESAS>PAGOEFECTIVO > SOLES.']
    },
    {
      id: 'BBVA',
      figcaption: '',
      url: 'assets/images/logo-bbva.svg',
      detail: ['Selecciona la opción Pago de servicios > De Instituciones y Empresas > Busca por nombre > PAGOEFECTIVO > PAGOEFECTIVOSOLES.']
    },
    {
      id: 'Interbank',
      figcaption: '',
      url: 'assets/images/logo-interbank.svg',
      detail: ['Selecciona la opción Pago a Instituciones o Empresa > Empresa: PAGOEFECTIVO > Servicio: PAGOEFECTIVO']
    },
    {
      id: 'Scotiabank',
      figcaption: '',
      url: 'assets/images/logo-scotia.svg',
      detail: ['Selecciona la opción Pagos > Otras Instituciones > Otros > Busca por Empresa/Servicio: PAGOEFECTIVO > Selecciona: PAGOEFECTIVO SOLES']
    },
    {
      id: 'Banbif',
      figcaption: '',
      url: 'assets/images/logo-banbif.svg',
      detail: ['Selecciona la opción Pago de servicios > Busca por Empresa y escribe PAGOEFECTIVO > Selecciona la empresa PAGOEFECTIVO']
    }
    ],
    cashBanks: [{
      id: 'BCP',
      figcaption: 'Agentes y Bodegas Agencias',
      url: 'assets/images/logo-bcp.svg',
      detail: ['Agentes BCP: Brinda el código de empresa 02186.', 'Agencias BCP: Costo adicional: S/.1.00.']
    },
    {
      id: 'BBVA',
      figcaption: 'Agentes y Bodegas Agencias',
      url: 'assets/images/logo-bbva.svg',
      detail: []
    },
    {
      id: 'Interbank',
      figcaption: 'Agentes y Bodegas Agencias',
      url: 'assets/images/logo-interbank.svg',
      detail: ['Agentes Interbank: Brinda el siguiente código 2735001', 'Agencias Market de Interbank: Costo adicional S/. 2.00.']
    },
    {
      id: 'Banbif',
      figcaption: 'Agencias',
      url: 'assets/images/logo-banbif.svg',
      detail: []
    },
    {
      id: 'Fullcarga',
      figcaption: 'Agentes y Bodegas',
      url: 'assets/images/logo-fullcarga.png',
      detail: ['Encuentra a FullCarga en Bodegas, Farmacias, cabinas de Internet y Locutorios.']
    },
    {
      id: 'Scotiabank',
      figcaption: 'Agentes y Bodegas Agencias',
      url: 'assets/images/logo-scotia.svg',
      detail: []
    },
    {
      id: 'WesternUnion',
      figcaption: 'Agentes y Bodegas',
      url: 'assets/images/logo-wu.svg',
      detail: []
    },
    {
      id: 'Kasnet',
      figcaption: 'Agentes y Bodegas',
      url: 'assets/images/logo-kasnet.png',
      detail: []
    },
    ]
  };
  // print in document icon payment internet for slider
  data.internetBanks.map(element => {
    let itemSlider = `<li class="nav-item icon-bank" data-detail="${element.detail}">
                            <img src="${element.url}" alt=${element.id} class="icon-payment-slider img-payment-internet my-2">
                        </li>`;
    $('#payment-internet').append(itemSlider);
  });
  // event for get details icons
  $('.icon-bank').click(function() {
    $(this).find('img').removeClass('active-bank').addClass('active-bank');
    $(this).siblings().find('img').removeClass('active-bank');
    $('#instructions-tab1').html('');
    let detailIntBank = `<p class="d-flex font-size-payment-instruction">
            <img src="assets/images/number-one-in-a-circle.png" alt="1" class="img-clock mx-1"><span>${$(this).data('detail')}</span></p>
          <p class="d-flex font-size-payment-instruction">
            <img src="assets/images/number-two-in-a-circle.png" alt="1" class="img-clock mx-1">
            <span>Ingresa tu código CIP: 9125682 y sigue los pasos.</span>
          </p>`;
    $('#instructions-tab1').append(detailIntBank);
  });

  data.cashBanks.map(element => {
    let itemCarrousel = `<li id=${element.id} class="icon-cash-bank" data-detail="${element.detail}">
                          <img src=${element.url} alt=${element.id}>
                          <p class="text-center">${element.figcaption}</p>
                        </li>`;
    $('#responsive').append(itemCarrousel);
  });

  data.cashBanks.map(element => {
    let itemCarrousel = `<li id=${element.id} class="icon-cash-bank" data-detail="${element.detail}">
                          <img src=${element.url} alt=${element.id}>
                          <p class="text-center">${element.figcaption}</p>
                        </li>`;
    $('#responsive').append(itemCarrousel);
  });

  $('#responsive').on('click', 'li', function() {
    $(this).find('img').removeClass('active-bank').addClass('active-bank');
    $(this).siblings().find('img').removeClass('active-bank');
  });

  $('.icon-cash-bank').click(function() {
    switch (true) {
    case $(this).is('#BCP'):
      $('.BCP').show();
      $('.Interbank').hide();
      $('.Fullcarga').hide();
      break;
    case $(this).is('#BBVA'):
      $('.BCP').hide();
      $('.Interbank').hide();
      $('.Fullcarga').hide();
      break;
    case $(this).is('#Interbank'):
      $('.Interbank').show();
      $('.BCP').hide();
      $('.Fullcarga').hide();
      break;
    case $(this).is('#Banbif'):
      $('.BCP').hide();
      $('.Interbank').hide();
      $('.Fullcarga').hide();
      break;
    case $(this).is('#Fullcarga'):
      $('.Fullcarga').show();
      $('.BCP').hide();
      $('.Interbank').hide();
      break;
    case $(this).is('#Scotiabank'):
      $('.BCP').hide();
      $('.Interbank').hide();
      $('.Fullcarga').hide();
      break;
    case $(this).is('#WesternUnion'):
      $('.BCP').hide();
      $('.Interbank').hide();
      $('.Fullcarga').hide();
      break;
    case $(this).is('#Kasnet'):
      $('.BCP').hide();
      $('.Interbank').hide();
      $('.Fullcarga').hide();
      break;
    }
  });
  // resize code payment
  /*let code = '9125682';
  $('.code').text(code);
  // let code = $('.code').text();
  let width = 0;
  if (self.screen) {   
    width = screen.width;
  } else if (self.java) { // for NN3 with enabled Java
    let jkit = java.awt.Toolkit.getDefaultToolkit();
    let scrsize = jkit.getScreenSize();
    width = scrsize.width;
  }
  if (width > 0 && width < 576 && code.length >= 8) {
    let fontSize = 1;
    fontSize -= 0.2;
    let newFontSize = fontSize + 'em';
    $('.code').css('font-size', newFontSize);
  } else {
    let fontSize = 2.3;
    fontSize -= 0.2;
    let newFontSize = fontSize + 'em';
    $('.code').css('font-size', newFontSize);
  }*/                
});
