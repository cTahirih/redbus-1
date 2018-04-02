'use strict';

window.addEventListener('load', function () {
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
        slideMargin: 6
      }
    }, {
      breakpoint: 480,
      settings: {
        item: 3,
        slideMove: 3
      }
    }, {
      breakpoint: 320,
      settings: {
        item: 3,
        slideMove: 3
      }
    }]
  });
  // slider payment-internet
  $('#payment-internet').lightSlider({
    item: 5,
    responsive: [{
      breakpoint: 992,
      settings: {
        item: 3,
        slideMargin: 6
      }
    }]
  });
  // data of icon banks
  var data = {
    internetBanks: [{
      id: 'BCP',
      figcaption: '',
      url: 'assets/images/logo-bcp.svg',
      detail: ['Selecciona la opción Pago de servicios > EMPRESAS>PAGOEFECTIVO > SOLES.']
    }, {
      id: 'BBVA',
      figcaption: '',
      url: 'assets/images/logo-bbva.svg',
      detail: ['Selecciona la opción Pago de servicios > De Instituciones y Empresas > Busca por nombre > PAGOEFECTIVO > PAGOEFECTIVOSOLES.']
    }, {
      id: 'Interbank',
      figcaption: '',
      url: 'assets/images/logo-interbank.svg',
      detail: ['Selecciona la opción Pago a Instituciones o Empresa > Empresa: PAGOEFECTIVO > Servicio: PAGOEFECTIVO']
    }, {
      id: 'Scotiabank',
      figcaption: '',
      url: 'assets/images/logo-scotia.svg',
      detail: ['Selecciona la opción Pagos > Otras Instituciones > Otros > Busca por Empresa/Servicio: PAGOEFECTIVO > Selecciona: PAGOEFECTIVO SOLES']
    }, {
      id: 'Banbif',
      figcaption: '',
      url: 'assets/images/logo-banbif.svg',
      detail: ['Selecciona la opción Pago de servicios > Busca por Empresa y escribe PAGOEFECTIVO > Selecciona la empresa PAGOEFECTIVO']
    }],
    cashBanks: [{
      id: 'BCP',
      figcaption: 'Agentes y Bodegas Agencias',
      url: 'assets/images/logo-bcp.svg',
      detail: ['Agentes BCP: Brinda el código de empresa 02186.', 'Agencias BCP: Costo adicional: S/.1.00.']
    }, {
      id: 'BBVA',
      figcaption: 'Agentes y Bodegas Agencias',
      url: 'assets/images/logo-bbva.svg',
      detail: []
    }, {
      id: 'Interbank',
      figcaption: 'Agentes y Bodegas Agencias',
      url: 'assets/images/logo-interbank.svg',
      detail: ['Agentes Interbank: Brinda el siguiente código 2735001', 'Agencias Market de Interbank: Costo adicional S/. 2.00.']
    }, {
      id: 'Banbif',
      figcaption: 'Agencias',
      url: 'assets/images/logo-banbif.svg',
      detail: []
    }, {
      id: 'Fullcarga',
      figcaption: 'Agentes y Bodegas',
      url: 'assets/images/logo-fullcarga.png',
      detail: ['Encuentra a FullCarga en Bodegas, Farmacias, cabinas de Internet y Locutorios.']
    }, {
      id: 'Scotiabank',
      figcaption: 'Agentes y Bodegas Agencias',
      url: 'assets/images/logo-scotia.svg',
      detail: []
    }, {
      id: 'WesternUnion',
      figcaption: 'Agentes y Bodegas',
      url: 'assets/images/logo-wu.svg',
      detail: []
    }, {
      id: 'Kasnet',
      figcaption: 'Agentes y Bodegas',
      url: 'assets/images/logo-kasnet.png',
      detail: []
    }]
  };
  // print in document icon payment internet for slider
  data.internetBanks.map(function (element) {
    var itemSlider = '<li class="nav-item icon-bank" data-detail="' + element.detail + '">\n                            <img src="' + element.url + '" alt=' + element.id + ' class="icon-payment-slider img-payment-internet my-2">\n                        </li>';
    $('#payment-internet').append(itemSlider);
  });
  // event for get details icons
  $('.icon-bank').click(function () {
    $(this).find('img').removeClass('active-bank').addClass('active-bank');
    $(this).siblings().find('img').removeClass('active-bank');
    $('#instructions-tab1').html('');
    var detailIntBank = '<p class="d-flex font-size-payment-instruction">\n            <img src="assets/images/number-one-in-a-circle.png" alt="1" class="img-clock mx-1"><span>' + $(this).data('detail') + '</span></p>\n          <p class="d-flex font-size-payment-instruction">\n            <img src="assets/images/number-two-in-a-circle.png" alt="1" class="img-clock mx-1">\n            <span>Ingresa tu c\xF3digo CIP: 9125682 y sigue los pasos.</span>\n          </p>';
    $('#instructions-tab1').append(detailIntBank);
  });

  data.cashBanks.map(function (element) {
    var itemCarrousel = '<li id=' + element.id + ' class="icon-cash-bank" data-detail="' + element.detail + '">\n                          <img src=' + element.url + ' alt=' + element.id + '>\n                          <p class="text-center">' + element.figcaption + '</p>\n                        </li>';
    $('#responsive').append(itemCarrousel);
  });

  data.cashBanks.map(function (element) {
    var itemCarrousel = '<li id=' + element.id + ' class="icon-cash-bank" data-detail="' + element.detail + '">\n                          <img src=' + element.url + ' alt=' + element.id + '>\n                          <p class="text-center">' + element.figcaption + '</p>\n                        </li>';
    $('#responsive').append(itemCarrousel);
  });

  $('#responsive').on('click', 'li', function () {
    // FIXME: refactorizado! - Esto agrega borde active a las imágenes de bancos
    $(this).find('img').removeClass('active-bank').addClass('active-bank');
    $(this).siblings().find('img').removeClass('active-bank');
    // TODO: mostrar texto de cada imagen
    // data.cashBanks.map(element => {
    //   console.log(element);
    //   let details = `<li>
    //                   ${element.detail}
    //                 </li>`;              
    //   // $('#instructions').find('li').remove();
    //   $('#instructions').find('ul').append(details);
    //   // $('#instructions').find('p').text('');;
    // });
  });
  $('.icon-cash-bank').click(function () {
    /* console.log($(this).data('detail'));
    console.log($(this).data('detail').split(','));
    console.log(($(this).data('detail').split(',').map((item, index) => {return  item[index];
    }))); */
    // console.log(($(this).data('detail').split(',').forEach(function() {
    //   alert('hola');
    // })));
    // console.log(data.cashBanks.map(element => {
    //   let arr = element;
    //   for (var i in arr) {
    //     let respuesta = arr[i];
    //   }
    //   return respuesta;
    // }));
    switch (true) {
      case $(this).is('#BCP'):
        $('.BCP').show();
        $('.Interbank').hide();
        $('Fullcarga').hide();
        break;
      case $(this).is('#BBVA'):
        $('.BCP').hide();
        $('.Interbank').hide();
        $('Fullcarga').hide();
        break;
      case $(this).is('#Interbank'):
        $('.Interbank').show();
        $('.BCP').hide();
        $('Fullcarga').hide();
        break;
      case $(this).is('#Banbif'):
        $('.BCP').hide();
        $('.Interbank').hide();
        $('Fullcarga').hide();
        break;
      case $(this).is('#Fullcarga'):
        $('.Fullcarga').show();
        $('.BCP').hide();
        $('.Interbank').hide();
        break;
      case $(this).is('#Scotiabank'):
        $('.BCP').hide();
        $('.Interbank').hide();
        $('Fullcarga').hide();
        break;
      case $(this).is('#WesternUnion'):
        $('.BCP').hide();
        $('.Interbank').hide();
        $('Fullcarga').hide();
        break;
      case $(this).is('#Kasnet'):
        $('.BCP').hide();
        $('.Interbank').hide();
        $('Fullcarga').hide();
        break;
    }
  });
  // resize code payment
  var code = '9125682';
  $('.code').text(code);
  // let code = $('.code').text();
  var width = 0;
  if (self.screen) {
    width = screen.width;
  } else if (self.java) {
    // for NN3 with enabled Java
    var jkit = java.awt.Toolkit.getDefaultToolkit();
    var scrsize = jkit.getScreenSize();
    width = scrsize.width;
  }
  if (width > 0 && width < 576 && code.length >= 8) {
    var fontSize = 1;
    fontSize -= 0.2;
    var newFontSize = fontSize + 'em';
    $('.code').css('font-size', newFontSize);
  } else {
    var _fontSize = 2.3;
    _fontSize -= 0.2;
    var _newFontSize = _fontSize + 'em';
    $('.code').css('font-size', _newFontSize);
  }
});