const navMenu = document.querySelector('.navmenu');

const offScreenMenu = document.querySelector('.off-screen-menu');

navMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

const submit=document.getElementById('submit');

submit.addEventListener('click',
    function(event) {
        event.preventDefault();
        alert('Your Response has been Duly received.');
    });