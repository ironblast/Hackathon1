const targetElement = document.getElementById('main')

const createHero = hero => `
<h2>${hero.name}</h2>
<img alt="${hero.name}'s photo" src="${hero.images.sm}" />
<p><strong>Occupation:</strong> ${hero.work.occupation}</p>`


function getRandom(){
    const array = []
    for (let i = 0 ; i < 20 ; i++ ){
        array.push(Math.floor(500*Math.random([i])))
    }
    return array
}

// console.log(getRandom())


fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
.then(response => response.json())
.then(allHeroes => {
    const indices = getRandom()
    const heroes = allHeroes.filter(
      (hero, i) => indices.includes(i)
    )
    console.log(heroes)


    // let html = getRandom()
    //     html += createHero(heroes[i])
    let html = ''
    for(hero of heroes) {
        html += createHero(hero)
    }

    targetElement.innerHTML = html  
// }
    
  // C'EST LA QUE SE PASSENT LES CHOSES INTERESSANTES !
  // Le paramètre hero contient l'objet reçu, décodé à partir du JSON.

  // On va construire du HTML à partir de ces données
  // Par exemple, hero a des propriétés :
  //   - name qui contient le nom du super héros
  //   - work qui contient à son tour deux propriétés base et occupation
  //   - images qui contient à son tour quatre propriétés lg, md, sm, xs
  //     (des URLs vers des images)
})

//générer suite random => checkpoint
  //  includes pour éviter répétition
