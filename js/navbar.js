document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("navToggle").addEventListener("click", function () {
    this.classList.toggle("active");
    document.getElementById("nav_items").classList.toggle("active");

    const spans = this.querySelectorAll("span");
    if (this.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translateY(8px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translateY(-8px)";
    } else {
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    }
  });
});
