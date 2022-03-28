const images = document.querySelectorAll('.wrapper .image img')
const galleryOpen = document.querySelector('.gallery')
const galleryImg = document.querySelector('.gallery-inner img')

const closeBtn = document.querySelector('.gallery .close')
const prevBtn = document.querySelector('.gallery .left')
const nextBtn = document.querySelector('.gallery .right')

console.log(closeBtn)
console.log(galleryOpen)

let currentIndex = 0

images.forEach((img, index) =>{
    img.addEventListener('click', () =>{
        currentIndex = index
        console.log(currentIndex)
        showGallery()
    })
})

function showGallery(){
    currentIndex == 0 ? prevBtn.classList.add('hide') : prevBtn.classList.remove('hide')
    currentIndex == images.length - 1 ? nextBtn.classList.add('hide') : nextBtn.classList.remove('hide')

    galleryOpen.classList.add('show')
    galleryImg.src = images[currentIndex].src
    console.log(galleryImg)
}

function closeGallery()
{
    galleryOpen.classList.remove('show')
}

prevBtn.addEventListener('click', () => {
    currentIndex != 0 ? currentIndex-- : undefined
    showGallery()
})

nextBtn.addEventListener('click', ()=> {
    currentIndex != images.length - 1 ? currentIndex++ : undefined
    showGallery()
})

closeBtn.addEventListener('click', closeGallery)

document.addEventListener('keydown', (e) =>{
    if(e.keyCode == 27) closeGallery()   
})

