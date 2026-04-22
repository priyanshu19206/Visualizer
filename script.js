let array = [];
let delay = 500;

function createBars() {
    const input = document.getElementById("arrayInput").value;
    array = input.split(",").map(Number);

    const container = document.getElementById("barContainer");
    container.innerHTML = "";

    let maxValue = Math.max(...array);

    array.forEach(value => {
        const bar = document.createElement("div");
        bar.classList.add("bar");

        bar.style.height = (value / maxValue) * 300 + "px";
        bar.innerText = value;

        container.appendChild(bar);
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort() {

    const bars = document.querySelectorAll(".bar");

    for (let i = 0; i < array.length - 1; i++) {

        for (let j = 0; j < array.length - i - 1; j++) {

            bars[j].style.background = "red";
            bars[j + 1].style.background = "red";

            await sleep(delay);

            if (array[j] > array[j + 1]) {

                // Swap values
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                // Swap heights visually
                let tempHeight = bars[j].style.height;
                bars[j].style.height = bars[j + 1].style.height;
                bars[j + 1].style.height = tempHeight;

                // Update numbers
                bars[j].innerText = array[j];
                bars[j + 1].innerText = array[j + 1];
            }

            await sleep(delay);

            bars[j].style.background =
                "linear-gradient(180deg, #4facfe, #00f2fe)";
            bars[j + 1].style.background =
                "linear-gradient(180deg, #4facfe, #00f2fe)";
        }

        bars[array.length - i - 1].style.background = "green";
    }

    bars[0].style.background = "green";
}
