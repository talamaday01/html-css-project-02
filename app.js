const links = document.querySelectorAll(".header .nav li");
[...links].forEach((item) =>
    item.addEventListener("click", function (e) {
        [...links].forEach((item) => item.classList.remove("active"));
        item.classList.add("active");
    })
);
