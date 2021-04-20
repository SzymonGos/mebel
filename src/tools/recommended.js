const buttons = document.querySelectorAll(".recommendedBtn");
const recommendedBox = document.querySelector(".box");

function showRecommendations(){
    recommendedBox.classList.toggle("hide")
}
for (const button of buttons) {
    button.addEventListener("click", showRecommendations, false);
}

export {showRecommendations}

// set timeout for displaying btn and recommenderd box