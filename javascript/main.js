
const cakeLinks = document.querySelectorAll('.content a');

cakeLinks.forEach(link => {
    const image = link.querySelector('img');
    const label = link.querySelector('p');

    console.log('Link target:', link.href);
    console.log('Image source:', image.src);
    console.log('Label text:', label.textContent);
});

const cakeImages = document.querySelectorAll('.content img');

cakeImages.forEach(image => {
    image.addEventListener('click', () => {
        alert(' Please Order Now ');
    });
});





