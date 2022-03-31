let modalCont = document.querySelector(".gallery-container-modal");
let modalWin = document.querySelectorAll(".gallery-modal");
let images = document.querySelectorAll(".gallery-swiper__slide");

images.forEach(function(img) {
    img.addEventListener("click", function(e) {
        let pic = e.currentTarget.dataset.image;

        modalCont.classList.add("is--active");

        if (modalCont.classList.contains("is--active") === true) {
            document.body.style.overflow = "hidden";
        }

        modalWin.forEach(function(modalShow) {
            modalShow.classList.remove("gallery-modal--active");
        });

        document
            .querySelector(`[data-modal="${pic}"]`)
            .classList.add("gallery-modal--active");

        modalWin.forEach(function() {
            document.querySelector(".gallery-modal--active").focus();
        });
    });
});

let buttons = document.querySelectorAll(".gallery-modal__btn-close");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        modalCont.classList.remove("is--active");
        document.body.style.overflow = "visible";
    });
});