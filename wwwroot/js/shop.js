﻿document.addEventListener('DOMContentLoaded', function () {
    // Price Range Slider
    var priceRange = document.querySelector('.price-range');
    if (priceRange) {
        noUiSlider.create(priceRange, {
            start: [10, 540],
            connect: true,
            range: {
                'min': 10,
                'max': 540
            }
        });

        priceRange.noUiSlider.on('update', function (values, handle) {
            var value = values[handle];
            if (handle) {
                document.getElementById('maxamount').value = value;
            } else {
                document.getElementById('minamount').value = value;
            }
        });
    }

    // Owl Carousel for Latest Products
    var latestProductSlider = document.querySelectorAll('.latest-product__slider');
    latestProductSlider.forEach(function (slider) {
        $(slider).owlCarousel({
            loop: true,
            margin: 20,
            items: 1,
            nav: true,
            dots: false,
            smartSpeed: 1200,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    });

    // Owl Carousel for Discount Products
    var discountProductSlider = document.querySelector('.product__discount__slider');
    if (discountProductSlider) {
        $(discountProductSlider).owlCarousel({
            loop: true,
            margin: 20,
            items: 3,
            nav: true,
            dots: false,
            smartSpeed: 1200,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    }
});
