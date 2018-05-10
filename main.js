const Hash = {
  get: () => {
    const hash = document.location.hash.substring(1) // hash without #
    if (hash) {
      return hash.match(/.*\/(.*)$/)[1] // Enlever la racine du hash ex. categorie/outillage => outillage
    }
    return undefined
  },
  getType: () => {
    const hash = document.location.hash.substring(1) // hash without #
    if (hash) {
      return hash.match(/^(.*)\//)[1] // Ne garde que la racine du hash ex. categorie/outillage => categorie
    }
    return undefined
  },
  onChange: () => filesImport
    .then(json => {
      Articles.display(json.body)
      Categories.display(Categories.get())
    })
}


const Tpl = {
  getElement: tplName =>
    document
      .querySelector(`template[name=${tplName}]`)
      .cloneNode(true)
      .content
      .querySelector('[data-tpl=element]')
}

const Files = {
  import: () => {
    const json = 'https://api.daktary.com/akakeronos/recette-gourmandignes/tree/master/atelier-2017-02-24'
    //const json = './fiches.json'
    return fetch(json)
      .then(response => response.json())
  },
  getHome: () => {
    const json = 'https://api.daktary.com/akakeronos/recette-gourmandignes/blob/master/atelier-2017-02-24/index.md'
    return fetch(json)
      .then(response => response.json())
  }
}
