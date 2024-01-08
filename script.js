const gameBoxes = document.querySelectorAll(".game-box-inner");

gameBoxes.forEach(box => box.addEventListener("click",() => {
    box.classList.toggle("is-flipped")
}))