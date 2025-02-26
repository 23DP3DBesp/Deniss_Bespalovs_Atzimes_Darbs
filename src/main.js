document.addEventListener("DOMContentLoaded", () => {
    const changeCarBtn = document.getElementById("changeCar");
    const factBtn = document.getElementById("loadFact");
    const factText = document.getElementById("fact");

    changeCarBtn?.addEventListener("click", changeBackground);

    if (factBtn && factText) {
        factBtn.addEventListener("click", fetchCatFact);
        fetchCatFact();
    }

    function fetchCatFact() {
        fetch("https://catfact.ninja/fact")
            .then(response => response.json())
            .then(data => factText.textContent = data.fact)
    }

    function changeBackground() {
        let images = [
            "src/image/f90.png",
            "src/image/svj.png",
            "src/image/rs7.png",
            "src/image/e39.png",
            "src/image/e38.png",
            "src/image/e60.png",
        ];

        let randomIndex = Math.floor(Math.random() * images.length);
        document.body.style.backgroundImage = `url('${images[randomIndex]}')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center"
        document.body.style.backgroundRepeat = "no-repeat";
    }
});
