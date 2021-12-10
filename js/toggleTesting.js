window.onload = function(){
    let c1 = document.querySelector('.c1');
    let c2 = document.querySelector('.c2');
    let c3 = document.querySelector('.c3');

    c1.addEventListener('click', function() {
        // c1.classList.toggle('flipped');
        
        if(c1.classList.contains("flipped")){
            c1.classList.remove("flipped");
        } else {
            c1.classList.add("flipped");
        }
    });

    c2.addEventListener('click', function() {
        c2.classList.add('flipped');
    });

    c3.addEventListener("click", function(){
        if (c3.classList.contains("flipped")){
            c3.classList.remove("flipped");
        } else {
            c3.classList.add("flipped");
        }
    });

    /* c3.addEventListener('click', function() {
        c3.classList.remove('flipped');
    });*/ 
}
