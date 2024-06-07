const btn = document.querySelector("#btn");
const body = document.querySelector('body');
btn.onclick = function() {
    btn.classList.toggle('active');
    body.classList.toggle('active');
}