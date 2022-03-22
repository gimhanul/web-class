let gbb = document.getElementById("gbb");

function showGbb() {
    let result = Math.floor(Math.random()*3+1);

    switch(result) {
        case 1:
            result = "rock";
            break;
        case 2:
            result = "scissor";
            break;
        case 3:
            result= "paper";
            break;
    }

    gbb.textContent = result;
}