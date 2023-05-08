window.onscroll = function(){
    if (document.documentElement.scrollTop > 100) {
        document.querySelector(".arribacaja").classList.add("show");
    } else {
        document.querySelector(".arribacaja").classList.remove("show");
    }
}

document.querySelector(".arribacaja").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});