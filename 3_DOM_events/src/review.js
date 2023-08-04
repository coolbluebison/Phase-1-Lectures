// Array manipulation


const array = [10, 20, 30, 5]
array.push(2)

// console.log(array)
array.pop()
// console.log(array)




function filter(data) {
    console.log(data)
}

const filteredArray = array.filter((num) => { 
    return num<15
})

console.log(filteredArray)



const filteredArray2 = array.filter( (num) => num<15 )
console.log(filteredArray2)




// Query Selectors

// const banner = document.querySelector("#banner")
// const banner2 = document.getElementById("banner")


// banner.textContent = "header"

// const header = document.querySelector("#header")




// Select subsets

const h1 = document.querySelector("#header h1")

console.log(h1)




// document.querySelector()







