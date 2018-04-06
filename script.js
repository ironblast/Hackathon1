function getRndPlayer() {
  return Math.floor(2 * Math.random())
}

const players = [
  {
    defenseEnabled: false,
    turnsBeforeFury: 3
  },
  {
    defenseEnabled: false,
    turnsBeforeFury: 3
  }
]

function updateLifePoints(playerNum, val) {
  const progressBarId = `avancement-${playerNum}`
  const ava = document.getElementById(progressBarId);
  ava.value += val;
  if(ava.value > ava.max) {
    ava.value = ava.max;
  }
  if(ava.value < 0) {
    ava.value = 0;
  }
}

function player0done() {
  players[1].defenseEnabled = false
  p0attack.disabled = true
  p0potion.disabled = true
  p0fury.disabled = true
  p0defense.disabled = true
  p1attack.disabled = false
  p1potion.disabled = false
  p1defense.disabled = false
  players[1].turnsBeforeFury--
  if(players[1].turnsBeforeFury === 0) {
    p1fury.disabled = false
    players[1].turnsBeforeFury = 3
  }
}

function player1done() {
  players[0].defenseEnabled = false
  p0attack.disabled = false
  p0potion.disabled = false
  p0defense.disabled = false
  p1attack.disabled = true
  p1potion.disabled = true
  p1defense.disabled = true
  p1fury.disabled = true
  players[0].turnsBeforeFury--
  if(players[0].turnsBeforeFury === 0) {
    p0fury.disabled = false
    players[0].turnsBeforeFury = 3
  }
}

const p0attack = document.getElementById('player-attack-0');
const p1attack = document.getElementById('player-attack-1');

p0attack.addEventListener('click', evt => {
  document.getElementById('Guy').classList.remove('animation-droite')
  document.getElementById('Zanghief').classList.add('animation-gauche')
  const damage = players[1].defenseEnabled ? -5 : -10
  updateLifePoints(1, damage)
  player0done()
})

p1attack.addEventListener('click', evt => {
  document.getElementById('Zanghief').classList.remove('animation-gauche')
  document.getElementById('Guy').classList.add('animation-droite')
  const damage = players[0].defenseEnabled ? -5 : -10
  updateLifePoints(0, damage)
  player1done()
})

const p0fury = document.getElementById('player-fury-0');
const p1fury = document.getElementById('player-fury-1');

p0fury.addEventListener('click', evt => {
  document.getElementById('Guy').classList.remove('animation-droite')
  document.getElementById('Zanghief').classList.add('animation-gauche')
  const damage = players[1].defenseEnabled ? -10 : -20
  updateLifePoints(1, damage)
  player0done()
})

p1fury.addEventListener('click', evt => {
  document.getElementById('Zanghief').classList.remove('animation-gauche')
  document.getElementById('Guy').classList.add('animation-droite')
  const damage = players[0].defenseEnabled ? -10 : -20
  updateLifePoints(0, damage)
  player1done()
})

const p0potion = document.getElementById('player-potion-0');
const p1potion = document.getElementById('player-potion-1');

p0potion.addEventListener('click', evt => {
  document.getElementById('Guy').classList.remove('animation-droite')
  updateLifePoints(0, +30)
  player0done()
})
p1potion.addEventListener('click', evt => {
  document.getElementById('Zanghief').classList.remove('animation-gauche')
  updateLifePoints(1, +30)
  player1done()
})

const p0defense = document.getElementById('player-defense-0');
const p1defense = document.getElementById('player-defense-1');

p0defense.addEventListener('click', evt => {
  document.getElementById('Guy').classList.remove('animation-droite')
  players[0].defenseEnabled = true
  player0done()
})
p1defense.addEventListener('click', evt => {
  document.getElementById('Zanghief').classList.remove('animation-gauche')
  players[1].defenseEnabled = true
  player1done()
})

if(getRndPlayer() === 0) {
  p1attack.disabled = true
  p1potion.disabled = true
  p1defense.disabled = true
}
else {
  p0attack.disabled = true
  p0potion.disabled = true
  p0defense.disabled = true
}