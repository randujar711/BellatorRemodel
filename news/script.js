const overlay = document.querySelector("#overlay");
document.querySelector("#show-modal-btn").addEventListener("click", () =>{
  overlay.style.display="block";
})
document.querySelector("#close-modal-btn").addEventListener("click", () =>{
  overlay.style.display="none";
})

/* Swiper Java*/
const swiper = new Swiper('.swiper', {
  autoplay:{
    delay: 3000,
    disableOnInteraction:false,
  },
loop: true,
pagination: {
  el: '.swiper-pagination',
  clickable: true,
},
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
});
