const accordion = document.getElementsByClassName("content-container");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function (e) {
    console.log(e.target);
    this.classList.toggle("active");
    console.log(accordion[i].classList);
  });
}
