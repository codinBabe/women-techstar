const images = [
    './images/pexels-artūras-kokorevas-15520852.jpg',
    './images/pexels-kássia-melo-13085822.jpg',
    './images/pexels-rajaa-lemnari-19781318.jpg',
    './images/pexels-ramses-martinez-13250363.jpg',
    './images/pexels-tatiana-11480103.jpg',
    './images/pexels-valeriya-kobzar-17322370.jpg',
    './images/pexels-joan-costa-17034835.jpg',
    './images/pexels-designecologist-1970139.jpg'
]

let currentImageIndex = 0;
let totalImage = images.length;

function goBack() {
    if (currentImageIndex === 0) {
        currentImageIndex = totalImage - 1;
    } else {
        currentImageIndex -= 1
    }
}
function goForward() {
    if (currentImageIndex === totalImage - 1) {
        currentImageIndex = 0
    } else {
        currentImageIndex += 1
    }
}