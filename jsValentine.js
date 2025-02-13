button.addEventListener("mouseover", function() {
    const maxWidth = window.innerWidth - button.offsetWidth;
    const maxHeight = window.innerHeight - button.offsetHeight;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});
