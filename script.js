
// BURGER MENU 

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav'); 
    const navItems = document.querySelectorAll('.nav-item');
    const navFooter = document.querySelector('.nav-footer');

    burgerMenu.addEventListener('click', () => {
    nav.classList.toggle('active'); 
    burgerMenu.classList.toggle('open'); 
    burgerMenu.textContent = burgerMenu.classList.contains('open') ? '✖' : '☰'; // Unicode Fix

    if (navFooter) {
        navFooter.classList.toggle('active');
    }

    document.body.style.overflow = burgerMenu.classList.contains('open') ? 'hidden' : 'auto';
    });

    // Close the menu when clicking anywhere outside the nav
    document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burgerMenu.contains(e.target)) { 
        nav.classList.remove('active');
        burgerMenu.classList.remove('open');
        burgerMenu.textContent = '☰'; // Reset icon
        document.body.style.overflow = 'auto';
    }
    });

})

// HERO SECTION CHANGING PHOTOS
document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.hero-right .photo');
    let currentIndex = 0;
  
    setInterval(() => {
      photos[currentIndex].classList.remove('active'); 
      currentIndex = (currentIndex + 1) % photos.length;
      photos[currentIndex].classList.add('active'); 
    }, 5000); 
  });

  // scrolling animation
  const elements = document.querySelectorAll('h1, h2, .hero-button');

  const handleScroll = () => {
      elements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
              el.classList.add('show');
          } else {
              el.classList.remove('show');
          }
      });
  };
  
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('DOMContentLoaded', handleScroll);

  
  // TABS EFFECT
  document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.tab');
    const revealTabs = () => {
        tabs.forEach((tab, index) => {
            const tabTop = tab.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (tabTop < windowHeight - 100) {
                setTimeout(() => {
                    tab.classList.add('show');
                }, index * 200); // Sequential delay for each tab
            }
        });
    };
      
    window.addEventListener('scroll', revealTabs);
    revealTabs();

});

// NAVIGATION DROPDOWN MENU
const dropdownService = document.querySelector('.dropdown');
const dropdown = document.querySelector('.dropdown-menu');

if(window.innerWidth >= 1000){
// Show dropdown on mouseenter
    dropdownService.addEventListener('mouseenter', () => {
        dropdown.classList.add('show');
    });

    // Hide dropdown on mouseleave
    dropdownService.addEventListener('mouseleave', () => {
        dropdown.classList.remove('show');
    });   
}
      
const dropdownMobile = document.querySelector('.dropdown-mobile')
const dropdownMobileMenu = document.querySelector('.dropdown-menu-mobile')

dropdownMobile.addEventListener('click', () => {
    if (dropdownMobileMenu.classList.contains('show')) {
        dropdownMobileMenu.classList.remove('show');
        dropdownMobileMenu.classList.add('close');
    } else {
        dropdownMobileMenu.classList.remove('close');
        dropdownMobileMenu.classList.add('show');
    }
});

// TEXT ANIMATION

const text= document.querySelector('.text-animation');
        const phrase=text.textContent;
        let index=0;


        function showLetter(){

            if(index<=phrase.length){
               text.textContent=phrase.slice(0,index);
                index++;
                setTimeout(showLetter,180);
            }
            else {

                index=phrase.length;
                setTimeout(removeLetter,180);
            }
            }

        function removeLetter(){

            if(index>=0){

                text.textContent=phrase.slice(0,index);
                index--;
                setTimeout(removeLetter,100);
            }
            else {
                index=0;
                setTimeout(showLetter,100);            
            }
        }
        showLetter();

       
 
