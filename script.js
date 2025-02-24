const current = document.querySelector("#current");
const imgs = document.querySelector("#images");
const img = document.querySelectorAll("#images img");
const opacity = 0.6;

// console.log(imgs);
// img[0].style.opacity=opacity;

imgs.addEventListener("click", (event) => {
    img.forEach((imgElem) => {
        imgElem.style.opacity = 1;
    });
    // console.log(event);
    const clickedimgurl = event.target.src;
    current.src = clickedimgurl;
    current.classList.add("fade-In");
    setTimeout(() => {
        current.classList.remove("fade-In");
    }, 600)
    event.target.style.opacity = opacity;
})



