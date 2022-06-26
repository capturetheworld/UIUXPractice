let cnvs = document.getElementById('color-generation');
cnvs.width = 1920;
cnvs.height = 1080;
let ctx = cnvs.getContext("2d");
ctx.beginPath();
ctx.fillRect(0,0,1920,1080);
ctx.stroke();
ctx.fillRect='green';

let cnt3 = document.getElementById("toAdd");
const img    = cnvs.toDataURL('image/png');
// console.log(typeof(c);

console.log(cnt3);

let btn = document.createElement("a");
btn.classList.add("button");
btn.href = img;
btn.download = "google.png";
btn.text = "Downlad Image";
cnt3.appendChild(btn);
