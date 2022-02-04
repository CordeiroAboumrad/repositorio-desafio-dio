const button = document.getElementById("mode-selector")
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]
const darkModeClass = 'dark-mode'

button.addEventListener('click', buttonClick)
button.addEventListener('mouseOver', overMouse)
button.addEventListener('mouseOut', overMouse)

function overMouse() {
    button.classList.toggle("dark-mode")
}

function buttonClick() {
    changeClasses()
    changeText()
}

function changeClasses() {
    button.classList.toggle("dark-mode")
    h1.classList.toggle("dark-mode")
    body.classList.toggle("dark-mode")
    footer.classList.toggle("dark-mode")
    
    button.classList.remove("body")
    button.classList.add("body.dark-mode")
}

function changeText() {
    if(button.classList.contains(darkModeClass)) {
        button.innerHTML = 'Light Mode'
        h1.innerHTML = 'Light Mode OFF'
    } else {
        button.innerHTML = 'Dark Mode'
        h1.innerHTML = 'Light Mode ON'
    }

    return;
}