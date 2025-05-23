let playerScore = 0;
let machineScore = 0;

function jogar(jogadaJogador) {
  const opcoes = ['pedra', 'papel', 'tesoura'];
  const jogadaMaquina = opcoes[Math.floor(Math.random() * 3)];
  
  document.getElementById('jogada-jogador').src = `img/${jogadaJogador}.png`;
  document.getElementById('jogada-maquina').src = `img/${jogadaMaquina}.png`;

  const resultado = document.getElementById('resultado');

  if (jogadaJogador === jogadaMaquina) {
    resultado.textContent = "Empate!";
  } else if (
    (jogadaJogador === 'pedra' && jogadaMaquina === 'tesoura') ||
    (jogadaJogador === 'papel' && jogadaMaquina === 'pedra') ||
    (jogadaJogador === 'tesoura' && jogadaMaquina === 'papel')
  ) {
    playerScore++;
    resultado.textContent = "Você ganhou!";
  } else {
    machineScore++;
    resultado.textContent = "Você perdeu! hahaha";
  }

  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('machine-score').textContent = machineScore;
}

function reiniciar() {
  playerScore = 0;
  machineScore = 0;

  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('machine-score').textContent = machineScore;

  document.getElementById('jogada-jogador').src = 'img/interrogacao.png';
  document.getElementById('jogada-maquina').src = 'img/interrogacao.png';

  document.getElementById('resultado').textContent = 'Escolha sua jogada!';
}
