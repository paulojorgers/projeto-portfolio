document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu-links");
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});

function openModal(element) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = element.src;
    captionText.innerHTML = element.alt;
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
