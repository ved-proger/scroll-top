function scrollTop(item) {

   const goTo = document.querySelector(item);
   const windowHeight = window.innerHeight;
   const rangeGoTo = Number(goTo.dataset.scrollTop);
   const showRange = rangeGoTo * windowHeight;

   let positionScroll = pageYOffset;

   if (positionScroll >= showRange) {
      goTo.classList.add("_show");

      goTo.addEventListener("click", () => {
         window.scrollTo({
            top: 0,
            behavior: "smooth",
         })
      });
   }
   else {
      goTo.classList.remove("_show");
   }

}

window.addEventListener("scroll", () => {

   if (document.querySelector("[data-scroll-top]")) {
      scrollTop('[data-scroll-top]');
   }

});

