document.querySelectorAll('.coach img').forEach(item => {
    item.addEventListener('click', event => {
        window.location.href = event.target.parentElement.querySelector('a').href;
    });
});
