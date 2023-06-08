document.addEventListener('DOMContentLoaded', function() {
  const coachIcons = document.querySelectorAll('.coach-icon');

  coachIcons.forEach(function(icon) {
    icon.addEventListener('mouseover', function() {
      const description = icon.getAttribute('data-description');
      const coachInfoContainer = document.querySelector('.coach-info-container');
      const coachInfo = document.createElement('div');
      coachInfo.classList.add('coach-info');
      coachInfo.innerHTML = description;

      coachInfoContainer.innerHTML = '';
      coachInfoContainer.appendChild(coachInfo);
      coachInfoContainer.classList.add('active');
    });

    icon.addEventListener('mouseout', function() {
      const coachInfoContainer = document.querySelector('.coach-info-container');
      coachInfoContainer.innerHTML = '';
      coachInfoContainer.classList.remove('active');
    });
  });
});
