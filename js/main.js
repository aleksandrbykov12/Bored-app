const TITLE = "Ура, теперь не скучно 🔥";
const BACKGROUND_STYLE = 'linear-gradient(180deg, rgba(0, 176, 28, 0.20) 24.48%, rgba(255, 255, 255, 0.00) 100%)';

const bodyNode = document.querySelector(".body");
const titleNode = document.querySelector(".title");
const textNode = document.querySelector(".text");
const btnNode = document.querySelector(".btn");

btnNode.addEventListener('click', test);

function render(activity) {
    titleNode.innerText = TITLE;
    textNode.innerText = activity;
    bodyNode.style.background = BACKGROUND_STYLE;
}

function test() {
    fetch("http://www.boredapi.com/api/activity/")
    .then(response => {
        return response.json();
    })
    .then(res => {
        const activity = res.activity;
        render(activity);
    })
}