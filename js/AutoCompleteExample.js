function toggleIcon(selectorName, containerName) {
    var x = document.querySelector(selectorName);
    var y = document.querySelector(containerName);
    // const selected = document.querySelector(".search-selected");
    const checked = document.querySelectorAll(".check");
    var getList = [
        "하노이 (HAN - 노이바이 국제공항)", "다낭 (DAD - 다낭 국제공항)", 
        "푸꾸옥 (PQC - 푸꾸욱 국제공항)", "다랏 (DLI - 리엔 쿠엉)",
        "후에 (HUI - 푸바이 국제공항)", "하이퐁 (HPH - 캇비 국제공항)"
    ]

    x.addEventListener("click", () => {
        y.classList.toggle("active");
        y.style.display = "block";
    });

    // console.log(checked.innerHTML);
    checked.forEach(o => {
        o.addEventListener("click", (e) => {
            console.log(o.innerHTML);
        })
    })

    // $(document).mouseup(function (e) {
    //     y.classList.remove("active");
    //     y.style.display = "none";
    // });
}

// function getValue(){
//     var a = document.querySelectorAll(".state-title");
//     a.forEach(o => {

//         o.addEventListener("click", event => {
//             console.log(o.innerHTML);
//             o.autocomplete({
//                 source: o
//             });
//         })

        
//         o.addEventListener("click", event => {
//             console.log(o);
//         })
//     })
// }