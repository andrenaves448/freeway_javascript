//código carro 

let yCarros =[40,98,150,210,270,318];
let xCarros = [600,600,600,600,600,600];
let velocidadesCarros=[2,2.5,3.2,5,3.3,2.8];
let comprimentoCarro = 50;
let alturaCarro = 40;



function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i] , yCarros[i], comprimentoCarro,alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -=velocidadesCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaAtela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaAtela(xCarro){
  return xCarro < -50;
}

