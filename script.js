function imgSlider(anything, color){
    document.querySelector('.starbucks').src = 'images/'+anything

    document.querySelector('.circle').style.backgroundColor = color
}

function mudar_tema(background, color, display_dark, display_light, imagem="", filter=1){
    document.querySelector('section').style.backgroundColor = background

    const nav = document.querySelectorAll('header ul li a')
    for(const element of nav){
        element.style.color = color
    }

    document.querySelector('.textBox').style.color = color
    document.querySelector('#facebook').src = `images/facebook${imagem}.svg`
    document.querySelector('#twitter').src = `images/twitter${imagem}.svg`
    document.querySelector('#instagram').src = `images/instagram${imagem}.svg`

    document.querySelector('.navigation').style.background = background
    document.querySelector('.toggle').style.filter = "invert("+filter+")"

    document.querySelector('img.dark').style.display = display_dark
    document.querySelector('img.light').style.display = display_light
}

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle')
    var navbar = document.querySelector('.navbar')
    var navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navbar.classList.toggle('active')
    navigation.classList.toggle('active')
}