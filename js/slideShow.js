document.addEventListener('DOMContentLoaded', function () {
    const slideshowContainer = document.querySelector('main');
    const images = ['../images/airplanSpaceSun.jpg',
    '../images/DimLitMoutainSun.jpg',
    '../images/fallPath.HEIC.heic',
    '../images/BeachSet.jpg'
    // '../images/lakeSunset.jpg',
    // '../images/CityCloud.jpg',
    // '../images/CoundyMountainPeak.heic',
    // '../images/DangBeautyMountains.heic'
    ];
    let currentIndex = 0;
    slideshowContainer.style.opacity = 1
    slideshowContainer.style.backgroundImage = images[0]
    function updateBackground() {
        // currentIndex = Math.floor(Math.random()* images.length - 1)
        currentIndex = (currentIndex + 1) % images.length;
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
