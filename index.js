const colors = ["#FFFFFF", "#C0C0C0", "#FF0050", "#00FF00", "#008080", "#FF00FF", "#000120"];


function getRandomColor() {
    var random = Math.random();
    random = Math.floor(random * colors.length);
    return random;
}


document.getElementById("but").addEventListener("click", () => {
    document.body.style.backgroundColor = colors[getRandomColor()];
    document.getElementById("code").textContent = colors[getRandomColor()];
});


//Using jQuery
// $("#but").click(() => {
//     $("body").css("backgroundColor", colors[getRandomColor()]);
// })

