function mover(obj) {
  const description = obj.getAttribute('data-description');
  const coachInfoContainer = document.querySelector('.coach-info-container');
  const coachInfo = document.createElement('div');
  coachInfo.classList.add('coach-info');
  coachInfo.innerHTML = description;

  coachInfoContainer.innerHTML = '';
  coachInfoContainer.appendChild(coachInfo);
  coachInfoContainer.classList.add('active');
}

function mout(obj) {
  const coachInfoContainer = document.querySelector('.coach-info-container');
  coachInfoContainer.innerHTML = '';
  coachInfoContainer.classList.remove('active');
}