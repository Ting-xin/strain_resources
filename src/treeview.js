class TreeView extends HTMLUListElement {
  constructor() {
    super()
    this.dirJSON = this.getAttribute('json')
    this.data = {}
    this.getJSON()
  }

  getJSON() {
    const request = new XMLHttpRequest()
    console.log(this.dirJSON)
    request.open('GET', this.dirJSON)
    request.responseType = 'json'
    request.send()
    request.onload = () => {
      this.data = request.response
      this.data['root'].forEach((data) => {
        const liParent = document.createElement(`li`)
        liParent.innerHTML = data.value
        this.appendChild(liParent)
        if (data.children !== undefined) {
          this.childs(liParent, data)
          this.hide()
        }
      })
    }
  }

  childs(liParent, data) {
    // Create a new unordered list for children
    const childList = document.createElement(`ul`)
    data.children.forEach((child) => {
      const liChild = document.createElement(`li`)
      liChild.innerHTML = child.value
      childList.appendChild(liChild)
      if (child.children !== undefined) {
        this.childs(liChild, child)
      } else {
        // Add click event listener to the leaf node
        liChild.addEventListener('click', () => {
          // Generate a dialog for the leaf node
          const data = document.querySelector('#data')
          const h3 = data.querySelector('h3')
          h3.innerHTML = child.value
          const p = data.querySelector('p')
          p.innerHTML = child.content
          const img = data.querySelector('img')
          img.src = this.dirJSON.replace('json', 'png')
          const textname = document.querySelector('#text-name')
          if (this.dirJSON.includes('3')) {
            console.log('test')
            textname.innerHTML = '菌属特征及功能'
          } else {
            textname.innerHTML = '16S序列'
          }
          liteModal.open('#data')
        })
      }
    })
    liParent.appendChild(childList)
  }

  // Hide childs function
  hide() {
    var ulChildren = Array.from(this.querySelectorAll(`ul`))
    var liChildren = Array.from(this.querySelectorAll(`li`))
    ulChildren.forEach((ul) => {
      ul.style.display = `none`
    })
    liChildren.forEach((li) => {
      var childrenText = li.childNodes[0]
      if (li.querySelector(`ul`) != null) {
        const span = document.createElement(`span`)
        span.textContent = childrenText.textContent
        span.style.cursor = `pointer`
        childrenText.parentNode.insertBefore(span, childrenText)
        childrenText.parentNode.removeChild(childrenText)
        span.onclick = (event) => {
          var next = event.target.nextElementSibling
          if (next.style.display == ``) {
            next.style.display = `none`
          } else {
            next.style.display = ``
          }
        }
      }
    })
  }
}

customElements.define('tree-view', TreeView, { extends: 'ul' })
