// JavaScript for Modal
const modal = document.getElementById("portfolioModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeModal = document.querySelector(".close");

document.querySelectorAll(".portfolio-item").forEach(item => {
    item.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.querySelector("img").src;
        captionText.innerHTML = this.querySelector("h3").innerHTML + " - " + this.querySelector("p").innerHTML;
    });
});

// Close modal
closeModal.onclick = function() {
    modal.style.display = "none";
};



