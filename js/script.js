// Replace Text in Header using replaceme library
const relaceHeaderText = function () {
  const checkReplace = document.querySelector('.replace-me');
  if (!checkReplace) return;
  const replace = new ReplaceMe(checkReplace, {
    animation: 'animated fadeIn',
    speed: 2000,
    seperator: ',',
    loopCount: 'infinite',
    autoRun: true,
  });
};

// User Scroll For Navbar
function userScroll() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-dark');
      navbar.classList.add('border-bottom');
      navbar.classList.add('border-secondary');
      navbar.classList.add('navbar-sticky');
    } else {
      navbar.classList.remove('bg-dark');
      navbar.classList.remove('border-bottom');
      navbar.classList.remove('border-secondary');
      navbar.classList.remove('navbar-sticky');
    }
  });
}

// Closing the Navbar on small to medium screens (Hamburger Menu) after a link click if the menu is opened
const collapseMenu = function () {
  const navbarUl = document.querySelector('.navbar-nav');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navbarToggler = document.querySelector('.navbar-toggler');

  // Event Delegation
  navbarUl.addEventListener('click', (e) => {
    if (!e.target.classList.contains('nav-link')) return;
    // Link is clicked
    if (navbarToggler.getAttribute('aria-expanded') === 'true')
      new bootstrap.Collapse(navbarCollapse).hide(); // Collapsing the burger menu
  });
};

// Initializing Video Play Button Modal Opening/Closing
const initializeVideoModal = function () {
  const videoBtn = document.querySelector('.video-btn');
  const videoModal = document.querySelector('#videoModal');
  const video = document.querySelector('#video');
  let videoSrc;

  if (!videoBtn || !videoModal) return;

  videoBtn.addEventListener('click', () => {
    // Fetch the video URL from the data-bs-src attribute
    videoSrc = videoBtn.dataset.bsSrc;
  });

  videoModal.addEventListener('shown.bs.modal', () => {
    video.setAttribute('src', videoSrc);
  });

  videoModal.addEventListener('hide.bs.modal', () => {
    video.setAttribute('src', '');
  });
};

// Projects Modal Closing and Navigation
const modalNavigation = function () {
  const detailsModalBtns = document.querySelectorAll('.details--btn');
  detailsModalBtns.forEach((detailsBtn) => {
    detailsBtn.addEventListener('click', () => {
      const link = detailsBtn.getAttribute('href');
      console.log(link);
      if (link === '#') {
        // Scroll to the top of the page
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Optional: Smooth scrolling
        });
      } else {
        window.location.href = link;
      }
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initializeVideoModal();
  collapseMenu();
  relaceHeaderText();
  userScroll();
  modalNavigation();
});
