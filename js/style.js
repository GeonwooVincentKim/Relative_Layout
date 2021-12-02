(function () {
    window.addEventListener('scroll', function(){
        const isHeaderOn = document.querySelector('.layout-header');
        document.documentElement.scrollTop > 50 ?  isHeaderOn.classList.add('on') : isHeaderOn.classList.remove('on')
    });
})();

function GNBClick(){
    var x = document.querySelector('.layout-header-gnb-area');
    
    if(x.style.display === "none"){
        x.style.display = "block";
        x.classList.add('state-click');
    } else {
        x.style.display = "none";
        x.classList.remove('state-click');
    }
}
