document.addEventListener("DOMContentLoaded", function (event) {
    let img_src = ["W.jfif", "sunset.jfif", "avc.jfif"];
    let count = 0;
    img = document.getElementById("imgs");
    function slider() {
        img.src = img_src[count];
        count++;
        if (count > 2)
            count = 0;
    }
    setInterval(slider, 3000);

});