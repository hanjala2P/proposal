const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const music = document.getElementById('romantic-music');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

// When "Yes" is clicked
yesBtn.addEventListener('click', () => {
  question.innerHTML = 'I Love You Too! 💕';
  yesBtn.style.display = 'none';
  noBtn.style.display = 'none';

  // Play romantic music
  music.play();

  // Add heart animation
  const heart = document.createElement('div');
  heart.classList.add('heart-animation');
  wrapper.appendChild(heart);

  // Remove heart after 3 seconds
  setTimeout(() => {
    heart.remove();
  }, 3000);
});

// When "No" is hovered over
noBtn.addEventListener('mouseover', () => {
  const randomX = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width));
  const randomY = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height));

  noBtn.style.left = randomX + 'px';
  noBtn.style.top = randomY + 'px';
});
