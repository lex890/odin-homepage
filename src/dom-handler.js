export function renderMyWork(work) {
  const article = document.createElement('article')
  article.classList.add('work')
  article.dataset.workid = work.id

  function addProjInfo() {
    const div = document.createElement('div')
    div.classList.add('project-info')
    
    function addProjName() {
      const projName = document.createElement('div')
      projName.classList.add('project-name')

      function addTitle() {
        const h3 = document.createElement('h3')
        h3.textContent = work.title
        h3.dataset.title = work.title
        return h3
      }
      function addLinks() {
        const div = document.createElement('div')
        div.classList.add('project-links')

        function createAnchor(link) {
          const anchor = document.createElement('a')
          anchor.href = link.url  
          
          function createImg(anchor) {
            const img = document.createElement('img')
            img.src = link.logo
            img.classList.add('links-logo')
            anchor.append(img)
          }
          createImg(anchor)
          
          div.append(anchor) 
        }

        work.links.forEach(link => {
          createAnchor(link)
        })

        return div
      }
      projName.append(addTitle())
      projName.append(addLinks())

      return projName
    }
    function addProjDesc() {
      const projDesc = document.createElement('p')
      projDesc.classList.add('project-desc')
      projDesc.textContent = work.description
      return projDesc
    }
    
    div.append(addProjName())
    div.append(addProjDesc())

    return div
  }
  function addProjImg() {

    function addImage() {
      const img = document.createElement('img')
      img.src = work.image.url
      img.alt = work.image.alt
      div.append(img)
    }
    const div = document.createElement('div')
    div.classList.add('project-img')
    addImage(div)

    return div
  }

  article.append(addProjImg())
  article.append(addProjInfo())
  
  return article
}