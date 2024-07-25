document.getElementById('scrollLeft').addEventListener('click', function() {
    document.querySelector('.card-container').scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

document.getElementById('scrollRight').addEventListener('click', function() {
    document.querySelector('.card-container').scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});








// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}















// const items = document.querySelectorAll('.carousel .carousel-item');
// let currentItem = 0;
// const totalItems = items.length;
// const nextBtn = document.querySelector('.carousel-control-next');
// const prevBtn = document.querySelector('.carousel-control-prev');

// function updateCarousel() {
//   items.forEach((item, index) => {
//     if (index === currentItem) {
//       item.classList.add('active');
//       item.classList.remove('carousel-item-next', 'carousel-item-prev');
//     } else if (index === (currentItem - 1 + totalItems) % totalItems) {
//       item.classList.add('carousel-item-prev');
//       item.classList.remove('active', 'carousel-item-next');
//     } else if (index === (currentItem + 1) % totalItems) {
//       item.classList.add('carousel-item-next');
//       item.classList.remove('active', 'carousel-item-prev');
//     } else {
//       item.classList.remove('active', 'carousel-item-next', 'carousel-item-prev');
//     }
//   });
// }

// nextBtn.addEventListener('click', () => {
//   currentItem = (currentItem + 1) % totalItems;
//   updateCarousel();
// });

// prevBtn.addEventListener('click', () => {
//   currentItem = (currentItem - 1 + totalItems) % totalItems;
//   updateCarousel();
// });

// updateCarousel();



