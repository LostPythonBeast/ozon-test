let progressBlock = document.querySelector(`.arc_container`)
let userValue = document.querySelector(`.value_number`)
let hidden = document.querySelector(`.hide`)
let animation = document.querySelector(`.animation`)
userValue.addEventListener(`input`, function(event) {
    let currentValue = event.target.value
    if (currentValue === "") {
        currentValue = 0
        setValue(progressBlock, Number(currentValue))
    }
    else {
        setValue(progressBlock, Number(currentValue))
    }
})
setValue(progressBlock, Number(userValue.value))
hidden.addEventListener(`change`, function(event) {
    let currentState = event.target.checked
    setHidden(progressBlock, currentState)
})
animation.addEventListener(`change`, function(event) {
    let currentState = event.target.checked
    setAnimation(progressBlock, currentState)
})

