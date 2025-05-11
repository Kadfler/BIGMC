const imgLinks = [
    '../images/anban2.jpg',
    '../images/anban3.jpg',
    '../images/anban4.jpg'
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

