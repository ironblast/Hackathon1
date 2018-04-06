const targetElement = document.getElementById('main')
let heroes
let playerIndex = 0
let choosenHeroes = [undefined,undefined]
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
let p0attack
let p0potion
let p0fury
let p0defense
let p1attack
let p1potion
let p1defense

const createHero = hero => `
<div class=col-3>
<img class=card-img-top onclick="myFunction(this, ${hero.id});"
alt="${hero.name}" src="${hero.images.sm}" />
<div class="card-body">
    <p class="card-text"></p>
</div>
<h2></h2>
</div>`

const charSelection = html =>
 `<div class="container">
 <h1>Javascript VS Java</h1>
<div class= "container">
  <div class="row">
<div class="col-4">   
 <div class="container">
   <span onclick="this.parentElement.style.display='none'" ></span>
<img id="expandedImg0" style="width:60%">
<h2>Player One</h2>
   <button id="buttonp1" onclick="validPlayer(this)" class="btn">Validé</button>
<div id="imgtext0"></div>
  </div>
 
  </div>
<div class="col-4">
<div class="container ">
<div id="charSelection" class="row">
  ${html}
</div>
</div>
</div>
  <div class="col-4">
    <div class="container cartep2">
      <span onclick="this.parentElement.style.display='none'" ></span>
<img id="expandedImg1" style="width:60%">
<h2>Player Two</h2>
   <button id="buttonp2" onclick="validPlayer(this)" class="btn">Validé</button>
<div id="imgtext1"></div>
  </div>
    </div>
  </div>
    
</div>
</div>`

const pageFightHtml = (player1, player2) => `
<img class="img-fluid offset-5 col-md-3 col-lg-3" src="Images/vs1.png" alt="" /></h1>
<div class="container-fluid">
  <div class="row">
      <div class="barreGauche">
        <img class="col-md-4 col-lg-4 life-gauche" src="Images/lifeBar.png" alt="">
        <progress id="avancement-0" value="100" max="100"></progress>
        <!-- <input type="button" onclick="modif(-10);" value="-">
        <input type="button" onclick="modif(10);" value="+"> -->
        </div>
      <div class="barreDroite">
        <img class="col-md-4 offset-4 col-lg-4 life-droite" src="Images/lifeBar2.png" alt="">
        <progress id="avancement-1" value="100" max="100"></progress>
        <!-- <input type="button" onclick="modification(-10);" value="-">
        <input type="button" onclick="modification(10);" value="+"> -->
      </div>
  </div>
    
    <div class="offset-4 col-md-4">
      <div id="ono">
      <img class="onomatopee" src="Images/paf.png" alt="" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-5 col-lg-5">
        <div id="Zanghief">
        <img class="img-fluid joueur-gauche" src="${player1.images.md}" style="max-height: 450px" alt="" />
        </div>
      </div>
      <div class="col-md-5 offset-md-2 col-lg-5">
        <div id="Guy">
        <img class="img-fluid joueur-droite" src="${player2.images.md}" style="max-height: 450px;" alt="" />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-5 col-lg-5 boutons-gauche">
        <button id="player-attack-0" class="btn btn-lg btn-danger" _style="position: absolute;bottom:0;left:100px">Attack</button>
        <button id="player-fury-0" class="btn btn-lg btn-info" _style="position: absolute;bottom:0;left:20px" disabled>Fury</button>
        <button id="player-potion-0" class="btn btn-lg btn-success" _style="position: absolute;bottom:0;left:200px">Potion</button>
        <button id="player-defense-0" class="btn btn-lg btn-primary" _style="position: absolute;bottom:0;left:300px">Defense</button>
      </div>
      <div class="col-md-5 offset-md-2 col-lg-5 boutons-droite">
        <button id="player-attack-1" class="btn btn-lg btn-danger" _style="position: absolute;bottom:0;right:180px">Attack</button>
        <button id="player-fury-1" class="btn btn-lg btn-info" _style="position: absolute;bottom:0;right:100px" disabled>Fury</button>
        <button id="player-potion-1" class="btn btn-lg btn-success" _style="position: absolute;bottom:0;right:280px">Potion</button>
        <button id="player-defense-1" class="btn btn-lg btn-primary" _style="position: absolute;bottom:0;right:380px">Defense</button>
      </div>
    </div>
    
</div>`

function getRandom(){
    const array = []
    for (let i = 0 ; i < 20 ; i++ ){
        array.push(Math.floor(500*Math.random([i])))
    }
    return array
}
function myFunction(image, heroId) {
    const id = `expandedImg${playerIndex}`
    const expandImg = document.getElementById(id);
    const imgText = document.getElementById(`imgtext${playerIndex}`);
    const hero = heroes.find(objet => objet.id === heroId)
    choosenHeroes[playerIndex] = hero
    expandImg.src = image.src;
    imgText.innerHTML = image.alt;
    expandImg.parentElement.style.display = "block";
    
}

function showPageFight() {
  const player1 = choosenHeroes[0]
  const player2 = choosenHeroes[1]
  console.log(player1, player2)

  targetElement.innerHTML = pageFightHtml(player1, player2)

  p0attack = document.getElementById('player-attack-0');
  p1attack = document.getElementById('player-attack-1');

  p0attack.addEventListener('click', evt => {
    document.getElementById('Guy').classList.remove('animation-droite')
    document.getElementById('Zanghief').classList.add('animation-gauche')
    const damage = players[1].defenseEnabled ? -10 : -20
    updateLifePoints(1, damage)
    player0done()
  })

  p1attack.addEventListener('click', evt => {
    document.getElementById('Zanghief').classList.remove('animation-gauche')
    document.getElementById('Guy').classList.add('animation-droite')
    const damage = players[0].defenseEnabled ? -10 : -20
    updateLifePoints(0, damage)
    player1done()
  })

  p0fury = document.getElementById('player-fury-0');
  p1fury = document.getElementById('player-fury-1');

  p0fury.addEventListener('click', evt => {
    document.getElementById('Guy').classList.remove('animation-droite')
    document.getElementById('Zanghief').classList.add('animation-gauche')
    const damage = players[1].defenseEnabled ? -15 : -30
    updateLifePoints(1, damage)
    player0done()
  })

  p1fury.addEventListener('click', evt => {
    document.getElementById('Zanghief').classList.remove('animation-gauche')
    document.getElementById('Guy').classList.add('animation-droite')
    const damage = players[0].defenseEnabled ? -15 : -30
    updateLifePoints(0, damage)
    player1done()
  })

  p0potion = document.getElementById('player-potion-0');
  p1potion = document.getElementById('player-potion-1');

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

  p0defense = document.getElementById('player-defense-0');
  p1defense = document.getElementById('player-defense-1');

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
}

function validPlayer(button) {
  if(choosenHeroes[playerIndex] === undefined) {
    return
  }

  button.disabled = true
  playerIndex += 1
  if (playerIndex === 2) {
    showPageFight()
  }
}

function getRndPlayer() {
  return Math.floor(2 * Math.random())
}

function gameOver(loserIndex) {
  const winnerIndex = loserIndex == 1 ? 1 : 2;

  setTimeout(
    () => alert('Player ' + winnerIndex + ' wins!!!'),
    500
  )
  
}

function updateLifePoints(playerNum, val) {
  const progressBarId = `avancement-${playerNum}`
  const ava = document.getElementById(progressBarId);
  console.log('vie player', playerNum, ava.value, val)
  ava.value += val;
  if(ava.value > ava.max) {
    ava.value = ava.max;
  }
  if(ava.value <= 0) {
    ava.value = 0;
    gameOver(playerNum)
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



// C'est ce qui s'exécute en 1er et affiche la page de sélection
fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
.then(response => response.json())
.then(allHeroes => {
    const indices = getRandom()
    heroes = allHeroes.filter(
      (hero, i) => indices.includes(i)
    )
    console.log(heroes)
    let html = ''
    for(hero of heroes) {
        html += createHero(hero)
    }

    targetElement.innerHTML = charSelection(html)  
})
