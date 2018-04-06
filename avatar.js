function Avatar(image, heroId) {
  const id = `imgPlayer1${playerIndex}`
  const imgPlayer1 = document.getElementById(id)
  const hero = heros.find(objet => objet.id === heroId)
  choosenHeroes[playerIndex] = hero
}