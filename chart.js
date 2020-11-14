const chart = document.querySelector('.chart');

//create canvas
const canvas = document.createElement('canvas');
canvas.width = 50;
canvas.height = 50;

//append canvas to chart element
chart.appendChild(canvas);

//to draw on canvas, we need to get context od canvas
const ctw = canvas.getContext('2d');

//change line width
ctw.lineWidth = 8;

//circle radius
const R = 20;

function drawCircle(color, ratio, anticlockwise){
    ctw.strokeStyle = color;
    ctw.beginPath();
    ctw.arc( canvas.width/2, canvas.height/2, R, 0, ratio *2 * Math.PI, anticlockwise)
    ctw.stroke();
}

function updateChart(income, outcome){
    let ratio = income / (income+outcome)
    drawCircle('#FFF', -ratio, true)
    drawCircle('#f0624d', 1-ratio , false)
}



