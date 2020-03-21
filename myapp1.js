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
    tot=0;

///////////////////////////////// onclick de asignacion dados

$$('#j1_1').on('click', function () {asignar(1, 1);});
$$('#j1_2').on('click', function () {asignar(1, 2);});
$$('#j1_3').on('click', function () {asignar(1, 3);});
$$('#j1_4').on('click', function () {asignar(1, 4);});
$$('#j1_5').on('click', function () {asignar(1, 5);});
$$('#j1_6').on('click', function () {asignar(1, 6);});
$$('#j1_7').on('click', function () {game="escalera"; asignar(1,7)});
$$('#j1_8').on('click', function () {game="full"; asignar(1,8)});
$$('#j1_9').on('click', function () {game="poker"; asignar(1,9)});
$$('#j1_10').on('click', function () {asignar(1,10)});
$$('#j1_11').on('click', function () {asignar(1,11)});


$$('#j2_1').on('click', function () {asignar(2, 1);});
$$('#j2_2').on('click', function () {asignar(2, 2);});
$$('#j2_3').on('click', function () {asignar(2, 3);});
$$('#j2_4').on('click', function () {asignar(2, 4);});
$$('#j2_5').on('click', function () {asignar(2, 5);});
$$('#j2_6').on('click', function () {asignar(2, 6);});
$$('#j2_7').on('click', function () {game="escalera"; asignar(2,7)});
$$('#j2_8').on('click', function () {game="full"; asignar(2,8)});
$$('#j2_9').on('click', function () {game="poker"; asignar(2,9)});
$$('#j2_10').on('click', function () {asignar(2,10)});
$$('#j2_11').on('click', function () {asignar(2,11)});


function asignar(i, j){
  ident = "j"+i+"_"+j;
  dado = j;
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
        puntos=(index+1)*dado
        $$("#"+ident).text(puntos);
        total();
    }
    else if(index == 5){
      puntos=0;
        $$("#"+ident).text("X");
    }
  }
/////////////////////////////////
function tocar2(iden, index){
  console.log(ident + " / "+  index);
  console.log(game)
  if(game=="escalera"){
    if(index==0){
      puntos=20;
      $$("#"+ident).text(20);
      total();
    }
    else{
      if(index==1){
        puntos=25;
        $$("#"+ident).text(25);
        total();
      }
      else{
        if(index==2){
          puntos=0;
          $$("#"+ident).text("X");
        }
      }
    }
  } else{
    if(game=="full"){
      if(index==0){
        puntos=25;
        $$("#"+ident).text(25);
        total();
      }
      else{
        if(index==1){
          puntos=30;
          $$("#"+ident).text(30);
          total();
        }
        else{
          if(index==2){
            puntos=0;
            $$("#"+ident).text("X");
          }
        }
      }
    } else{
      if(game=="poker"){
        if(index==0){
          puntos=40;
          $$("#"+ident).text(40);
          total();
        }
        else{
          if(index==1){
            puntos=45;
            $$("#"+ident).text(45);
            total();
          }
          else{
            if(index==2){
              puntos=0;
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
    $$("#"+ident).text(50);
    total();
  } else{
    if(index==1){
      tot="GG";
      $$("#"+ident).text("GG");
      total();
    } else{
      if(index==2){
        $$("#"+ident).text("X");
      } 
    }
  }
}
/////////////////////////////////
function tocar4(iden, index){
  if(index==0){
    puntos=60;
    $$("#"+ident).text(60);
    total();
  }else{
    if(index==1){
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
    })

    //function sumar1(n){
    //  total1 += n;
    //  $$('#t1').text(total1);
    //}
    //function sumar2(n){
    //  total2 += n;
    //  $$('#t2').text(total2);
    //}
/////////////////////////////////
function total(){
  tot=tot+puntos
  $$('#t1').text(tot);
}
})
