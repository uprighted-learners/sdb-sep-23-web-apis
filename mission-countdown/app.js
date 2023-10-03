const startTimeout = document.getElementById("start-timeout")
const timeoutDisplay = document.getElementById("timeout-display")
const startInterval = document.getElementById("start-interval")
const intervalDisplay = document.getElementById("interval-display")
const repeatGo = document.getElementsByClassName("repeat-go")
console.log(repeatGo)

startTimeout.addEventListener("click", evt => {
    timeoutDisplay.textContent = "Getting ready"
    timeoutDisplay.style.color = "red"
    setTimeout(() => {
        timeoutDisplay.textContent = "READY"
        timeoutDisplay.style.color = "green"
    }, 5000);
})

let isRunning = false
startInterval.addEventListener("click", evt => {
    let count = 5
    if (!isRunning) {
        const intTimer = setInterval(() => {
            isRunning = true
            intervalDisplay.textContent = count
            count -= 1
            if (count < 0) {
                intervalDisplay.textContent = "GO"
                clearInterval(intTimer)
                if (count === -1) {
                    // const repeatGoArray = Array(...repeatGo) // ? redundant
                    let index = 0
                    const intTimer = setInterval(() => {
                        repeatGo[index].textContent = "GO"
                        index += 1
                        if (!repeatGo[index]) clearInterval(intTimer)
                    }, 1000);
                }
            }
        }, 1000);
    }
    isRunning = false
})