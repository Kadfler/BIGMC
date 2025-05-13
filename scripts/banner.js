const imgLinks = [
    '../images/anban2.webp',
    '../images/anban3.webp',
    '../images/anban4.webp'
];
const delay = 7000;
let currentIndex = 0;
setInterval(function() {
    document.getElementById('image').src = imgLinks[currentIndex];
    currentIndex++;
    if(currentIndex >= imgLinks.length) {
        currentIndex = 0;
    }
}, delay);

