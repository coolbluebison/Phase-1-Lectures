// Array manipulation

array = [ {a:1, b:2}, {a:3, b:2}, {a:5, b:2}
]


const filteredarray = array.filter( (obj) => { 
    if (obj.a === 3) {
        return true
    }
    
    return false
} )


console.log(filteredarray)


// Query Selectors

const header = document.querySelector("#header header div h1")
header.textContent = "TEXT TO PRESS"


header.addEventListener("mouseover", () => {console.log("Hello")})


const form = document.querySelector("#book-form")


form.addEventListener("submit", (e) => {

    e.preventDefault()
    console.log("IN submit")
    console.log(e.target.title.value)

})



















