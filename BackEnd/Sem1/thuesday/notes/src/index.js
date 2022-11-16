let beginParagraph = document.getElementById("beginParagraph");

beginParagraph.onclick = function() {
    animateRandomlyColor();
}

function animateRandomlyColor() {

    const colors = [
        "red",
        "blue",
        "black",
        "cyan"
    ];

    beginParagraph.style.color = colors[Math.floor(Math.random() * colors.length)];
}