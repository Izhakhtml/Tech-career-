let url = "https://api.tvmaze.com/search/people?q="
let idUrl = " https://api.tvmaze.com/shows"
async function asyncFunction(basicApi,show) {
    try {
        showLoading()
        return await fetch(basicApi+show)
        // return await fetch(`${basicApi}/${show}`)
        .then(response => response.json())
    } catch (error) {
        return error
    }
    finally{
        hideLoading()
    }
}
btn.onclick = ()=>{
 container.innerHTML = ""
//  asyncFunction(idUrl,input.value)
//  asyncFunction(url,input.value)
 asyncFunction(url,input.value)
.then((res)=>{displayOnPage(res)})
.catch((rej)=>{runObject(rej);})
}
function runObject(param) {
    for (const key in param) {
   container.innerHTML+=`${key}${object[key]}`
    }
}
function runOnObject(object) { 
    console.log(object);
    container.innerHTML+=`
    <article id="getById">
    <h1>${object.name}</h1>
    <img src= "${object.image.medium}">
    <b><p>${object.summary}</p><b>
    </article>
    `
}
function displayOnPage(array) {
    for (const iterator of array) {
        console.log(iterator);
        if (iterator.person.image == null) {
            container.innerHTML += `
            <article class = "containPersons2">
            <h1>${iterator.person.name}</h1> 
            <a href="${iterator.person.url}"target="_blank"><img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt=""></a>
            </article>
          `
       }else{
           container.innerHTML += `
           <article class = "containPersons">
           <h1>${iterator.person.name}</h1> 
           <img class ="img" src="${iterator.person.image.medium}">
           <a href="${iterator.person.url}"target="_blank"><p>Moves to artist page</p></a>
           </article>
         `
    }
    }
}
function showLoading() {
    container.innerHTML += `<img id="imageLoading" src="./loading-icegif.gif">`
}
function hideLoading() {
    imageLoading.style.display = "none"
}

// function runHere(a,b) {
//   return new Promise((resolve,reject)=>{
//       fetch(a+b)
//       .then(response => response.json())
//       .then(res.id?resolve(res):reject({message:"the array empty"}))
//   })
// }