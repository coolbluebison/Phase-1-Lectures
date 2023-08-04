// Functions
// Regular
// Anonomous


// Arrow


const arrowFunc = () => {
    console.log("Defined arrow function")
}

arrowFunc()

// Scope
// Global
// Function

const varGlobal = "Hello"

function testFunction(var1, var2) {
    const varGlobal = "Universe"
    console.log(var1*var2)
}

testFunction(3,5)


console.log(varGlobal)

// Block


//Array Iteration


const fruits = ["Apple", "Orange", "Banana"]

fruits.push("Cantaloupe")

const fruitTest = fruits.pop("")



// for(let x=0; x<fruits.length; x++) {
//     console.log(fruits[x])
// }



fruits.forEach((fruit) => {console.log(fruit)} )


