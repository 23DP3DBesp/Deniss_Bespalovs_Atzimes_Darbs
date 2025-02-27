function getCATFact() {
    fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(data => {
            document.getElementById("cat-fact").innerText = data.fact;
        })
        .catch(error => console.error(error));
}

document.getElementById("colorBtn").addEventListener("click", function() {
    const colors = ["#545454", "#ffffff"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});