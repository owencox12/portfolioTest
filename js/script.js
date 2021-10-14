const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });


let burger = document.querySelector(".promo__header_burger")

burger.addEventListener("click", function(){
    document.querySelector(".promo__header_burger_list").classList.toggle("promo__header_burger_list_active")
    document.querySelector(".promo__header_burger").classList.toggle("promo__header_burger_active")
})

let goUp = document.querySelector(".footer__item_images_arrow")

goUp.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})


let links = document.querySelector(".promo__header_wrapper_menu_list")

links.addEventListener("click", function(e){
    let link = e.target
    if (link.dataset.id) {
        let target = document.querySelector(link.hash)
        let pos = target.offsetTop
        e.preventDefault();
        window.scrollTo({
            top: pos,
            behavior: "smooth"
        })
    }
})

window.addEventListener("scroll", function(){
    if (scrollY >= 200) {
        document.querySelector(".promo__header_wrapper").classList.add("promo__header_wrapper_active")
    } else {
        document.querySelector(".promo__header_wrapper").classList.remove("promo__header_wrapper_active")
    }
})