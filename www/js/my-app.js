var $$ = Dom7;

var app = new Framework7({
  root: '#app', // App root element

  id: 'io.framework7.myapp', // App bundle ID
  name: 'My App', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,


  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },


});


var mainView = app.views.create('.view-main');

var nomJug1 = "";
var nomJug2 = "";
var total1 = 0;
var total2 = 0;
var ident = "";
var dado = 0;
// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");


    $$('#inicio').on('click',function () {
      nomjug1 = $$('#j1').val();
      nomjug2 = $$('#j2').val();
    })


});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="anotador"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
    $$('#jug1').text(nomjug1);
    $$('#jug2').text(nomjug2);

///////////////////////////////// onclick de asignacion dados

$$('#j1_1').on('click', function () {asignar(1, 1);});
$$('#j1_2').on('click', function () {asignar(1, 2);});
$$('#j1_3').on('click', function () {asignar(1, 3);});
$$('#j1_4').on('click', function () {asignar(1, 4);});
$$('#j1_5').on('click', function () {asignar(1, 5);});
$$('#j1_6').on('click', function () {asignar(1, 6);});

$$('#j2_1').on('click', function () {asignar(2, 1);});
$$('#j2_2').on('click', function () {asignar(2, 2);});
$$('#j2_3').on('click', function () {asignar(2, 3);});
$$('#j2_4').on('click', function () {asignar(2, 4);});
$$('#j2_5').on('click', function () {asignar(2, 5);});
$$('#j2_6').on('click', function () {asignar(2, 6);});


function asignar(i, j){
  ident = "j"+i+"_"+j;
  dado = j;
};

/////////////////////////////////
$$('.open-vertical').on('click', function () {
  app.dialog.create({
    title: 'Cantidad de dados',
    //text: 'Dialog with vertical buttons',
  buttons: [
    {
      text: '1 dado',
    },
    {
      text: '2 dados',
    },
    {
      text: '3 dados',
    },
    {
      text: '4 dados',
    },
    {
      text: '5 dados',
    },
    {
      text: 'tachar',
    },
    {
      text: 'Cancelar',
    },
  ],
  onClick: function(dialog, index) { tocar("", index) },
  verticalButtons: true,
  }).open();
});
/////////////////////////////////
function tocar(iden, index){
    console.log(ident + " / "+  index);
    if(index < 5){
        $$("#"+ident).text((index+1)*dado);
    }
    else if(index == 5){
        $$("#"+ident).text("X");
    }
  }
/////////////////////////////////
/////////////////////////////////
/*
    $$('#volver').on('click', function () {
      nomjug1 = "";
      nomjug2 = "";
      $$('#j1').val("");
      $$('#j2').val("");
      for(var j = 0; j < 2; j++){
        for (var i = 0; i < ; i++) {
          $$('#'+j+i).text("-");
        }
      }
    })
*/
/////////////////////////////////
/////////////////////////////////
    $$('#limpiar').on('click', function () {
      for(var j = 1; j < 3; j++){
        for (var i = 1; i < 12; i++) {
          $$("#j"+j+"_"+i).text("-");
        };
      }
      $$('#t1').text("0");
      $$('#t2').text("0");
    })

    function sumar1(n){
      total1 += n;
      $$('#t1').text(total1);
    }
    function sumar2(n){
      total2 += n;
      $$('#t2').text(total2);
    }
/////////////////////////////////



})
