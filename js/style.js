// console.log("Testing..")

(function () {
    window.addEventListener('scroll', function(){
        const isHeaderOn = document.querySelector('.layout-header');
        document.documentElement.scrollTop > 50 ?  isHeaderOn.classList.add('on') : isHeaderOn.classList.remove('on')
    });
})();

var isNavShow = false;
function onClickToggleNavigation() {
    this.isNavShow = !this.isNavShow;
}

function myFunction(){
    var x = document.querySelector('.layout-header-gnb-area');
    
    if(x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
// (function() {
//     window.addEventListener('click', function(){
//         const isToggleClick = document.querySelector('.gnb-selector-toggle');
        
//         if(isNavShow == true){
//             this.document.getElementsByClassName('layout-header-gnb-area').classList.add('state-click')
//             this.document.getElementsByClassName('layout-header-gnb-area').style.display = "";
//         } else {
//             this.document.getElementsByClassName('layout-header-gnb-area').classList.remove('state-click')
//             this.document.getElementsByClassName('layout-header-gnb-area').style.display = "none";
//         }
//     });
// })();

// function myFunction(){
//     var x = document.querySelector('.gnb-selector-toggle');
//     var y = document.querySelector('.layout-header-gnb-area');

//     if(x.style.display == "none"){
//         y.classList.add
//         x.style.display = "block";
//     }
// }

// $(function() {
//     $(".gnb-selector-toggle").click(function(){
//         $(".layout-header-gnb-area").toggle();
//     });
// });