
import {initSwiperSlider} from "./modules/slider";
import initGallery from "./modules/gallery";

document.addEventListener('DOMContentLoaded', () => {
    initSwiperSlider('.testimonials_slider', '.testimonials_slider-nav', {
        spaceBetween: 15,
        autoplay: true,
        speed: 1300,
        breakpoints: {
            767.98: {
                slidesPerView: 2,
            },
            1023.98: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    });
    initSwiperSlider('.services_gallery-slider', '.services_gallery-slider_nav', {
        spaceBetween: 15,
        autoplay: true,
        speed: 1500,
        slidesPerView: 1,
        breakpoints: {
            567.98: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1023.98: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    })
    initGallery();
})