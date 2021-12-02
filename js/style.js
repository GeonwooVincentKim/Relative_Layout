// console.log("Testing..")

(function () {
    window.addEventListener('scroll', function(){
        const isHeaderOn = document.querySelector('.layout-header');
        document.documentElement.scrollTop > 50 ?  isHeaderOn.classList.add('on') : isHeaderOn.classList.remove('on')
    });
})();
