document.querySelectorAll(".header-dropdown__list").forEach((item) => {
  new SimpleBar(item, {
    autoHide: false,
    scrollbarMaxSize: 28,
  });
});
