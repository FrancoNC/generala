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
    game="";
    puntos=0;
    tot1=[];
    tot2=[];
    jug=0;
    posicion=0;
    resultado1=0;
    resultado2=0;

///////////////////////////////// onclick de asignacion dados

$$('#j1_1').on('click', function () {asignar(1, 1);jug=1});
$$('#j1_2').on('click', function () {asignar(1, 2);jug=1});
$$('#j1_3').on('click', function () {asignar(1, 3);jug=1});
$$('#j1_4').on('click', function () {asignar(1, 4);jug=1});
$$('#j1_5').on('click', function () {asignar(1, 5);jug=1});
$$('#j1_6').on('click', function () {asignar(1, 6);jug=1});
$$('#j1_7').on('click', function () {game="escalera"; asignar(1,7);jug=1});
$$('#j1_8').on('click', function () {game="full"; asignar(1,8);jug=1});
$$('#j1_9').on('click', function () {game="poker"; asignar(1,9);jug=1});
$$('#j1_10').on('click', function () {asignar(1,10);jug=1});
$$('#j1_11').on('click', function () {asignar(1,11);jug=1});


$$('#j2_1').on('click', function () {asignar(2, 1);jug=2});
$$('#j2_2').on('click', function () {asignar(2, 2);jug=2});
$$('#j2_3').on('click', function () {asignar(2, 3);jug=2});
$$('#j2_4').on('click', function () {asignar(2, 4);jug=2});
$$('#j2_5').on('click', function () {asignar(2, 5);jug=2});
$$('#j2_6').on('click', function () {asignar(2, 6);jug=2});
$$('#j2_7').on('click', function () {game="escalera"; asignar(2,7);jug=2});
$$('#j2_8').on('click', function () {game="full"; asignar(2,8);jug=2});
$$('#j2_9').on('click', function () {game="poker"; asignar(2,9);jug=2});
$$('#j2_10').on('click', function () {asignar(2,10);jug=2});
$$('#j2_11').on('click', function () {asignar(2,11);jug=2});


function asignar(i, j){
  ident = "j"+i+"_"+j;
  dado = j;
  posicion=j-1;
};

/////////////////////////////////
$$('.open-vertical1').on('click', function () {
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
  onClick: function(dialog, index) { tocar1("", index) },
  verticalButtons: true,
  }).open();
});
//----------------------------------------------//
$$('.open-vertical2').on('click', function () {
  app.dialog.create({
    title: 'Cantidad de dados',
    //text: 'Dialog with vertical buttons',
  buttons: [
    {
      text: 'Armada',
    },
    {
      text: 'Servida',
    },
    {
      text: 'Tachar',
    },
    {
      text: 'Cancelar',
    },
  ],
  onClick: function(dialog, index) { tocar2("", index) },
  verticalButtons: true,
  }).open();
});
//----------------------------------------------//
$$('.open-vertical3').on('click', function () {
  app.dialog.create({
    title: 'Cantidad de dados',
    //text: 'Dialog with vertical buttons',
  buttons: [
    {
      text: 'Generala',
    },
    {
      text: 'Servida',
    },
    {
      text: 'Tachar',
    },
    {
      text: 'Cancelar',
    },
  ],
  onClick: function(dialog, index) { tocar3("", index) },
  verticalButtons: true,
  }).open();
});
//----------------------------------------------//
$$('.open-vertical4').on('click', function () {
  app.dialog.create({
    title: 'Cantidad de dados',
    //text: 'Dialog with vertical buttons',
  buttons: [
    {
      text: 'Generala Doble',
    },
    {
      text: 'Tachar',
    },
    {
      text: 'Cancelar',
    },
  ],
  onClick: function(dialog, index) { tocar4("", index) },
  verticalButtons: true,
  }).open();
});
/////////////////////////////////
function tocar1(iden, index){
    console.log(ident + " / "+  index);
    if(index < 5){
        puntos=(index+1)*dado;
        tot1[posicion]=puntos;
        total()
        $$("#"+ident).text(puntos);
    }
    else if(index == 5){
        puntos=0;
        tot1[posicion]=puntos;
        $$("#"+ident).text("X");
        total()
    }
  }
/////////////////////////////////
function tocar2(iden, index){
  console.log(ident + " / "+  index);
  console.log(game)
  if(game=="escalera"){
    if(index==0){
      puntos=20;
      tot1[posicion]=puntos;
      $$("#"+ident).text(20);
      total();
    }
    else{
      if(index==1){
        puntos=25;
        tot1[posicion]=puntos;
        $$("#"+ident).text(25);
        total();
      }
      else{
        if(index==2){
          puntos=0;
          tot1[posicion]=puntos;
          $$("#"+ident).text("X");
        }
      }
    }
  } else{
    if(game=="full"){
      if(index==0){
        puntos=25;
        tot1[posicion]=puntos;
        $$("#"+ident).text(25);
        total();
      }
      else{
        if(index==1){
          puntos=30;
          tot1[posicion]=puntos;
          $$("#"+ident).text(30);
          total();
        }
        else{
          if(index==2){
            puntos=0;
            tot1[posicion]=puntos;
            $$("#"+ident).text("X");
          }
        }
      }
    } else{
      if(game=="poker"){
        if(index==0){
          puntos=40;
          tot1[posicion]=puntos;
          $$("#"+ident).text(40);
          total();
        }
        else{
          if(index==1){
            puntos=45;
            tot1[posicion]=puntos;
            $$("#"+ident).text(45);
            total();
          }
          else{
            if(index==2){
              puntos=0;
              tot1[posicion]=puntos;
              $$("#"+ident).text("X");
            }
          }
        }
      }
    }
  }
}
/////////////////////////////////
function tocar3(iden, index){
  if(index==0){
    puntos=50;
    tot1[posicion]=puntos;
    $$("#"+ident).text(50);
    total();
  } else{
    if(index==1){
      tot="GG";
      $$("#"+ident).text("GG");
      total();
    } else{
      if(index==2){
        puntos=0;
        tot1[posicion]=puntos;
        $$("#"+ident).text("X");
      } 
    }
  }
}
/////////////////////////////////
function tocar4(iden, index){
  if(index==0){
    puntos=60;
    tot1[posicion]=puntos;
    $$("#"+ident).text(60);
    total();
  }else{
    if(index==1){
      puntos=0;
      tot1[posicion]=puntos;
      $$("#"+ident).text("X");
    }
  }
}
/////////////////////////////////
    $$('#limpiar').on('click', function () {
      game="";
      puntos=0
      tot=0;
      for(var j = 1; j < 3; j++){
        for (var i = 1; i < 12; i++) {
          $$("#j"+j+"_"+i).text("-");
        };
      }
      $$('#t1').text("0");
      $$('#t2').text("0");
      resultado1=0;
      resultado2=0;
      tot1=[];
      tot2=[];
    })

/////////////////////////////////
function total(){
  if(jug==1){
    resultado1=0;
    for(var i=0;i<tot1.length;i++){
      if(tot1[i]>=0){
        resultado1=resultado1+parseInt(tot1[i]);
      }
    }
    $$('#t1').text(resultado1);
  } else {
    if(jug==2){
      resultado2=0;
      for(var i=0;i<tot2.length;i++){
        if(tot1[i]>=0){
          resultado2=resultado2+parseInt(tot2[i]);
        }
      }
      $$('#t2').text(resultado2);
    }
  }
}
})
