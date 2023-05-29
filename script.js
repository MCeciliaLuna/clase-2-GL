const scores = [10, 5, 9, 9, 8, 7, 9, 9, 10, 10, 8, 6, 7, 5, 7, 6, 5, 10];

const players = [
  "E. MARTÍNEZ",
  "N. MOLINA",
  "C. ROMERO",
  "N. OTAMENDI",
  "N. TAGLIAFICO",
  "R. DE PAUL",
  "E. FERNANDEZ",
  "A. MAC ALLISTER",
  "Á. DI MARÍA",
  "L. MESSI",
  "J. ÁLVAREZ",
  "M. ACUÑA",
  "G. MONTIEL",
  "L. PAREDES",
  "L. MARTÍNEZ",
  "G. PEZZELLA",
  "P. DYBALA",
  "L. SCALONI",
];

console.log(`Array "SCORES": \n`, scores);
console.log(`Array "PLAYERS": \n`, players);

const evalPerformance = (scores, players) => {
  const outstandingScores = scores.filter((score) => score > 7);

  const outstandingPlayers = players.filter((_, index) => scores[index] > 7);

  const regularScores = scores.filter((score) => score <= 7);

  const regularPlayers = players.filter((_, index) => scores[index] <= 7);

  console.log(`Mejores puntajes: \n`, outstandingScores);
  console.log(`Mejores jugadores: \n`, outstandingPlayers);
  console.log(`Puntajes regulares: \n`, regularScores);
  console.log(`Jugadores regulares: \n`, regularPlayers);
};

evalPerformance(scores, players);
