var $$ = Dom7;
var app = new Framework7({
  root: '#app',
  id: 'io.framework7.myapp',
  name: 'My App',
  theme: 'auto',
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
});
var mainView = app.views.create('.view-main');
///////////////////////VARIABLES GLOBALES:
var valores1 = [0,0,0,0,0,0,0,0,0,0,0];
var valores2 = [0,0,0,0,0,0,0,0,0,0,0];
var total1 = 0;
var total2 = 0;
var ident = "";
var dado = 0;
var jugador = 0;
/////////////////////////////////////////
$$(document).on('deviceready', function() {
  var nomJug1 = "";
  var nomJug2 = "";
    $$('#inicio').on('click',function () {
      nomjug1 = $$('#j1').val();
      nomjug2 = $$('#j2').val();
      for (var i = 0; i < 11; i++) {
        valores1[i] = 0;
        valores2[i] = 0;
      }
    })
});
/////////////////////////////////////////
$$(document).on('page:init', '.page[data-name="anotador"]', function (e) {
    $$('#jug1').text(nomjug1);
    $$('#jug2').text(nomjug2);
///////////////////////////////// onclick de asignacion de ubicacion:
{
$$('#j1_1').on('click', function () {asignar(1, 1);});
$$('#j1_2').on('click', function () {asignar(1, 2);});
$$('#j1_3').on('click', function () {asignar(1, 3);});
$$('#j1_4').on('click', function () {asignar(1, 4);});
$$('#j1_5').on('click', function () {asignar(1, 5);});
$$('#j1_6').on('click', function () {asignar(1, 6);});
$$('#j1_7').on('click', function () {asignar(1, 7);});
$$('#j1_8').on('click', function () {asignar(1, 8);});
$$('#j1_9').on('click', function () {asignar(1, 9);});
$$('#j1_10').on('click', function () {asignar(1,10);});
$$('#j1_11').on('click', function () {asignar(1,11);});

$$('#j2_1').on('click', function () {asignar(2, 1);});
$$('#j2_2').on('click', function () {asignar(2, 2);});
$$('#j2_3').on('click', function () {asignar(2, 3);});
$$('#j2_4').on('click', function () {asignar(2, 4);});
$$('#j2_5').on('click', function () {asignar(2, 5);});
$$('#j2_6').on('click', function () {asignar(2, 6);});
$$('#j2_7').on('click', function () {asignar(2, 7);});
$$('#j2_8').on('click', function () {asignar(2, 8);});
$$('#j2_9').on('click', function () {asignar(2, 9);});
$$('#j2_10').on('click', function () {asignar(2,10);});
$$('#j2_11').on('click', function () {asignar(2,11);});
}//ABRIR PARA VER LOS ONCLICK

function asignar(i, j){
  jugador = i;
  dado = j;
  ident = "j"+i+"_"+j;
};
/////////////////////////////////BOTONES DADOS
$$('.open-vertical1').on('click', function () {
  app.dialog.create({
    title: 'Cantidad de dados',
    buttons: [{text: '1 dado',},{text: '2 dados',},{text: '3 dados',},{text: '4 dados',},{text: '5 dados',},{text: 'tachar',},{text: 'Cancelar',},],
    onClick: function(dialog, index) { tocar1(index) },
    verticalButtons: true,
  }).open();
});

function tocar1(index){
  var puntos = 0;
  var array;
  if (jugador == 1) array = valores1;
  if (jugador == 2) array = valores2;
  if(index < 5){
      puntos = (index+1)*dado;
      array[dado-1] = puntos;
      $$("#"+ident).text(puntos);
  }
  else if(index == 5) tachar();
  sumar();
  comprobarGanador();
}
//////////////////////////////////BOTONES JUEGOS
$$('.open-vertical2').on('click', function () {
  app.dialog.create({
    title: '¿Armada o servida?',
    buttons: [{text: 'Armada',},{text: 'Servida',},{text: 'Tachar',},{text: 'Cancelar',},],
    onClick: function(dialog, index) { tocar2(index) },
    verticalButtons: true,
  }).open();
});

  function tocar2(index){
    var serv = 0;
    if (index == 2) tachar();
    if (index == 1) serv = 5;
    if (index == 1 && dado == 10) ganarGenerala();
    if (index != 2 && index != 3) asignarValor(dado, serv);
    sumar();
    comprobarGanador();
  }

  function ganarGenerala(){
    if (jugador == 1) alert("GANÓ"+ $$('#jug1').val());
    if (jugador == 2) alert("GANÓ"+ $$('#jug2').val());
  }

  function asignarValor(v, k){
    var array;
    if (jugador == 1) array = valores1;
    if (jugador == 2) array = valores2;
    switch (v) {
      case 7: array[6] = 20 + k; $$("#"+ident).text(20+k); break; //escalera
      case 8:
        array[7] = 30 + k; $$("#"+ident).text(30+k); break; //full
      case 9:
        array[8] = 40 + k; $$("#"+ident).text(40+k); break; //poker
      case 10:
        array[9] = 50; $$("#"+ident).text(50); break; //generala
      case 11:
        array[10] = 100; $$("#"+ident).text(100); break; //doble generala
      default:
    }
  }
/////////////////////////////////
  function tachar(){
  var array;
  if (jugador == 1) array = valores1;
  if (jugador == 2) array = valores2;
  array[dado-1] = "X";
  $$("#"+ident).text("X");
  }
  function sumar(){
  total1 = 0;
  total2 = 0;
  for (var i = 0; i < 11; i++) {
    if(valores1[i] != "X") total1 += valores1[i];
    if(valores2[i] != "X") total2 += valores2[i];
  }
  $$("#t1").text(total1);
  $$("#t2").text(total2);
  }
  function comprobarGanador() {
    var n = 0;
    var m = 0;
    var i = 0;
    while(i < 11){
      if(valores1[i] != 0) n++;
      if(valores2[i] != 0) m++;
      i++;
    }
    if (n == 11 && m == 11) {
      total1 > total2 ? alert("GANÓ"+$$('#jug1').val()) : alert("GANÓ"+$$('#jug2').val());
    }
  }
/////////////////////////////////BOTON LIMPIAR:
 $$('#limpiar').on('click', function () {
    for(var j = 1; j < 3; j++){
      for (var i = 1; i < 12; i++) {
        $$("#j"+j+"_"+i).text("-");
      };
    }
    for (var i = 0; i < 11; i++) {
      valores1[i] = 0;
      valores2[i] = 0;
    }
    total1 = 0;
    total2 = 0;
    $$('#t1').text("0");
    $$('#t2').text("0");
  })
/////////////////////////////////


}) //CIERRA DOCUMENT ANOTADOR
