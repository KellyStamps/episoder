document.addEventListener('DOMContentLoaded', function() {

  let mainDiv = document.getElementById('main');


  fetch('http://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes').then(response=>response.json()).then(data => {
    let genreList = ""

    data.genres.forEach (function(item, i){
      if(i === data.genres.length-1) {
        genreList += item
      } else {
        genreList += item + "  |  "
      }
    })

    let showDiv = document.createElement('div')
    showDiv.innerHTML = `<button>Add to Faves</button><h3>${data.name}</h3><img src="${data.image.medium}"><p>${genreList}</p><p>${data.summary}</p>`
    showDiv.id = `show-div-${data.id}`
    showDiv.className = `show-div`
    showDiv.addEventListener("click", addFavorite)
    mainDiv.appendChild(showDiv)

    data._embedded.episodes.forEach (ep => {
      let episodeDiv = document.createElement('div')

      episodeDiv.innerHTML = `<h4>${ep.name}</h4><img src="${ep.image.medium}"<p>${ep.summary}</p>`
      episodeDiv.className = `episode-div`

      mainDiv.append(episodeDiv)
    })
  })

  function addFavorite(event) {
    if (event.target.localName === 'button') {
      let saveShowData = {
        show: event.target.parentElement.children[1].innerText,
        api_id: event.target.parentElement.id.slice(9)
      }

      fetch(`http://localhost:3000/favorites`, {
        method: 'post',
        body: JSON.stringify(saveShowData),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application'
        }
      }).then(res=>res.json()).then(data => console.log(data))
    }
  }





}) //end of document
