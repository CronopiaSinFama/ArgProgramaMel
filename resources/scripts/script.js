
function smoothScroll(idElement) {
    document.querySelector('#' + idElement).scrollIntoView({
      behavior: 'smooth'
    });
  }