let modal = document.getElementById('personalities')
let chosenCards = document.querySelectorAll('.chosen-card')

document.querySelectorAll('#deck .card').forEach(card => {
  card.onclick = () => {
    modal.style.display = 'flex'
    let name = card.getAttribute('data-name')
    chosenCards.forEach(cardImage => {
      let target = cardImage.getAttribute('data-target')
      if (name == target){
        cardImage.classList.add('active')
      }
    })
  }
})

chosenCards.forEach(chosenCard => {
  chosenCard.querySelectorAll('.fa-times').forEach(closeBtn => {
    closeBtn.onclick = () => {
      chosenCard.classList.remove('active')
      modal.style.display = 'none'
    } 
  })
})

document.addEventListener('DOMContentLoaded', function () {
  chosenCards.forEach(function (card) {
    card.addEventListener('click', function () {
      // Toggle the 'flipped' class to the flip card inner element
      card.querySelector('.flip-card').classList.toggle('flipped');
    });
  });
})





