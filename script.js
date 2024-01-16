const cards = document.querySelectorAll(".game-box-inner");
const timeSpan = document.querySelector(".time");
const movesSpan = document.querySelector(".moves");
const startBtn = document.querySelector(".start-btn");
const popup = document.querySelector(".popup");
const popupMoveSpan = document.querySelector(".popup-moves");
const popupTimeSpan = document.querySelector(".popup-time");
const closePopupBtn = document.querySelector(".closeBtn");

let firstCard, secondCard;
let sec = 0;
let moves = 0;

function startGame() {
  cards.forEach((card) => {
    card.classList.remove("unclickeble");
    card.addEventListener("click", () => flipCard(card));
  });

  let timer = setInterval(() => {
    timeSpan.innerHTML = sec;
    sec++;
    if (countOfMatchingCard == cards.length / 2) {
      clearInterval(timer);
    }
  }, 400);
}

function flipCard(card) {
  movesSpan.innerHTML = moves;
  moves++;
  if (card !== firstCard) {
    card.classList.add("flip");
    cards.forEach((item) => {
      item.classList.add("unclickeble");
    });
    
    cards.forEach((item) => {
      setTimeout(() => {
        
        item.classList.remove("unclickeble");
      }, 400);
    });
    card.classList.add("unclickeble"); //eşleşen karta tekrar tıklanabiliyor
    if (!firstCard) {
      firstCard = card;
    }else{
      secondCard = card;

      let firstCardIcon = firstCard.querySelector("i");
      let secondCardIcon = secondCard.querySelector("i");
  
      checkForMatch(firstCardIcon, secondCardIcon);
    }
  }
}

function checkForMatch(firstCardIcon, secondCardIcon) {
  if (firstCardIcon.classList[1] === secondCardIcon.classList[1]) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    firstCard = "";
    secondCard = "";
    mathchingCard();
    return;
  }
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    firstCard.classList.remove("unclickeble"); //flip olan karta eklenen unclickeble classını kaldırmak için
    secondCard.classList.remove("unclickeble");
    firstCard = "";
    secondCard = "";
  }, 400);
}

function mathchingCard() {
  countOfMatchingCard++;
  if (countOfMatchingCard == cards.length / 2) {
    setTimeout(() => {
      openPopup();
    }, 400);
  }
}

function openPopup() {
  popup.classList.add("open-popup");
  popupMoveSpan.innerHTML = moves;
  popupTimeSpan.innerHTML = sec;
}

function closePopup() {
  popup.classList.remove("open-popup");
}

function restartGame() {
  closePopup();
  moves = 0;
  sec = 0;
  timeSpan.innerHTML = moves;
  movesSpan.innerHTML = sec;
  cards.forEach((card) => {
    card.classList.remove("flip");
    card.classList.add("unclickeble"); //oyun tekrar başladığında kartlara tıklanmaması için
  });
}
