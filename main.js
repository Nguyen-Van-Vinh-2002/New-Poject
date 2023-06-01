// Chỏ đến id #adress-from
const adressbnt = document.querySelector('#adress-from')
const adressclose =  document.querySelector('#adress-close')



// Thêm một even 
adressbnt.addEventListener("click", function() {
    document.querySelector('.adress-from').style.display = "flex"

})
adressclose.addEventListener("click", function() {
    document.querySelector('.adress-from').style.display = "none"
})

// slider
const rightbtn = document.querySelector('.fa-chevron-right')
const lefttbtn = document.querySelector('.fa-chevron-left')
const imgNumber = document.querySelectorAll('.slider-content-lef-top img')
const imgNumberli = document.querySelectorAll('.slider-content-lef-bottom li')

let index = 0

rightbtn.addEventListener("click", function() {
    index = index+1
    if(index>imgNumber.length-1) {
        index = 0
    }
    document.querySelector(".slider-content-lef-top").style.right = index * 100+"%"
})

lefttbtn.addEventListener("click", function() {
    index = index-1
    if(index <= 0 ) {
        index = imgNumber.length-1
    }
    document.querySelector(".slider-content-lef-top").style.right = index * 100+"%"
})

imgNumberli.forEach(function(image,index) {
    image.addEventListener("click",function(){
        removeactive ()
        document.querySelector(".slider-content-lef-top").style.right = index * 100+"%"
        image.classList.add("active")
    })
})
function removeactive () {
    let imageactive = document.querySelector('.active')
    imageactive.classList.remove("active")
}

function imgAuto () {
    index = index + 1
    if (index>imgNumber.length-1) {
        index = 0
    } 
    removeactive()
    document.querySelector(".slider-content-lef-top").style.right = index * 100+"%"    
    imgNumberli[index].classList.add("active")
}
setInterval(imgAuto,3000)
// ----------SLIDER-PRODUCT
const rightbtntow = document.querySelector('.fa-chevron-right-tow')
const lefttbtntow = document.querySelector('.fa-chevron-left-tow')
const imgNumbertow = document.querySelectorAll('.slider-product-one-conten-items')
rightbtntow.addEventListener("click", function() {
    index = index+1
    if(index>imgNumbertow.length-1) {
        index = 0
    }
    document.querySelector(".slider-product-one-conten-items-content").style.right = index * 100+"%"
})

lefttbtntow.addEventListener("click", function() {
    index = index-1
    if(index <= 0 ) {
        index = imgNumbertow.length-1
    }
    document.querySelector(".slider-product-one-conten-items-content").style.right = index * 100+"%"
})