const logOutBtn = document.querySelector('.log__out__btn');

if (!localStorage.getItem('user')) {
  location.replace('signup.html');
}

logOutBtn.addEventListener('click', () => {
  localStorage.removeItem('user');
  location.replace('signup.html')
});

const gameCategoryEasy = () => {
  localStorage.setItem('gameCategory', 'easy');
};

const gameCategoryMedium = () => {
  localStorage.setItem('gameCategory', 'medium');
};

const gameCategoryHard = () => {
  localStorage.setItem('gameCategory', 'hard');
};
