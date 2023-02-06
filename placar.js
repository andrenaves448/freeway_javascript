let meusPontos = 0;


function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(139,69,19))
  text(meusPontos, width / 5, 28)
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play()
    voltaAtorParaPosicaoInicial()
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}
