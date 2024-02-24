const leftSvg = document.querySelector('#big_b');
const middlesvg=document.querySelector("#small_b");
const rightSvg = document.querySelector('#c_part');
const total=document.querySelector("#total");
const animation=document.getElementById("animation");

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 170 && scrollPosition < 350) {
    const containerWidth = window.innerWidth;
    const svgWidth = leftSvg.offsetWidth; // Assuming both SVGs have the same width

    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / maxScroll) * 100;

    // Calculate the new horizontal position based on scroll percentage
    const leftPosition = (containerWidth - svgWidth) / 2;
    leftSvg.style.transform = `translateX(${leftPosition - (scrollPercentage * 0.5)}px) translateY(-50%) rotate(25deg)`;
    rightSvg.style.transform = `translateX(-${leftPosition + (scrollPercentage * 0.5)}px) translateY(-50%) rotate(25deg)`;
   leftSvg.style.opacity="1";
   middlesvg.style.opacity="1";
    rightSvg.style.opacity="1";
    total.style.opacity="0";
    total.style.zIndex="-1";
    animation.style.zIndex="1";
    animation.style.height="657px";
  } 
  else if(scrollPosition > 350) {
    leftSvg.style.opacity="0";
    middlesvg.style.opacity="0";
    rightSvg.style.opacity="0";
    total.style.opacity="1";
    animation.style.zIndex="0";
    animation.style.height="0px";
  }
  else if (scrollPosition === 0) {
    leftSvg.style.transform = `translate(-0.0004%, -50%) translate3d(0px, 0px, 0px) rotate(25deg)`;
    rightSvg.style.transform = `translate(-50%, -50%) translate3d(0px, 0px, 0px) rotate(25deg)`;
    leftSvg.style.opacity="1";
    middlesvg.style.opacity="1";
    rightSvg.style.opacity="1";
    total.style.opacity="0";
    animation.style.height="657px";
  }
});

window.addEventListener('scroll', function () {
  // Get the current scroll position
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Get a reference to the div
  var total = document.getElementById('total');

  if (scrollPosition === 260) {
    // Set the height to 657px when scroll is at 0
    total.style.height = '490px';
    total.style.top = "50%";
    total.style.left="50%";

  } else if (scrollPosition >= 320) {
    // Set the height to 6rem when scroll is greater than 70
    total.style.height = '5rem';
   // total.style.transform = "scale(0.2, 0.2)";
   total.style.transform="translateX(-50%) translateY(-25%) rotate(25deg)";
    total.style.top = "-110px";
    total.style.rotate = "332deg";
    total.style.left="45%";
  }
  
});

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })
});

const cts_buttons = document.querySelector('.header_cta');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 300) {
    cts_buttons.style.opacity = 1;
  } else {
    cts_buttons.style.opacity = 0;
  }
});
const ham_buttons = document.querySelector('#hamburger');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 300) {
    ham_buttons.style.opacity = 1;
  } else {
    ham_buttons.style.opacity = 0;
  }
});
const home_abt_cont = document.querySelector('#home_abt_cont');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 350) {
    home_abt_cont.style.opacity = 1;
  } else {
    home_abt_cont.style.opacity = 0;
  }
});
const section_hero = document.querySelector('.hero-carousel');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 320) {
    section_hero.style.opacity = 1;
  } else {
    section_hero.style.opacity = 0;
  }
});
const menu_btn = document.querySelector("#hamburger");
const menu = document.getElementById("menu");
menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});

//service section start
const backgroundImages = [
  "./images/1.webp",
  "./images/2.webp",
  "./images/3.webp",
  // Add more image URLs here
];

const backgroundImageElement = document.querySelector('.home_src_cont');
let currentIndex = 0;

function changeBackgroundImage() {
  currentIndex = (currentIndex + 1) % backgroundImages.length;
  const imageUrl = backgroundImages[currentIndex];
  backgroundImageElement.style.backgroundImage = `url(${imageUrl})`;
}

// Change the background image every 7 seconds (7000 milliseconds)
setInterval(changeBackgroundImage, 7000);

// Initial background image
changeBackgroundImage();

//service section end

//carousel reveal
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelector(".reveal");
  var windowheight = window.innerHeight;
  var revealtop = reveals.getBoundingClientRect().top;
  var revealpoint = 80;
  if (revealtop < windowheight - revealpoint) {
    reveals.classList.add("active");
  }
  else {
    reveals.classList.remove("active");
  }
}
//carousel reveal

// pre loader start
function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut() {
  setInterval(loader, 2000);
}
window.onload = fadeOut;
// pre loader end

//form part 
const CntctLabels = document.querySelectorAll(".multi_radio_cont .cntct_label");
const check_mark = document.querySelectorAll(".check_mark i");
CntctLabels && 
  CntctLabels.forEach((t) => {
    t.addEventListener("click", (e) => {
      t.classList.toggle("active_label");
    });
  });