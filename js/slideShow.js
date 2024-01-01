document.addEventListener('DOMContentLoaded', function () {
    const slideshowContainer = document.querySelector('main');
    const images = ['../images/airplanSpaceSun.jpg',
    '../images/CityCloud.jpg',
    '../images/Automn_landscape.jpg',
    '../images/DimLitMoutainSun.jpg',
    // '../images/CoundyMountainPeak.heic',
    '../images/lakeSunset.jpg'
    // '../images/DangBeautyMountains.heic'
    ];
                let currentIndex = 0;
    slideshowContainer.style.opacity = 1
    slideshowContainer.style.backgroundImage = images[0]
    function updateBackground() {
        // currentIndex = Math.floor(Math.random()* images.length - 1)
        currentIndex = (currentIndex + 1);
        if(currentIndex >= images.length - 1){
            currentIndex = 0
        }
        // console.log(currentIndex)
        slideshowContainer.style.backgroundImage = 'url(' + images[currentIndex] + ')';
        slideshowContainer.style.backgroundImage = 'url(' + images[currentIndex] + ')';
        // setTimeout(function () {
        //     slideshowContainer.style.opacity = 0;
        //     console.log(currentIndex)
        // }, 2400);
    }

    setInterval(updateBackground, 2800); // Change image every 5 seconds
});
