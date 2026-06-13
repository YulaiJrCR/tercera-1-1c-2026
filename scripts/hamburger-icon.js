console.log("Hamburger icon script loaded");
(function () {
    const MAIN_OBJ ={
        init: function () {
            this.eventHandler();
        },
        eventHandler: function () {
            document.querySelector(".hamburger-icon").addEventListener("click", function () {
                document.querySelector(".menu-links").classList.toggle("menu-links-open");
            });
        } 
    }
    MAIN_OBJ.init();
})();