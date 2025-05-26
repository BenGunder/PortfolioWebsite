// JavaScript source code
function waveGenerator(targetId, color, zIndex) {
    const svgWidth = window.innerWidth + 200;
    const svgHeight = 500;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    svg.setAttribute("width", svgWidth);
    svg.setAttribute("height", svgHeight);
    svg.style.position = "absolute";
    svg.style.top = "-200";
    svg.style.left = "0";
    svg.style.zIndex = zIndex;

    const frequency = Math.random() * 0.005 + 0.01;
    const amplitude = Math.random() * 40 + 40;
    const phase = Math.random() * 0.5;


    let pathData = `M 0 ${svgHeight / 5}`;

    for (let x = 0; x < svgWidth; x++) {
        const y = amplitude * Math.sin(frequency * x + phase) + svgHeight / 5;
        pathData += `L ${x} ${y}`;
    }

    pathData += `L ${svgWidth} ${svgHeight} L 0 ${svgHeight} Z`;

    path.setAttribute("d", pathData);
    path.setAttribute("fill", color);

    svg.appendChild(path);

    const waveContainer = document.getElementById(targetId);
    waveContainer.style.position = "relative";
    waveContainer.appendChild(svg);
    
}

document.addEventListener("DOMContentLoaded", function () {
    waveGenerator("wave1", "#F4E9D4", 1); 
    waveGenerator("wave2", "#B9D4B4", 2);
    waveGenerator("wave3", "#92C1A9", 3); 
    waveGenerator("wave4", "#6AAE9D", 4); 
    waveGenerator("wave5", "#508683", 5);
    waveGenerator("wave6", "#355D69", 6);
});


