// Code your solution here
// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

const findMatching = function(array, string){
    let name = array.filter(driver =>
        driver.toUpperCase() === string.toUpperCase()
    )

    return name
}



const fuzzyMatch = function(array, string){
    let fuzzy = array.filter(name =>
        name.charAt() === string.charAt()
        )

    return fuzzy
}




const matchName = function(array, string){
    let elements = array.filter(driver =>
        driver.name.toUpperCase() === string.toUpperCase()
        )
    
    return elements
}

