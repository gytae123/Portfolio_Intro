// document.addEventListener('scroll', function() {
//     const aboutContent = document.querySelector('.about__content');
//     const aboutImgWrapper = document.querySelector('.about__img-wrapper');

//     const contentPosition = aboutContent.getBoundingClientRect().top;
//     const imgWrapperPosition = aboutImgWrapper.getBoundingClientRect().top;
//     const screenPosition = window.innerHeight / 2.5;

//     if (contentPosition < screenPosition || imgWrapperPosition < screenPosition) {
//         aboutContent.classList.add('animate__content');
//         aboutImgWrapper.classList.add('animate__img-wrapper');
//     }
// });




document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY >= 400) {
            document.querySelectorAll('.letter').forEach(element => {
                element.classList.add('reveal');
            });
        }
    });
});
