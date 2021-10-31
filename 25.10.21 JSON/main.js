let usersJason = JSON.stringify([
    {
        "_id": "90a605acace4ab389d8ed54c496",
        "age": 90,
        "name": {
            "last": "Hensley",
            "first": "zgals"
        },
        "email": "dollie.hensley@undefined.org",
        "index": 10,
        "phone": "+1 (904) 421-3160",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "9a605acace4ab389d8ed54c496",
        "age": 35,
        "name": {
            "last": "Hensley",
            "first": "Myrtle"
        },
        "email": "dollie.hensley@undefined.org",
        "index": 0,
        "phone": "+1 (904) 421-3160",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "20g605acaceed1f0e1cfa1eee67",
        "age": 21,
        "name": {
            "last": "Hunt",
            "first": "Dolores"
        },
        "email": "dolores.hunt@undefined.com",
        "index": 1,
        "phone": "+1 (967) 432-2905",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "1b605acacefedd0fe77874d78f",
        "age": 28,
        "name": {
            "last": "Pennington",
            "first": "Milagros"
        },
        "email": "milagros.pennington@undefined.net",
        "index": 2,
        "phone": "+1 (922) 492-2085",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "8c605acace6d3f84fc9b40849f",
        "age": 32,
        "name": {
            "last": "Hensley",
            "first": "Dollie"
        },
        "email": "myrtle.anderson@undefined.biz",
        "index": 3,
        "phone": "+1 (858) 404-3273",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "3y605acace06d24518b6419d23",
        "age": 29,
        "name": {
            "last": "York",
            "first": "Terry"
        },
        "email": "terry.york@undefined.co.uk",
        "index": 4,
        "phone": "+1 (816) 492-3475",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "1z605acace46f0669738455d6b",
        "age": 38,
        "name": {
            "last": "Hensley",
            "first": "Effie"
        },
        "email": "effie.bridges@undefined.info",
        "index": 5,
        "phone": "+1 (856) 423-3786",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "4t605acace5ab5217354268532",
        "age": 26,
        "name": {
            "last": "Walter",
            "first": "Krista"
        },
        "email": "krista.walter@undefined.me",
        "index": 6,
        "phone": "+1 (849) 513-2888",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "6d605acaced68677a5dca08a9b",
        "age": 20,
        "name": {
            "last": "Hensley",
            "first": "Gomez"
        },
        "email": "gomez.buchanan@undefined.biz",
        "index": 7,
        "phone": "+1 (888) 494-2462",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "4p605acaceb7ece55cb38e546a",
        "age": 20,
        "name": {
            "last": "Potter",
            "first": "Caitlin"
        },
        "email": "caitlin.potter@undefined.io",
        "index": 8,
        "phone": "+1 (801) 514-3055",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "3f605acace98de45687c4c6279",
        "age": 26,
        "name": {
            "last": "Hensley",
            "first": "Guzman"
        },
        "email": "guzman.dillon@undefined.ca",
        "index": 9,
        "phone": "+1 (857) 407-2403",
        "picture": "http://placehold.it/32x32"
    }
])

//! exe 1
function returnArray() {
    return new Promise((resolve, reject) => {
        let changeJs = JSON.parse(usersJason)
        changeJs.length > 0 ?
            resolve(changeJs) :
            reject({ massage: "The array empty" })
    })
}
async function getByLengthAsync() {
    try {
        return await returnArray()
    } catch (error) {
        return error
    }
}
// getByLength()
// .then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})

//! exe 2
function getById(id) {

    return new Promise((resolve, reject) => {
        let changeJs = JSON.parse(usersJason)
        for (const itemId of changeJs) {
            if (itemId._id == id) {
                resolve(itemId)
            }
        }
        reject({ massage: "The array empty" })
    })
}
async function getByIdAsync() {
    try {
        return await getById(_input.value)
    } catch (error) {
        return error
    }
}
// getByIdAsync()
// .then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})

//! exe 3
function getByEmail(email) {
    return new Promise((resolve, reject) => {
        let catchJs = JSON.parse(usersJason)
        for (const emailItem of catchJs) {
            if (emailItem.email == email) {
                resolve(emailItem)
            }
        }
        reject({ massage: "The object empty" })
    })
}
async function getByEmailAsync() {
    try {
        return await getByEmail(_input.value)
    } catch (error) {
        return error
    }
}
// getByEmailAsync()
// .then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})

//! exe 4

function getByAge(age) {
    let catchAge = [];
    return new Promise((resolve, reject) => {
        let returnJs = JSON.parse(usersJason)
        for (const ageItem of returnJs) {
            if (ageItem.age > age) {
                catchAge.push(ageItem)
                resolve(catchAge)
            }
        }
        reject({ massage: "The object empty" })
    })
}
async function getByAgeAsync() {
    try {
        return await getByAge(30)
    } catch (error) {
        return error
    }
}
// getByAgeAsync()
// .then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})

//! exe 5

function getByFirstName(name) {
    let nameArray = [];
    return new Promise((resolve, reject) => {
        let returnJs = JSON.parse(usersJason)
        for (const nameItem of returnJs) {
            if (nameItem.name.last == name) {
                nameArray.push(nameItem)
                resolve(nameItem.name)
                // resolve(nameArray)
            }
        }
        reject({ massage: "The array empty" })
    })
}
async function getByFirstNameAsync() {
    try {

        return await getByFirstName(_input.value)
    } catch (error) {
        return error
    }
}
// getByFirstNameAsync()
// .then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})

//! exe 6-7
function ShowOnPage(show) {
    for (const key in show) {
        container.innerHTML += `<h1>${key}</h1>${show[key]}<br>`
    }
}
function showGif() {
    container.innerHTML += `<img id="image" src="./loading-icon.gif">`
}
function ignoreGif() {
    image.style = "display: none;"
}
//  btn.onclick = ()=>{
//      showGif()
//      setTimeout(() => { 
//     switch (select.value) {
//          case "ID":
//          getByIdAsync()
//          .then((res)=>{ShowOnPage(res);})
//          .catch((rej)=>{ShowOnPage(rej)})
//          .finally(()=>{ignoreGif()})  
//              return;
//              case "EMAIL":
//              getByEmailAsync()
//             .then((res)=>{ShowOnPage(res);})
//             .catch((rej)=>{ShowOnPage(rej)})
//             .finally(()=>{ignoreGif()})  
//                   return;
//                   case "NAME":
//                   getByFirstNameAsync()
//                  .then((res)=>{ShowOnPage(res);})
//                  .catch((rej)=>{ShowOnPage(rej)})
//                  .finally(()=>{ignoreGif()})    
//                   return;
//          default:
//              return
//      }
//    }, 3000);
// }


//! exe 8
let changeJs = JSON.parse(usersJason)

function showAllObjects(array) {
    container.innerHTML = ""
    for (const indexItem of array) {
        container.innerHTML +=
            `<table >
       <tr>
           <th>AGE</th>
           <th>ID</th>
           <th>INDEX</th>
           <th>PICTURE</th>
           <th>EMAIL</th>
           <th>PHONE</th>
           <th>NAME</th>

       </tr>
       <tr>
           <td>${indexItem.age}</td>
           <td>${indexItem._id}</td>
           <td>${indexItem.index}</td>
           <td>${indexItem.picture}</td>
           <td>${indexItem.email}</td>
           <td>${indexItem.phone}</td>
           <td>${indexItem.name.first}</td>

       </tr>
       </table>`
    }
}

btnShow.onclick = () => {
    showAllObjects(changeJs)
}
sortBtn.onclick = () => {
    switch (select.value) {
        case "ID":
            name33("ID")
            return;
        case "AGE":
            name33("AGE")
            return;
        case "EMAIL":
            name33("EMAIL")
            return;
        case "INDEX":
            name33("INDEX")
            return;
        case "NAME":
            name33("NAME")
            return;
        default:
            console.log("sdfsfds");
            return;
    }
}

function name33(type) {
    container.innerHTML = ""
   
    switch (type) {
        case "AGE":
            changeJs.sort((a, b) => { return a.age - b.age })
            break;
        case "ID":
            changeJs.sort()
            break;
        case "EMAIL":
            changeJs.sort((a, b) => {
                if (a.email < b.email) return -1;
                return 0
            })
            break;
        case "INDEX":
            changeJs.sort((a, b) => { return a.index - b.index })

            break;
        case "NAME":
            changeJs.sort((a, b) => {
                if (a.name.first < b.name.first) return -1;
                return 0
            })
            break;
        default:
            break;
    }
 for (const indexItem of changeJs) {
        container.innerHTML +=
            `<table >
     <tr>
         <th>AGE</th>
         <th>ID</th>
         <th>INDEX</th>
         <th>PICTURE</th>
         <th>EMAIL</th>
         <th>PHONE</th>
         <th>NAME</th>

     </tr>
     <tr>
         <td>${indexItem.age}</td>
         <td>${indexItem._id}</td>
         <td>${indexItem.index}</td>
         <td>${indexItem.picture}</td>
         <td>${indexItem.email}</td>
         <td>${indexItem.phone}</td>
         <td>${indexItem.name.first}</td>

     </tr>
     </table>`

    }

}


