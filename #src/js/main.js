
window.onload = function () {

    // Плавный скрол к нужному блоку меню
    $(function () {
        $('#menu').on('click', 'a', function (event) {
            event.preventDefault();
            let id = $(this).attr('href');
            let top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top }, 1300);
        })
    })
    // скрол при клике на arrow down in  header
    $(function () {
        $('#arrow').on('click', 'a', function (event) {
            event.preventDefault();
            let id = $(this).attr('href');
            let top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top }, 1300);
        })
    })
    //прокрутка вверх при клике на кнопку внизу страницы справа

    $(function () {
        $(document).on('click', '#button-fix', function (event) {
            event.preventDefault();
            let id = $(this).attr('href');
            let top = $(id).offset().top;
            $('body,html').animate({ scrollTop: 0 }, 1300);

        })
    })
    // Изменение менюшки при скроле

    $(document).scroll(() => {
        if ($(window).scrollTop() > 100) {
            $('.header-nav').addClass("header-nav__scroll");

        } else {
            $('.header-nav').removeClass('header-nav__scroll');
        }
    })

    // Heder слайдер

    $('.header-slider').slick({
        dots: true,
        infinite: true,
        fade: true,
        slidesToScroll: 1,
        cssEase: 'linear',
        speed: 200,
        slidesToShow: 1,
        prevArrow: false,
        nextArrow: false,

    });

    // news слайдер

    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,

    });


}

//карта
function initMap() {
    let uluru = {

        lat: 40.6783568970208,
        lng: -73.8978482328249
    };

    let map = new google.maps.Map(document.querySelector(".map-content"), {
        center: uluru,
        zoom: 12,
        //Стиль карты
        styles: [
            {
                elementType: "geometry",
                stylers: [{ color: "#f5f5f5" }],
            },
            {
                elementType: "labels.icon",
                stylers: [{ visibility: "off" }],
            },
            {
                elementType: "labels.text.fill",
                stylers: [{ color: "#616161" }],
            },
            {
                elementType: "labels.text.stroke",
                stylers: [{ color: "#f5f5f5" }],
            },
            {
                featureType: "administrative.land_parcel",
                elementType: "labels.text.fill",
                stylers: [{ color: "#bdbdbd" }],
            },
            {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{ color: "#eeeeee" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#757575" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#e5e5e5" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9e9e9e" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: '#ffffff' }],
            },
            {
                featureType: "road.arterial",
                elementType: "labels.text.fill",
                stylers: [{ color: "#757575" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#dadada" }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#616161" }],
            },
            {
                featureType: "road.local",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9e9e9e" }],
            },
            {
                featureType: "transit.line",
                elementType: "geometry",
                stylers: [{ color: "#e5e5e5" }],
            },
            {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [{ color: "#eeeeee" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#c9c9c9" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9e9e9e" }],
            },
        ]

    });

}





