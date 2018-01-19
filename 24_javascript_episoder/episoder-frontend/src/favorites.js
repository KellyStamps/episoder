document.addEventListener("DOMContentLoaded", function() {

  let mainDiv = document.getElementById('main')
  renderFavorites()

  function renderFavorites() {
    fetch(`http://localhost:3000/favorites`).then(res=>res.json()).then(data => {
      data.forEach(function(show) {
        let newFavoriteDiv = document.createElement('div')
        newFavoriteDiv.innerHTML = `<h2>${show.show}</h2><button id='edit-button'>Edit Favorite</button><button id='delete-button'>Delete Favorite</button>`
        newFavoriteDiv.className = `favorite-div-id-${show.id}`
        // newFavoriteDiv.className =
        newFavoriteDiv.addEventListener("click", function(event){
          if (event.target.id === 'edit-button') {
            getEditFavorite(event)
          } else {
            deleteFavorite(event)
          }

        })
        mainDiv.appendChild(newFavoriteDiv)
      })
    })
  }

  function getEditFavorite(event) {
    let localId = event.target.parentElement.className.slice(16)
    mainDiv.innerHTML = ''

    fetch(`http://localhost:3000/favorites/${localId}`).then(res=>res.json()).then(data=>{
      let favoriteEditForm = document.createElement('form')
      favoriteEditForm.innerHTML = `<input type=text id='name' value="${data.show}"></input><br><br><input type='submit'</input>`
      favoriteEditForm.id = localId

      favoriteEditForm.addEventListener("submit", doEditFavorite)
      mainDiv.append(favoriteEditForm)
    })
  }

  function doEditFavorite(event) {
    let localId = event.target.id
    let editData = {
      show: event.target.name.value,
    }
    fetch(`http://localhost:3000/favorites/${localId}`, {
      method: 'PATCH',
      body: JSON.stringify(editData),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(res=>res.json()).then(data=>{
      renderFavorites()
    })
  }

  function deleteFavorite(event) {
    let localId = event.target.parentElement.className.slice(16)
    // debugger
    fetch(`http://localhost:3000/favorites/${localId}`, {
      method: 'delete'
    }).then(res=> {
      mainDiv.innerHTML = ''
      renderFavorites()
    })

  }


})
