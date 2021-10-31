//! exe 1
async function asyncFunction() {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
    } catch (error) {
        return error
    }
}
// asyncFunction()
// .then((response)=>{console.log(response);})
// .catch((reject)=>{console.log(reject);})
//! exe 2
async function asyncPosts() {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
    } catch (error) {
        return error
    }
}
// asyncPosts()
// .then((response)=>{console.log(response);})
// .catch((reject)=>{console.log(reject);})
//! exe 3
async function asyncComments() {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
    } catch (error) {
        return error
    }
}
// asyncComments()
// .then((response)=>{console.log(response);})
// .catch((reject)=>{console.log(reject);})
//! exe 4
async function asyncPost() {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/posts/5')
            .then(response => response.json())
    } catch (error) {
        return error
    }
}
// asyncPost()
// .then((response)=>{console.log(response);})
// .catch((reject)=>{console.log(reject);})
//! exe 5
async function asyncAlbums() {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
    } catch (error) {
        return error
    }
}
// asyncAlbums()
// .then((response)=>{console.log(response);})
// .catch((reject)=>{console.log(reject);})
////////////////////////////////////////////////////////
function runOnObject(object) {
    for (const key in object) {
        container.innerHTML += `${key}:${object[key]} <br>`
    }
}
///////////////////////////////////////////////////////
function runOnArray(array) {
    for (const iterator of array) {
        for (const key in iterator) {
            container.innerHTML += `${key}:${iterator[key]}<br>`
        }
    }
}

////////////////////////////////////////////////////////
//! exe 6 
async function asyncAlbum() {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/albums/2')
            .then(response => response.json())
    } catch (error) {
        return error
    }
}
// asyncAlbum()
// .then((response)=>{runOnObject(response);})
// .catch((reject)=>{runOnObject(reject)})

//! exe 7
async function asynsUsers() {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
    } catch (error) {
        return error
    }
}
// asynsUsers()
// .then((response)=>{runOnArray(response)})
// .catch((reject)=>{runOnArray(reject)})
function name11(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].length == " ") {
            return false
        } else {
            for (const key in array[i]) {
                container.innerHTML += `${key}:${iterator[key]} `
            }
        }
    }
}
//! exe 8 - 9
function getData(api, userId) {
    return new Promise((resolve, reject) => {
        fetch(`${api}/${userId}`)
            .then(response => response.json())
            .then(res => res.id ? resolve(res) : reject({ massage: "empty array" }))
    })
}
async function asyncUser() {
    try {
        return await getData('https://jsonplaceholder.typicode.com/users', 22)
        // .then(response => response.json())
    } catch (error) {
        return error
    }
}
// asyncUser()
// .then((response)=>{runOnObject(response)})
// .catch((reject)=>{runOnObject(reject)})
//! exe 10

const OPTION = {
    method: "POST"
}
async function addToTodos() {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/todos', OPTION)
            .then(response => response.json())
    } catch (error) {
        return error
    }
}
// addPost()
// .then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})

//! exe 11

const OPTION2 = {
    method: "POST"
}
async function addToPost() {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/posts', OPTION2)
            .then(response => response.json())
    } catch (error) {
        return error
    }
}
// addToPost()
// .then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})

//! exe 12

const OPTION3 = {
    method: "POST"
}
async function addToAlbum() {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/albums', OPTION3)
            .then(response => response.json())
    } catch (error) {
        return error
    }
}
// addToAlbum()
// .then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})

//! exe 13

const OPTION4 = {
    method: "POST"
}
async function addToUser() {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/users', OPTION4)
            .then(response => response.json())
    } catch (error) {
        return error
    }
}
// addToUser()
// .then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})

//! exe 14

const OPTION5 = {
    method: "POST"
}
function addGnerit(a, b) {
    return fetch(`${a}`, b)

}
async function addAllAPI() {
    try {
        return await addGnerit('https://jsonplaceholder.typicode.com/albums', OPTION5)
            .then(response => response.json())
    } catch (error) {
        return error
    }
}
// addAllAPI()
// .then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})

//! exe 15
    function userApi(a, b) {
        return fetch(`https://jsonplaceholder.typicode.com/${a}`, b)
    }


btn.onclick = () => {
//////////////////////////////////////////////////////
    const userObject = {
        firstNmae: input_first.value,
        lastName: input_last.value,
        age: input_age.value,
    }
console.log(userObject);    
/////////////////////////////////////////////////////
    
    const OPTION6 = {
        method: "POST",
        body:JSON.stringify(userObject) 
    }
//////////////////////////////////////////////////////
    async function addUser() {
        try {
            return await userApi(select.value, OPTION6)
                .then(response => response.json())
        } catch (error) {
            return error
        }
    }
    addUser()
        .then((res) => { console.log(res); })
        .catch((rej) => { console.log(rej); })
//////////////////////////////////////////////////////
    switch (select.value) {
        case "comments":
            userApi("comments", OPTION6)
            return;
        case "users":
            userApi("users", OPTION6)
            return;
        case "albums":
            userApi("albums", OPTION6)
            return;
        case "photos":
            userApi("photos", OPTION6)
            return;
        case "todos":
            userApi("todos", OPTION6)
            return;
        case "posts":
            userApi("posts", OPTION6)
            return;
        default:
            return;
    }
//////////////////////////////////////////////////    
}






