function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const words = ["Online Trainer", "Content writer", "Engineer"];
let currentWordIndex = 0;
let currentCharIndex = 0;
const textElement = document.getElementById('animated-text');

function typeWord() {
  const currentWord = words[currentWordIndex];
  textElement.textContent = currentWord.substring(0, currentCharIndex);

  if (currentCharIndex < currentWord.length) {
    currentCharIndex++;
    setTimeout(typeWord, 100);
  } else {
    setTimeout(eraseWord, 500);
  }
}

function eraseWord() {
  const currentWord = words[currentWordIndex];
  textElement.textContent = currentWord.substring(0, currentCharIndex);

  if (currentCharIndex > 0) {
    currentCharIndex--;
    setTimeout(eraseWord, 50);
  } else {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    setTimeout(typeWord, 500);
  }
}

typeWord();
