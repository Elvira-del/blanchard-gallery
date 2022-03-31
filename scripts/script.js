// dropdown
let dropBtns = document.querySelectorAll(".header-dropdown__btn");

dropBtns.forEach(function(dropBtn) {
    dropBtn.addEventListener("click", function() {
        let dropList = dropBtn.parentNode.querySelector(
            ".header-dropdown__content"
        );
        let dropIcon = dropBtn.parentNode.querySelector(".header-dropdown__icon");

        dropList.classList.toggle("is--show");

        if (dropList.classList.contains("is--show")) {
            dropBtn.classList.add("header-dropdown__btn--active");
        } else {
            dropBtn.classList.remove("header-dropdown__btn--active");
        }

        dropIcon.classList.toggle("header-dropdown__icon--active");

        window.addEventListener("click", function(e) {
            let target = e.target;

            if (!target.closest(".header-dropdown__content") &&
                !target.closest(".header-dropdown__btn")
            ) {
                dropList.classList.remove("is--show");
                dropIcon.classList.remove("header-dropdown__icon--active");
                dropBtn.classList.remove("header-dropdown__btn--active");
            }
        });
    });
});

// burger menu
let burgerOpen = document.querySelector(".header-top__burger-btn-open");
let burgerClose = document.querySelector(".header-nav__btn-close");
let burgerMenu = document.querySelector(".header-nav");
let burgerLink = document.querySelectorAll(".header-nav__link");

burgerOpen.addEventListener("click", function() {
    burgerMenu.classList.add("header-nav--active");
    document.body.classList.add("overflow-hidden");
    document
        .querySelector(".header-nav__btn-log")
        .classList.remove("bg-dark-focus");
});

burgerClose.addEventListener("click", function() {
    burgerMenu.classList.remove("header-nav--active");
    document.body.classList.remove("overflow-hidden");
    document.querySelector(".header-nav__btn-log").classList.add("bg-dark-focus");
});

burgerLink.forEach(function(menuLink) {
    menuLink.addEventListener("click", function() {
        burgerMenu.classList.remove("header-nav--active");
        document.body.classList.remove("overflow-hidden");
    });
});

// search
let searchOpen = document.querySelector(".header-top__search-btn-open");
let searchClose = document.querySelector(".header-search__btn-close");
let searchForm = document.querySelector(".header-search--top");

searchOpen.addEventListener("click", function() {
    searchForm.classList.add("header-search--active");
    this.classList.add("active");
});

searchClose.addEventListener("click", function() {
    searchForm.classList.remove("header-search--active");
    searchOpen.classList.remove("active");
});

// checkbox
let checkBox = document.querySelectorAll(".gallery-container__checkbox-input");
let labelCheck = document.querySelectorAll(
    ".gallery-container__checkbox-label"
);

document.querySelector(
    ".gallery-container__checkbox-input:checked"
).parentNode.style.color = "#c283f3";

checkBox.forEach(function(check) {
    check.addEventListener("change", function(e) {
        let input = e.currentTarget.dataset.input;

        if (this.checked) {
            document.querySelector(`[data-target="${input}"]`).style.color =
                "#c283f3";
        } else if (this.unchecked) {
            document.querySelector(`[data-target="${input}"]`).style.color =
                "#ffffff";
        } else {
            document.querySelector(`[data-target="${input}"]`).style.color = "";
        }
    });
});

// form
let formBtn = document.querySelector(".contacts__btn");

if (screen.width <= 576) {
    formBtn.textContent = "Заказать";
} else {
    formBtn.textContent = "Заказать обратный звонок";
}