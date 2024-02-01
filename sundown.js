// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function page5(){
    var page = document.querySelector(".home")
var fixed = document.querySelector("#fixed")

page.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})
page.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })

})
}

function swiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 40,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

var h1 = document.querySelector("#leftt h1")
var h2 = document.querySelector("#leftt h2")
var h3 = document.querySelector("#leftt h3")

h1.addEventListener("click",function(){
    h1.style.color = "white"
})
h2.addEventListener("click",function(){
    h2.style.color = "white"
})
h3.addEventListener("click",function(){
    h3.style.color = "white"
})

swiper()
page5()