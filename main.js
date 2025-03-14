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
    loop: true,
    autoplay :{
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

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const scrollUp = () => {
    const scrollUpBtn = document.getElementById('scroll_up');
    const footer = document.querySelector('footer');  
    const footerPosition = footer ? footer.offsetTop : document.body.scrollHeight;

    console.log("footerPosition:", footerPosition);
    console.log("window.scrollY:", window.scrollY);


    if (window.scrollY + window.innerHeight >= footerPosition) {
        console.log("Changing position to bottom-4");
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    } else {
        console.log("Changing position to -bottom-1/2");
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
  };

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  document.getElementById('scroll_up').addEventListener('click', scrollToTop);
  window.addEventListener('scroll', scrollUp);