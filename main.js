let button = document.querySelector('.enter-button');
button.onclick = function() {document.querySelector('.title-text').classList.add('active');
button.classList.add('button-active');
document.querySelector('.main-text').classList.add('text-active');
document.querySelector('.navbar').classList.add('nav-active')};
