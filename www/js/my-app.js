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
$$('#j1_1').on('click', function () {
  app.dialog.create({
    title: 'Cantidad de dados',
    //text: 'Dialog with vertical buttons',
  buttons: [
    {
      text: '1 dado',
      onClick: tocar("j1_1", "1"),
    },
    {
      text: '2 dados',
      onClick: tocar("j1_1", "2"),
    },
    {
      text: '3 dados',
      onClick: tocar("j1_1", "3"),
    },
    {
      text: '4 dados',
      onClick: tocar("j1_1", "4"),
    },
    {
      text: '5 dados',
      onClick: tocar("j1_1", "5"),
    },
    {
      text: 'tachar',
      onClick: tocar("j1_1", "X"),
    },
    {
      text: 'Cancelar',
    },
  ],
  verticalButtons: true,
  }).open();
});
/////////////////////////////////
function tocar(iden, index){
  if(index == 1){
    $$('#'+iden).text(index);
  }
  else if(index == 2){
  $$('#'+iden).text(index);
}
}


})
