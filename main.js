const btn = document.querySelectorAll(".btn");
for(i=0; i<btn.length; i++) {
    btn[i].addEventListener("click", function() {
        this.parentElement.parentElement.classList.toggle("active");
    });
};