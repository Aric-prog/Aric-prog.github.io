const checkbox = document.querySelector('#checkbox')
const html = document.querySelector('html')

function toggleDark(){
    checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark')
}

checkbox.addEventListener('click', toggleDark);

if(checkbox.checked){
    html.classList.add('dark')
}

const burger = document.querySelector('#burger')
const responsiveNavbar = document.querySelector('#navbar')
const responsiveDivider = document.querySelector('#topDivider')
function toggleTop(){
    if(responsiveNavbar.classList.contains('active')){
        responsiveNavbar.classList.remove('active')
        responsiveDivider.classList.remove('active')
    } else{
        responsiveNavbar.classList.add('active')
        responsiveDivider.classList.add('active')
    }
}
burger.addEventListener('click', toggleTop)