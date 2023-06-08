window.addEventListener('scroll', function() {
    var footer = document.querySelector('.footer');
    var footerHeight = footer.offsetHeight;
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY || window.pageYOffset;
  
    var bottomOfPage = scrollY + windowHeight >= document.body.scrollHeight;
  
    if (bottomOfPage) {
      footer.classList.add('show');
    } else {
      footer.classList.remove('show');
    }
  });
