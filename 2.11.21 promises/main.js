// ! exe 1
function getByName(name) {
    return new Promise((resolve,reject)=>{
        name=="izhak"?resolve(name):reject("there are not match")
    })
}
async function asyncName() {
    try {
        return await getByName("izhak")
    } catch (error) {
        return error
    }
}
// asyncName()
// .then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})
// ! exe 2
function getNumber(num1,num2) {
    return new Promise((resolve,reject)=>{
        num1==num2?resolve("there is match"):reject("there is not match")
    })
}
async function asyncNumbers() {
    try {
        return await getNumber(3,4)
    } catch (error) {
        return error
    }
}
// asyncNumbers()
// .then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})
// ! exe 3
function getString(str) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        str.length>6?resolve(str):reject("too shorter")   
        }, 4000);
    })
}
async function asyncString() {
    try {
        showLoading()
        return await getString("o")
    } catch (error) {
        return error
    }

}
// asyncString()
// .then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})
// .finally(()=>{hideLoading()})
// ......................
function showLoading() {
    container.innerHTML = ` <img id="imageLoading" src="./loading-icegif.gif">` 
}
// ......................
function hideLoading() {
    imageLoading.style.display = "none"
}
// ! exe 4
class Dogs{
    name;
    age;
    breed;
    constructor(name,age,breed){
        this.name = name
        this.age = age 
        this.breed = breed
    }
}
const DOG1 = new Dogs("REX",144,"BOXER")
const DOG2 = new Dogs("REX2",530,"BOXER2")
const DOG3 = new Dogs("REX3",960,"BOXER3")
const DOG4 = new Dogs("REX4",9680,"BOXER4")

let dogsArray = [DOG1,DOG2,DOG3,DOG4]
function getOlderDog(array) {
let max = array[0]     
    //  console.log(max.age);
    return new Promise((resolve,reject)=>{
     
        // setTimeout(() => {
         for (const iterator of array) {
            
              if (max.age < iterator.age) {
                  max = iterator

                }   

        }   
                array.length>0?    
                resolve(max):
                reject({message:"the array empty"})
    //  }, 5000);      
    })   
}
async function asyncOlderDog() {
    try {
        showLoading()
        return await getOlderDog(dogsArray)
    } catch (error) {
        return error
    }
    finally{
        hideLoading()
    }
}
// asyncOlderDog()
// .then((res)=>{container.innerHTML = `${res.name} ${res.age} ${res.breed}`})
// .catch((rej)=>{container.innerHTML= rej})
// .then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})
// ! exe 5
// ! 1 \\
let map = new Map()
map.set("izhak",14)
map.set("shay",10)
map.set("cccc",8)
// console.log(map.get(map));
///////////////////
map.set("eliav",9)
// console.log(map.get("eliav"));
///////////////////
// console.log(map.keys());
///////////////////
// console.log(map.values());
///////////////////
function nameLength(params) {
    for (const iterator of params.keys()) {
        if (iterator.length > 4) {
            console.log(iterator);
        }
    }
}
// nameLength(map)
//////////////////
// ! 2 \\
let personMap = new Map()
personMap.set("8",12)
personMap.set("4",8)
personMap.set("5",69)
personMap.set("2",10)
// console.log(personMap);
// ! 3 \\
function MostSouls(map) {
    let max = 0

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        for (const iterator of map.values()) {
               if (max < iterator) {
                   max = iterator
                  }
        }
        resolve(max)
        reject({message:"There is not"})
        }, 4000);
    })
    
}
// MostPeople(personMap)
// .then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})
async function asyncFunction() {
    try {
    showLoading()    
    return await MostSouls(personMap)
    } catch (error) {
    return error
    }
    finally{
    hideLoading()
    }
}
// asyncFunction()
// .then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})
// .then((res)=>{container.innerHTML += `${res}`})
// .catch((rej)=>{container.innerHTML = rej})
// ! 5 \\
function presentOnPage(params) {
    for (const iterator of params.keys()) {
    tr.innerHTML  += `<th>${iterator}</th>`
    tr2.innerHTML += `<td> ${params.get(iterator)}</td>`
    }
   
}
presentOnPage(personMap)
