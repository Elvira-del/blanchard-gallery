let tabsLink = document.querySelectorAll(".accordion__link");
let tabsContent = document.querySelectorAll(".tabs-content");

tabsLink.forEach(function(tabsActive) {
    tabsActive.addEventListener("click", function(e) {
        let path = e.currentTarget.dataset.path;

        tabsLink.forEach(function(active) {
            active.classList.remove("accordion__link--active");
        });

        e.currentTarget.classList.add("accordion__link--active");

        tabsContent.forEach(function(show) {
            show.classList.remove("tabs-content--active");
        });

        document
            .querySelector(`[data-target="${path}"]`)
            .classList.add("tabs-content--active");
    });
});