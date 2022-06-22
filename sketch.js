let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;
//variáveisdaraquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;



let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
function setup (){
createCanvas(600, 400)
}
  function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    rect (5, 150,10,90);
}


function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro)
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha  < 0)  {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}
function mostraRaquete ( ){
  rect (xRaquete,yRaquete,Raquetecomprimento,Raquetealtura);
  
}
function movimentaminhaRaquete (){
   if (keyISDown(UP_ARROW)){
     yRaquete -=10; {
       
     }
   }
}
function verificacao
