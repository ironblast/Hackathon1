
const players = [
  {
    defenseEnabled: false,
    turnsBeforeBerserk: 3
  },
  {
    defenseEnabled: false,
    turnsBeforeBerserk: 3
  }
]


  function updateLifePoints(playerNum, val) {
    const progressBarId = `avancement-${playerNum}`
    const ava = document.getElementById(progressBarId);
    if((ava.value+val)<=ava.max && (ava.value+val)>=0) {
      ava.value += val;
    }
  }

const p0attack = document.getElementById('player-attack-0');
const p1attack = document.getElementById('player-attack-1');

p0attack.addEventListener('click', evt => {
  p0attack.disabled = true
  p0potion.disabled = true
  p0defense.disabled = true
  p1attack.disabled = false
  p1potion.disabled = false
  p1defense.disabled = false
  updateLifePoints(1, -10)
})

p1attack.addEventListener('click', evt => {
  p0attack.disabled = false
  p0potion.disabled = false
  p0defense.disabled = false
  p1attack.disabled = true
  p1potion.disabled = true
  p1defense.disabled = true
  updateLifePoints(0, -10)
})

const p0potion = document.getElementById('player-potion-0');
const p1potion = document.getElementById('player-potion-1');

p0potion.addEventListener('click', evt => {
  p0attack.disabled = true
  p0potion.disabled = true
  p0defense.disabled = true
  p1attack.disabled = false
  p1potion.disabled = false
  p1defense.disabled = false
  modif(+30)
})
p1potion.addEventListener('click', evt => {
  p0attack.disabled = false
  p0potion.disabled = false
  p0defense.disabled = false
  p1attack.disabled = true
  p1potion.disabled = true
  p1defense.disabled = true
  modification(+30)
})

const p0defense = document.getElementById('player-defense-0');
const p1defense = document.getElementById('player-defense-1');

p0defense.addEventListener('click', evt => {
  p0attack.disabled = true
  p0potion.disabled = true
  p0defense.disabled = true
  p1attack.disabled = false
  p1potion.disabled = false
  p1defense.disabled = false
})
p1defense.addEventListener('click', evt => {
  p0attack.disabled = false
  p0potion.disabled = false
  p0defense.disabled = false
  p1attack.disabled = true
  p1potion.disabled = true
  p1defense.disabled = true
})