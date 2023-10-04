const response = document.getElementById("computer-response")
const form = document.getElementById("name-form")
const enemies = ["lord voldemort", "darth vader", "dolores umbridge", "brittney spears"]

function lowercaseAll(str) {
    return str.toLowerCase()
}

form.addEventListener("submit", evt => {
    // Prevents default form behavior to send data
    evt.preventDefault()
    // Grabs input thru event object and wraps it around function to lowercase it all
    let input = lowercaseAll(evt.target[0].value)
    // enemies.includes(input)
    //     ? response.textContent = `Go away you horrible ${input}`
    //     : response.textContent = `Welcome, ${input}`

    // checking if input is inside enemies array
    if (enemies.includes(input)) {
        // Changing textContent and id attribute based on condition
        response.textContent = `Go away you horrible ${input}`
        // response.style.color = "red"
        response.id = "angry"
    } else {
        response.textContent = `Welcome, ${input}`
        // response.style.color = "green"
        response.id = "good"
    }
    // Reset the input field
    evt.target[0].value = ""
})