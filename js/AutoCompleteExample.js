function toggleIcon(selectorName, containerName) {
    var x = document.querySelector(selectorName);
    var y = document.querySelector(containerName);

    x.addEventListener("click", () => {
        y.classList.toggle("active");
        y.style.display = "block";
    });

    $(document).mouseup(function (e) {
        y.classList.remove("active");
        y.style.display = "none";
    });
}

function getValue(){
    var a = document.querySelectorAll(".state-title");
    console.log(a);
}