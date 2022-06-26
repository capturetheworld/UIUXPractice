let cnvs = document.getElementById('color-generation');
let pick = document.getElementById("picker");
cnvs.width = 1920;
cnvs.height = 1080;
let ctx = cnvs.getContext("2d");
ctx.beginPath();
ctx.fillStyle = pick.value;
ctx.fillRect(0,0,1920,1080);
ctx.stroke();
updateDownload();

function updateDownload(){
    let cnt3 = document.getElementById("toAdd");
    const img = cnvs.toDataURL('image/png');
    let btn = document.createElement("a");
    btn.classList.add("button");
    btn.href = img;
    btn.download = "color.png";
    btn.text = "Downlad Image";
    if(cnt3.children.length>1){
        cnt3.removeChild(cnt3.children[1]);
    }
    cnt3.appendChild(btn);
}


// function changecolor() {
    
//     ctx.fillStyle = pick.value; 
//     // console.log("color is now");
//     // console.log(pick.value);

// }


document.addEventListener('click', function(event) {
    let isClickInsideElement = pick.contains(event.target);
    if (!isClickInsideElement) {
        // console.log("WOWW")
        ctx.fillStyle = pick.value;
        ctx.fillRect(0,0,1920,1080);
        ctx.stroke();
        updateDownload();
    }
});