const btnRating = document.querySelectorAll('.btn-rating');
const btnSubmit = document.querySelector('.btn-submit');
const scoreData = document.querySelector('.score-data');
const thankYouMessage = document.querySelector('.thank-you-message');
const rating = document.querySelector('.rating');

btnSubmit.addEventListener('click', () => {
  thankYouMessage.classList.remove("hidden")
  rating.style.display = 'none';
  
});


btnRating.forEach((btnRating) => {
  btnRating.addEventListener('click', () => {
    scoreData.innerHTML = btnRating.innerHTML
    console.log(btnRating.innerHTML)
  })
})

