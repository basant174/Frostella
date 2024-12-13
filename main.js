const navMenue=document.getElementById("nav_menu");
const navLink=document.querySelectorAll(".nav_link");
const humburger=document.getElementById("humburger");
const clossIcon=document.getElementById("clossIcon");
humburger.addEventListener("click", () =>{
    navMenue.classList.toggle("left-[0]")
})
clossIcon.addEventListener("click", () =>{
    navMenue.classList.toggle("left-[0]")
})
navLink.forEach(link =>{
    link.addEventListener("click", () =>{
        navMenue.classList.toggle("left-[0]")
    })
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autolay :{
        delay :3000,
        disableOnInteraction : false,
    },
    grabCursor :true,
    slidesPerView :1,
    spaceBetween:10,
    breakpoints:{
        640:{
            slidesPerView :2,
            spaceBetween:20,
        },
        768:{
            slidesPerView :3,
            spaceBetween:30,
        },
        1024:{
            slidesPerView :4,
            spaceBetween:40,
        },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const scrollUp = () => {
    const scrollUpBtn = document.getElementById('scroll_up');
    console.log("scrollY:", window.scrollY);  // تحقق من قيمة scrollY
    if (window.scrollY <= 250) {
        console.log("Changing position to bottom-4");
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    } else {
        console.log("Changing position to -bottom-1/2");
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
};

window.addEventListener('scroll', scrollUp);
