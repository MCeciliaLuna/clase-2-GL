console.log(
  "%cScores Final Mundial Qatar 2022 - Selección Argentina",
  "background-color: #0096c7; color: white; font-size: 20px; text-align: center ; padding: 10px ;  margin: 5px "
);

const scores = [
  { player: "E. MARTÍNEZ", score: 10 },
  { player: "N. MOLINA", score: 5 },
  { player: "C. ROMERO", score: 9 },
  { player: "N. OTAMENDI", score: 9 },
  { player: "N. TAGLIAFICO", score: 8 },
  { player: "R. DE PAUL", score: 7 },
  { player: "E. FERNANDEZ", score: 9 },
  { player: "A. MAC ALLISTER", score: 9 },
  { player: "Á. DI MARÍA", score: 10 },
  { player: "L. MESSI", score: 10 },
  { player: "J. ÁLVAREZ", score: 8 },
  { player: "M. ACUÑA", score: 6 },
  { player: "G. MONTIEL", score: 7 },
  { player: "L. PAREDES", score: 5 },
  { player: "L. MARTÍNEZ", score: 7 },
  { player: "G. PEZZELLA", score: 6 },
  { player: "P. DYBALA", score: 5 },
  { player: "L. SCALONI", score: 10 },
];

console.table(scores);

const outstandingScores = scores.filter((score) => score.score > 7);

const outstandingPlayers = outstandingScores.map((player) => player.player);

const players = outstandingPlayers;

console.log(
  "%cOutstanding Players & Scores",
  "background-color: #0096c7; color: white; font-size: 15px; text-align: center; padding:10px;margin: 5px"
);

console.log(players);

console.log(
  "%cRegular Players & Scores",
  "background-color: #0096c7; color: white; font-size: 15px; text-align: center; padding:10px;margin: 5px"
);

for (let i = scores.length - 1; i >= 0; i--) {
  if (outstandingScores.includes(scores[i])) {
    scores.splice(i, 1);
  }
}

const regularScores = scores;

console.table(regularScores);
