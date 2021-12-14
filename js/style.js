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


function checkClick() {
    var idValue = document.getElementById("cars");
    var defaultValue = document.querySelector(".default p");
    
    console.log(defaultValue.style.display);
    
    if(idValue.style.display === "block") {
        if(defaultValue.style.display === "block"){
            defaultValue.style.defaultValue = "none";
        } else {
            defaultValue.style.defaultValue = "block";
        }
    }
}

