// declaration//---------------->
var navMenu= document.querySelector(".nav_menu");
var navToggle= document.querySelector(".nav_toggle");
var navClose= document.querySelector(".nav_close");
var buttonIconfly= document.querySelector(".button_icon");
var DownloadBtnfly= document.querySelector(".download_icon");
//------------------------------------------------------------------------------------------------------------------------>
// For  SHOW----MENU------------>

if(navToggle){
  navToggle.addEventListener("click",function(){
     navMenu.classList.add("show-menu");
     
  })
}
//----------------------------------------------------------------------------------------------------------------->
//for HIDDEN----MENU--------------->
if(navClose){
  navClose.addEventListener("click",()=>{
    navMenu.classList.remove("show-menu");
  })
} 

//---------------------------------------------------------------->

// REMOVE MENU MOBILE--> jb menu ke koi bhi elemnt pr click kre to menu remove hoke navMenu.classList.remove("show-menu") wala part run hoye...
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((AllIcon) => AllIcon.addEventListener("click", linkAction));

// button icon flying

  buttonIconfly.addEventListener("mouseover",function(){
    buttonIconfly.classList.add("flyIcon");
    setTimeout(function(){
      buttonIconfly.classList.remove("flyIcon");
    
    },1000);
  })

  // DownloadBtnTransition
  DownloadBtnfly.addEventListener("mouseover", ()=>{

    DownloadBtnfly.classList.add("flyDownloadIcon");

    setTimeout(()=>{

      DownloadBtnfly.classList.remove("flyDownloadIcon");
    },1000);
  })

  //skills section icon ko 180deg move kiye----->
// Declaration karnege sbhi ka...

// const skillsContent= document.querySelectorAll(".skills_content");
// const skillsHeader= document.querySelectorAll(".skills_header");

// function ToggleSkills(){
//   let itemClass= this.parentNode.className

//   for(i=0; i < skillsContent.length; i++){
//     skillsContent[i].className = "skills_content skills_close"
//   }

//   if(itemClass==="skills_content Skills_close"){
//     this.parentNode.className = "skills_content skills_open"
//   }
// }
// skillsHeader.forEach((el)=>{
//   el.addEventListener("click",ToggleSkills);

// })

// QualificationIcon FLy

// const QuallyIcon=document.querySelector(".qualification_icon");

// QuallyIcon.addEventListener("mouseover",function(){
//   QuallyIcon.classList.add("qualificationIconRotate");
//   QuallyIcon.style.color="none"
//   setTimeout(function(){
//     QuallyIcon.classList.remove("qualificationIconRotate");
 
  
//   },2000);
// })


   var swiper = new Swiper(".portfolio_container", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });

//Scroll section


const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);


// HEADER SHADOW
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);


//Dark light theme

// DARK/LIGHT THEME
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// obtain the current theme
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate/Deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark icon/theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});