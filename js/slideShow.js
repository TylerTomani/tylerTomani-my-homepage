document.addEventListener('DOMContentLoaded', function () {
    const slideshowContainer = document.querySelector('main');
    const images = ['../images/airplanSpaceSun.jpg',
    '../images/CityCloud.jpg',
    '../images/DimLitMoutainSun.jpg',
    '../images/Automn_landscape.jpg',
    '../images/lakeSunset.jpg'
    ];
                let currentIndex = 0;
    slideshowContainer.style.opacity = 1
    slideshowContainer.style.backgroundImage = images[0]
    function updateBackground() {
        // currentIndex = Math.floor(Math.random()* images.length - 1)
        currentIndex = (currentIndex + 1) % images.length;
        // console.log(currentIndex)
        slideshowContainer.style.backgroundImage = 'url(' + images[currentIndex] + ')';
        slideshowContainer.style.backgroundImage = 'url(' + images[currentIndex] + ')';
        setTimeout(function () {
            slideshowContainer.style.opacity = 1;
        }, 3200);
    }

    setInterval(updateBackground, 3500); // Change image every 5 seconds
});
