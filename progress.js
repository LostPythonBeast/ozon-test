function setValue(block, value) {
    if (value >= 0 && value <= 100) {
        let progress = block.querySelector(`.progress_arc`)
        progress.setAttribute("stroke-dasharray", value + " 100")
    }
    else {
        return
    }
}
function setHidden(block, isHidden) {
    if (isHidden) {
        block.style.visibility = `hidden`
    }
    else {
        block.style.visibility = 'visible'
    }
}
function setAnimation (block, isAnimated) {
    block.classList.toggle(`is_animated`, isAnimated)
}