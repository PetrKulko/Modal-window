const btn = document.getElementById('btn');
const popup = document.getElementById('popup');
const close = document.getElementById('close');
const overlay = document.getElementById('overlay');

btn.addEventListener('click', () => {
    popup.classList.add('active');
});

const closeModal = () => {
    popup.classList.remove('active');
}

close.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);