// let url = 'https://itunes.apple.com/search?term='
//  try {
//     showLoading()
//     return await fetch(item,input)
//     .then(response => response.json())
// } catch (error) {
//     return error
// }
// finally{
//     stopLoading()
// }
function promiseFunction() {
    return new Promise ((response,reject)=>{

    })
}
async function getUrl(input) {
    try {
        showLoading()
        return await fetch('https://itunes.apple.com/search?term='+input)
        .then(response => response.json())
    } catch (error) {
        return error
    }
    finally{
        stopLoading()
    }
}
btn.onclick =()=>{
container.innerHTML = ""
getUrl(input.value.toLowerCase())
.then((res)=>{
  for (const details of res.results) {
    //   console.log(details);
      container.innerHTML += `
      <article class = "artists"> 
      <h1 class = "h1">${details.artistName}</h1> 
      <img src="${details.artworkUrl100}">
      <p>${details.trackCensoredName}</p>
      <article>`
  }
})
.catch((rej)=>{runOnObject(rej);})
}

function runOnObject(itunes) {
    for (const item in itunes) {
       container.innerHTML =`${item}:${itunes[item]}`
    }
    return itunes
}
function showLoading() {
    container.innerHTML = `<img id="imageLoading" src="./play-fill-loader.gif">`
}
function stopLoading() {
    imageLoading.style.display = "none" 
}